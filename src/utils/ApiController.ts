import axios from "axios";
import { createErr, createOk } from "option-t/cjs/PlainResult";
import { API_BASE } from "../constants";
import { RtSchedule, RtTvShow } from "../models";

export const ApiController = {
  get: {
    schedule: async () => {
      try {
        const response = await axios.get(`${API_BASE}/schedule`);
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
  },
};
