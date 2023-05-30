export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  screen: string;
};

export enum SomeActions {
  "X" = "X",
}

export interface XAction {
  action: SomeActions.X;
  payload: Pick<AppState, "screen">;
}

export type Actions = XAction;
