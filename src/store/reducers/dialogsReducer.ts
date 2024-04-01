import { DialogsAction, DialogsActionType, DialogsState } from '../../types/dialogsPage'

const initialState: DialogsState = {
	dialogsData: [
		{ id: 1, name: 'Dmitry' },
		{ id: 2, name: 'Sasha' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Valera' },
		{ id: 5, name: 'Viktor' },
	],
	messagesData: [
		{ id: 1, message: 'Yo' },
		{ id: 2, message: 'Hi' },
		{ id: 3, message: 'how are you?' },
		{ id: 4, message: 'good thanks' },
	],
	newMessageText: '',
}

export const dialogsReducer = (state = initialState, action: DialogsAction): DialogsState => {
	switch (action.type) {
		case DialogsActionType.UPDATE_NEW_MESSAGE_TEXT: {
			const newState = { ...state }
			if (action.payload) {
				newState.newMessageText = action.payload
			} else {
				newState.newMessageText = ''
			}
			return newState
		}
		case DialogsActionType.ADD_MESSAGE: {
			const currentId = state.messagesData[state.messagesData.length - 1].id
			const newPost = {
				id: currentId + 1,
				message: state.newMessageText,
			}
			const newState = { ...state, messagesData: [...state.messagesData, newPost] }
			newState.newMessageText = ''
			return newState
		}
		default:
			return state
	}
}
