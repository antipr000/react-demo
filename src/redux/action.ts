import { Action, ActionType } from "./types";

export const updateSentences = (sentences: string[]): Action => {
  return {
    type: ActionType.UPDATE_SENTENCES,
    payload: sentences,
  };
};
