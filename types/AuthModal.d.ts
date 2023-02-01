export type PageType = "home" | "password" | "register" | "find-account";
export type ActionType = "push" | "pop";

export type HistoryDispatcher = {
  type: ActionType;
  page?: PageType;
};
