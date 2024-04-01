import { Component } from 'react'
import { ConnectedProps, connect } from 'react-redux'
import { toast } from 'react-toastify'
import { RootState } from '../../store/store'
import GlobalError from './GlobalError'

class GlobalErrorContainer extends Component<GlobalErrorProps> {
	componentDidUpdate(prevProps: GlobalErrorProps) {
		if (this.props.errorMessage !== prevProps.errorMessage) {
			if (this.props.errorMessage) {
				toast.error(this.props.errorMessage)
			}
		}
	}
	render() {
		return <GlobalError {...this.props} />
	}
}

const mapToState = (state: RootState) => ({
	errorMessage: state.app.error,
})

const connected = connect(mapToState)
export type GlobalErrorProps = ConnectedProps<typeof connected>

export default connected(GlobalErrorContainer)
