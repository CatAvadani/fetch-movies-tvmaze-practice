const BASE_URL = 'https://api.tvmaze.com';

export interface Show {
  show: {
    id: number;
    url: string;
    name: string;
    genres: string[];
    rating: {
      average: number;
    };
    image: {
      medium: string;
      original: string;
    };
    summary: string;
  };
}

export const searchShows = async (
  query: string
): Promise<Show[] | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/search/shows?q=${query}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
