export async function fetchTVShows(query) {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();
    return data;
  }
  