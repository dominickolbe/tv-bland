import { IConfig } from "overmind";
import { createHook } from "overmind-react";
import { actions } from "./actions";
import { effects } from "./effects";
import { onInitialize } from "./onInitialize";
import { state } from "./state";

export const config = {
  onInitialize,
  state,
  actions,
  effects,
};

export const useStore = createHook<typeof config>();

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}
