import {
	IEntityUser,
	UserAction,
	UserActionTypes,
} from '../../types/IUser.interface'

const initialState: IEntityUser = {
	users: [],
	totalPages: 0,
	currentPage: 1,
	pageSize: 5,
	followInProgress: {},
}

export const usersReducer = (
	state = initialState,
	action: UserAction
): IEntityUser => {
	switch (action.type) {
		case UserActionTypes.FOLLOW:
			return {
				...state,
				users: state.users.map(el =>
					el.id === action.id ? { ...el, followed: true } : el
				),
			}
		case UserActionTypes.UNFOLLOW:
			return {
				...state,
				users: state.users.map(el =>
					el.id === action.id ? { ...el, followed: false } : el
				),
			}
		case UserActionTypes.SET_USERS:
			return { ...state, users: action.users }
		case UserActionTypes.SET_CURRENT_PAGE:
			return { ...state, currentPage: action.page }
		case UserActionTypes.SET_TOTAL_PAGES:
			return { ...state, totalPages: action.value }
		case UserActionTypes.SET_PAGE_SIZE:
			return { ...state, pageSize: action.value }
		case UserActionTypes.ADD_FOLLOW_PROGRESS:
			return {
				...state,
				followInProgress: {
					...state.followInProgress,
					[action.userID]: action.userID,
				},
			}
		case UserActionTypes.DELETE_FOLLOW_PROGRESS:
			const newState = {
				...state,
				followInProgress: { ...state.followInProgress },
			}
			delete newState.followInProgress[action.userID]
			return newState
		default:
			return state
	}
}
