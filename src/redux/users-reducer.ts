export const TOGGLE_FOLLOWED = "TOGGLE-FOLLOWED";
export const SET_USERS = "SET-USERS";
export const CHANGE_CURRENT_PAGE = "CHANGE-CURRENT-PAGE";
export const CHANGE_TOTAL_PAGES_COUNT = "CHANGE-TOTAL-PAGES-COUNT";
export const CHANGE_IS_FETCHING = "CHANGE-IS-FETCHING";

export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: {
    small: string;
    large: string;
  };
  followed: boolean;
};

export type UserReducerType = {
  users: UserType[];
  pageSize: number;
  currentPage: number;
  totalPageCount: number;
  isFetching: boolean;
};

export type UsersActions =
  | ReturnType<typeof toggleFollowedAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof changeCurrentPageAC>
  | ReturnType<typeof changeTotalPagesCountAC>
  | ReturnType<typeof changeIsFetchingAC>;

const initialState: UserReducerType = {
  users: [],
  pageSize: 5,
  currentPage: 1,
  totalPageCount: 10,
  isFetching: false,
};

const usersReducer = (
  state: UserReducerType = initialState,
  action: UsersActions
): UserReducerType => {
  switch (action.type) {
    case TOGGLE_FOLLOWED:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.id ? { ...u, followed: !u.followed } : u
        ),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case CHANGE_TOTAL_PAGES_COUNT:
      return {
        ...state,
        totalPageCount: action.pages,
      };

    case CHANGE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
};

export const toggleFollowedAC = (id: number) => {
  return { type: TOGGLE_FOLLOWED, id } as const;
};
export const setUsersAC = (users: UserType[]) => {
  return { type: SET_USERS, users } as const;
};
export const changeCurrentPageAC = (page: number) => {
  return { type: CHANGE_CURRENT_PAGE, page } as const;
};
export const changeTotalPagesCountAC = (pages: number) => {
  return { type: CHANGE_TOTAL_PAGES_COUNT, pages } as const;
};
export const changeIsFetchingAC = (isFetching: boolean) => {
  return { type: CHANGE_IS_FETCHING, isFetching } as const;
};
export default usersReducer;
