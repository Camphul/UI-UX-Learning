import {CounterState} from "~/store/counter/types";

export const state = (): CounterState => {
  return {
    count: 0
  }
};

export default state;
