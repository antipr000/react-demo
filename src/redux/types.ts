export enum ActionType {
  UPDATE_SENTENCES = "UPDATE_SENTENCES",
}

export type Action = {
  type: ActionType;
  payload: any;
};

export type State = {
  sentences: string[];
};
