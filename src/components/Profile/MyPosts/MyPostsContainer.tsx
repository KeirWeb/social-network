import { Dispatch } from 'react'
import { connect } from 'react-redux'
import { CombinedActions, RootState } from '../../../store/store'
import MyPosts from './MyPosts'

const mapStateToProps = (state: RootState) => ({
	posts: state.profilePage,
	newPostText: state.profilePage,
})

// Функция, которая создает функции-диспетчеры и передает их как пропсы компонента
const mapDispatchToProps = (dispatch: Dispatch<CombinedActions>) => ({
	createPost: () => {},
	updateNewPostText: (text: string) => {},
})

// Подключение компонента к Redux Store
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
