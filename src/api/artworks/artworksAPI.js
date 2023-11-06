export const getArtworks = async () => {
    try {
        const response = await fetch(`https://openaccess-api.clevelandart.org/api/artworks/?limit=10`);
        const { data } = await response.json();
        return data.filter((card) => "web" in card.images);
    } catch (error) {
        throw new Error("There was a problem with the fetch operation. Please Try again later");
    }
};