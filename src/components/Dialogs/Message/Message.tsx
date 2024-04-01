import { FC } from 'react'
import s from './Message.module.scss'

interface MessageProps {
	message: string
	isMyMassage: boolean
}

const Message: FC<MessageProps> = ({ message, isMyMassage }) => {
	const messageClasses = [s.message]
	if (isMyMassage) {
		messageClasses.push(s.right)
	}
	return <li className={messageClasses.join(' ')}>{message}</li>
}

export default Message
