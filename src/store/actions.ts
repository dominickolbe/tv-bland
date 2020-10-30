import { State } from "./state";

export const actions = {
  toggleAppTheme: ({ state }: { state: State }) => {
    state.theme.darkmode = !state.theme.darkmode;
    localStorage.setItem("darkmode", JSON.stringify(state.theme.darkmode));
  },
};
