interface MessagesData {
	id: number
	message: string
}

interface DialogsData {
	id: number
	name: string
}

export interface DialogsState {
	dialogsData: DialogsData[]
	messagesData: MessagesData[]
	newMessageText: string
}

export enum DialogsActionType {
	ADD_MESSAGE = 'ADD-MESSAGE',
	UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT',
}

export interface DialogsAddMessageAction {
	type: DialogsActionType.ADD_MESSAGE
}
export interface DialogsUpdateNewMessageTextAction {
	type: DialogsActionType.UPDATE_NEW_MESSAGE_TEXT
	payload: string
}

export type DialogsAction = DialogsAddMessageAction | DialogsUpdateNewMessageTextAction
