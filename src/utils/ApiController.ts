import axios from "axios";
import { createErr, createOk } from "option-t/cjs/PlainResult";
import { API_BASE } from "../constants";
import { RtPeople, RtSchedule, RtTvShow, RtTvShowsSearch } from "../models";

export const ApiController = {
  get: {
    search: async (query: string) => {
      try {
        const response = await axios.get(`${API_BASE}/search/shows?q=${query}`);
        const result = RtTvShowsSearch.check(response.data);
        return createOk(result);
      } catch (error) {
        console.error(error);
        return createErr(error);
      }
    },
    schedule: async () => {
      try {
        const response = await axios.get(`${API_BASE}/schedule?country=GB`);
        const result = RtSchedule.check(response.data);
        return createOk(result);
      } catch (error) {
        console.error(error);
        return createErr(error);
      }
    },
    tvshow: async (id: number) => {
      try {
        const response = await axios.get(
          `${API_BASE}/shows/${id}?embed[]=cast`
        );
        const result = RtTvShow.check(response.data);
        return createOk(result);
      } catch (error) {
        console.error(error);
        return createErr(error);
      }
    },
    people: async (id: number) => {
      try {
        const response = await axios.get(`${API_BASE}/people/${id}`);
        const result = RtPeople.check(response.data);
        return createOk(result);
      } catch (error) {
        console.error(error);
        return createErr(error);
      }
    },
  },
};
