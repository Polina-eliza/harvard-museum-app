import { getAuth, signOut } from "firebase/auth";

export async function handleSignOut(store, router, toaster) {
  const auth = getAuth();
  try {
    await signOut(auth);
    localStorage.removeItem("isLoggedIn");
    store.commit("setLoginStatus", false);
    router.push("/home");
    toaster.success("Successfully logged out");
  } catch (error) {
    toaster.error(`Sign out error: ${error}`);
  }
}