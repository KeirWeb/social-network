import React, { ChangeEvent, ComponentType } from 'react'
import { ConnectedProps, connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import LinearLoader from '../../UI/Loader/LinearLoader'
import * as UsersActions from '../../store/actions/usersAction'
import { RootState } from '../../store/store'
import Users from './Users'

interface UserState {
	isLoading: boolean
}

class UsersContainer extends React.Component<UsersReduxProps, UserState> {
	constructor(props: UsersReduxProps) {
		super(props)
		this.state = {
			isLoading: true,
		}
	}
	fetchData() {
		this.setState({ isLoading: true })
		this.props.fetchUsersThunk().finally(() => {
			this.setState({ isLoading: false })
		})
	}
	changePageHandler = (e: ChangeEvent<unknown>, page: number) => {
		this.props.setCurrentPageAction(page)
		this.fetchData()
	}
	componentDidMount() {
		this.fetchData()
	}

	render() {
		const { usersPage } = this.props

		return (
			<>
				{this.state.isLoading && <LinearLoader />}
				<Users
					follow={this.props.followThunk}
					unfollow={this.props.unFollowThunk}
					changePageHandler={this.changePageHandler}
					usersPage={usersPage}
					isLoading={this.state.isLoading}
				/>
			</>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	usersPage: state.usersPage,
})

const connected = connect(mapStateToProps, { ...UsersActions })
export type UsersReduxProps = ConnectedProps<typeof connected>

export default compose<ComponentType>(
	connected,
	withAuthRedirect
)(UsersContainer)
