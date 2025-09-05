import axios from "axios";

// const API_BASE_URL = "http://localhost:8080/api/notes";


const API_BASE_URL = "https://notes-app-nh82.onrender.com/";


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});


api.interceptors.request.use(
  (config) => {
    console.log(
      `Making ${config.method.toUpperCase()} request to ${config.url}`
    );
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => {
    console.log("Response received:", response.status);
    return response;
  },
  (error) => {
    console.error("Response error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const noteService = {
  // Get all notes
  getAllNotes: async () => {
    try {
      const response = await api.get("");
      return response.data;
    } catch (error) {
      throw new Error(
        `Failed to fetch notes: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  },

  // Get note 
  getNoteById: async (id) => {
    try {
      const response = await api.get(`/${id}`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error("Note not found");
      }
      throw new Error(
        `Failed to fetch note: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  },

  // Create new note
  createNote: async (noteData) => {
    try {
      const response = await api.post("", noteData);
      return response.data;
    } catch (error) {
      if (error.response?.status === 400) {
        throw new Error(error.response.data.message || "Invalid note data");
      }
      throw new Error(
        `Failed to create note: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  },

  // Update existing note
  updateNote: async (id, noteData) => {
    try {
      const response = await api.put(`/${id}`, noteData);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error("Note not found");
      }
      if (error.response?.status === 400) {
        throw new Error(error.response.data.message || "Invalid note data");
      }
      throw new Error(
        `Failed to update note: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  },

  // Delete note
  deleteNote: async (id) => {
    try {
      await api.delete(`/${id}`);
      return true;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error("Note not found");
      }
      throw new Error(
        `Failed to delete note: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  },
};
