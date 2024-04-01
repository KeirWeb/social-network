import { FC } from 'react'
import style from './Post.module.scss'
interface PostProps {
	message: string
}

const Post: FC<PostProps> = ({ message }) => {
	return (
		<li className={style.postItem}>
			<a href='/' className={style.postItem__ava}>
				<img src='https://i.pinimg.com/originals/dc/be/80/dcbe8061a60da1ee10dcba4f0adcef66.jpg' alt='' />
			</a>
			<div>{message}</div>
		</li>
	)
}

export default Post
