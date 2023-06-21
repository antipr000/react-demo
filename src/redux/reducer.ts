import { Action, ActionType, State } from "./types";

const initialState: State = {
  sentences: [],
};

export const rootReducer = (state = initialState, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.UPDATE_SENTENCES:
      return {
        ...state,
        sentences: payload,
      };
    default:
      return state;
  }
};
