import { ComponentType } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { RootState } from '../store/store'

interface PropsType {
	isAuth: boolean
}
const mapStateToProps = (state: RootState): PropsType => ({
	isAuth: state.auth.isAuth,
})

export function withAuthRedirect<T extends JSX.IntrinsicAttributes>(
	Component: ComponentType<T>
) {
	const RedirectComponent = (props: PropsType) => {
		const { isAuth, ...restProps } = props
		if (!isAuth) return <Redirect to={'/login'} />
		return <Component {...(restProps as T)} />
	}

	return connect(mapStateToProps)(RedirectComponent)
}
