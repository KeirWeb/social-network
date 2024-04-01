import React, { ComponentType } from 'react'
import { ConnectedProps, connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import LinearLoader from '../../UI/Loader/LinearLoader'
import * as ProfileActions from '../../store/actions/profileAction'
import { RootState } from '../../store/store'
import Profile from './Profile'

interface StateProps {
	isLoading: boolean
}

class ProfileContainer extends React.Component<ProfileProps, StateProps> {
	constructor(props: ProfileProps) {
		super(props)
		this.state = {
			isLoading: true,
		}
	}
	componentDidMount() {
		let userID = this.props.match.params.userID
		if (!userID) {
			userID = `${this.props.userID}`
		}
		Promise.allSettled([
			this.props.fetchUsersProfile(userID),
			this.props.getStatusUserByID(userID),
		]).finally(() => this.setState({ isLoading: false }))
	}
	render() {
		return (
			<>
				{this.state.isLoading ? (
					<LinearLoader />
				) : (
					<Profile
						profilePage={this.props.profilePage}
						updateStatus={this.props.updateStatusProfile}
					/>
				)}
			</>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	profilePage: state.profilePage,
	userID: state.auth.data.id,
})

const connected = connect(mapStateToProps, { ...ProfileActions })
type ParamsType = {
	userID: string
}
type ProfileReduxProps = ConnectedProps<typeof connected>
type ProfileProps = RouteComponentProps<ParamsType> & ProfileReduxProps

export default compose<ComponentType>(
	connected,
	withRouter,
	withAuthRedirect
)(ProfileContainer)
