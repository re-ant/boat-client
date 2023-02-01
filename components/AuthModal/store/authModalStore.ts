import { HistoryDispatcher, PageType } from "types/AuthModal";
import { create } from "zustand";

interface AuthModalState {
  title: string;
  history: PageType[];
  email: string;
}

interface AuthModalAction {
  setTitle: (newTitle: string) => void;
  updateHistory: (action: HistoryDispatcher) => void;
  setEmail: (newEmail: string) => void;
  reset: () => void;
}

// 페이지 별 모달 제목 반환
const getTitle = (page: PageType) => {
  switch (page) {
    case "home":
    case "password":
      return "로그인";
    case "register":
      return "회원가입";
  }
};

const reducer = (state: PageType[], action: HistoryDispatcher) => {
  switch (action.type) {
    case "push":
      return action.page ? [...state, action.page] : [...state];
    case "pop":
      const newState = [...state];
      newState.pop();
      return newState;
    default:
      return state;
  }
};

const initialState: AuthModalState = {
  title: "로그인",
  history: ["home"],
  email: "",
};

const useAuthModalStore = create<AuthModalState & AuthModalAction>((set) => ({
  ...initialState,
  setTitle: (newTitle) => set(() => ({ title: newTitle })),
  updateHistory: (action) =>
    set((state) => {
      const history = reducer(state.history, action);
      const currentPage = history.at(-1) ?? "home";
      return {
        title: getTitle(currentPage),
        history,
      };
    }),
  setEmail: (newEmail) => set(() => ({ email: newEmail })),
  reset: () => set(initialState),
}));

export default useAuthModalStore;
