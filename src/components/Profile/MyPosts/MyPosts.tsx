import { ChangeEvent, FC, KeyboardEvent, createRef } from 'react'
import style from './MyPosts.module.scss'

type MyPostsProps = {
	posts: any
	newPostText: any
}

const MyPosts: FC<MyPostsProps> = ({ posts, newPostText }) => {
	const textRef = createRef<HTMLTextAreaElement>()
	const addPost = () => {
		if (textRef.current?.value.trim()) {
		}
	}
	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		debugger
		const text = e.target.value.trimStart()
	}
	const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter') {
			addPost()
		}
	}

	return (
		<div className={style.myPosts}>
			<div className={style.myPosts__title}>My Posts</div>
			<div className={style.myPosts__newPost}>
				<form>
					<textarea
						ref={textRef}
						value={newPostText}
						className={style.myPosts__text}
						onChange={handleOnChange}
						onKeyDown={handleKeyPress}
					/>
					<button
						type='button'
						onClick={addPost}
						className={style.myPosts__btn}
					>
						Send
					</button>
				</form>
			</div>
			<ul></ul>
		</div>
	)
}

export default MyPosts
