import { OnInitialize } from "overmind";

export const onInitialize: OnInitialize = async (
  { state, effects },
  instance
) => {
  const darkmode = localStorage.getItem("darkmode") == "false" ? false : true;
  state.theme.darkmode = darkmode;
};
