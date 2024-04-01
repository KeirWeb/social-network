import { ChangeEvent, FC, useRef } from 'react'
import { DialogsState } from '../../types/dialogsPage'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.scss'
import Message from './Message/Message'

type DialogsPropsType = {
	dialogsPage: DialogsState
	createMessage: () => void
	updateMessage: (text: string) => void
}

const Dialogs: FC<DialogsPropsType> = ({ dialogsPage, createMessage, updateMessage }) => {
	const textRef = useRef<HTMLTextAreaElement | null>(null)
	const handleClick = () => {
		if (textRef.current?.value.trim()) {
			createMessage()
		}
	}

	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const text = e.target.value.trimStart()
		updateMessage(text)
	}

	return (
		<div className={s.root}>
			<h1 className={s.title}>Dialogs</h1>
			<div className={s.row}>
				<div className={s.dialogs}>
					<ul>
						{dialogsPage.dialogsData.map(data => {
							return <DialogItem key={data.id} name={data.name} id={data.id} />
						})}
					</ul>
				</div>
				<div className={s.messages}>
					<ul>
						{dialogsPage.messagesData.map(message => {
							const isMyMassage = message.id === 0
							return <Message key={message.id} message={message.message} isMyMassage={isMyMassage} />
						})}
					</ul>
					<div className={s.newMessageWrapper}>
						<textarea
							ref={textRef}
							value={dialogsPage.newMessageText}
							onChange={handleOnChange}
							className={s.input}
						></textarea>
						<button onClick={handleClick} className={s.btn}>
							push
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
