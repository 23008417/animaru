"use server";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchAnimeData(animeId) {
  const ANI_GRAPHQL_URL = "https://graphql.anilist.co";
  const API_QUERY = `
    query ($id: Int) {
      Media(id: $id) {
        characters(perPage: 12) {
          edges {
            node {
              id
              name {
                full
              }
              image {
                large
              }
            }
            voiceActors(language: JAPANESE) {
              id
              name {
                full
              }
              image {
                large
              }
            }
          }
        }
        staff(perPage: 20) {
          edges {
            role
            node {
              id
              name {
                full
              }
              image {
                large
              }
            }
          }
        }
      }
    }
  `;

  try {
    console.log(`Preparing to fetch data for animeId: ${animeId}`);

    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const res = await fetch(ANI_GRAPHQL_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          query: API_QUERY,
          variables: { id: animeId },
        }),
      });

      console.log(`Fetch request sent to ${ANI_GRAPHQL_URL} with animeId: ${animeId} (attempt ${attempt})`);

      if (res.status === 429 && attempt < maxAttempts) {
        await delay(500 * attempt);
        continue;
      }

      if (!res.ok) {
        console.error(`Error: Received status code ${res.status}`);
        throw new Error(`Anime data fetch error: ${res.status}`);
      }

      const data = await res.json();
      console.log("Received data:", data);

      if (!data?.data?.Media) {
        console.error("Error: Invalid response structure");
        throw new Error("Invalid response structure");
      }

      return data.data.Media;
    }

    throw new Error("Anime data fetch retry limit reached");
  } catch (error) {
    console.error("Failed to fetch anime data:", error);
    return null;
  }
}
