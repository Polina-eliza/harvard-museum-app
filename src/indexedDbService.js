const DB_NAME = "exhibitionDatabase";
const DB_VERSION = 1;
const STORE_NAME = "images";
let db;

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = (event) => {
      reject("IndexedDB error: " + event.target.errorCode);
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore(STORE_NAME, { keyPath: "id" });
    };
  });
}

export async function addImage(id, url) {
  if (!db) await openDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put({ id, imageURL: url });

    request.onsuccess = () => resolve();
    request.onerror = (event) =>
      reject("Error adding image: " + event.target.errorCode);
  });
}

export async function getImage(id) {
  if (!db) await openDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME]);
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(id);

    request.onsuccess = (event) => {
      if (event.target.result) {
        resolve(event.target.result.imageURL);
      } else {
        resolve(null);
      }
    };
    request.onerror = (event) =>
      reject(
        `Error fetching image from IndexedDB for id: ${id}: ` +
          event.target.errorCode
      );
  });
}
