export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzA0Y2VkZmY2OTFiNDkwYjY3MjA2YzFmMmE4NjdjYiIsInN1YiI6IjY2NzNmNzE4MTdjNjliMzc3NzkzZDVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h66XY7ta1f6DZaYgAcgOqWoKoflXFruyqa-5c5cH20M",
  },
};

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
