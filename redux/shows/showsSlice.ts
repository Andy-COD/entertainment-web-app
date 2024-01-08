import { MovieData } from "@/utils/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const getShows = async () => {
  try {
    const response = await axios.get("/api/getshows");
    if (response.data.success) {
      return response.data.body;
    }
    return;
  } catch (error) {
    return error;
  }
};

const shows = await getShows();
const initalState: MovieData[] = shows;
