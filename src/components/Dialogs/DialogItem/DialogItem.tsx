import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import s from './DialogItem.module.scss'

interface DialogItemProps {
	name: string
	id: number
}

const DialogItem: FC<DialogItemProps> = ({ name, id }) => {
	let path = `/dialogs/ + ${id}`
	return (
		<li className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{name}</NavLink>
		</li>
	)
}

export default DialogItem
