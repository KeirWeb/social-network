import { DialogsActionType, DialogsAddMessageAction, DialogsUpdateNewMessageTextAction } from '../../types/dialogsPage'

export const updateNewMessageTextAction = (text: string): DialogsUpdateNewMessageTextAction => ({
	type: DialogsActionType.UPDATE_NEW_MESSAGE_TEXT,
	payload: text,
})
export const createMessageAction = (): DialogsAddMessageAction => ({ type: DialogsActionType.ADD_MESSAGE })
