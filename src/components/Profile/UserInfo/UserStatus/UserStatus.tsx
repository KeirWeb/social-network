import { ChangeEvent, Component } from 'react'
import style from './UserStatus.module.scss'

interface StateType {
	isEditMode: boolean
	inputValue: string
}
interface PropsType {
	status: string
	updateStatus: (status: string) => Promise<void>
}

export default class UserStatus extends Component<PropsType, StateType> {
	constructor(props: PropsType) {
		super(props)
		this.state = {
			isEditMode: false,
			inputValue: this.props.status,
		}
	}
	activateEditModeHandler = () => {
		this.setState({ isEditMode: true })
	}
	deActiveateEditModeHandler = () => {
		if (this.props.status !== this.state.inputValue) {
			this.props
				.updateStatus(this.state.inputValue)
				.finally(() => this.setState({ isEditMode: false }))
		} else {
			this.setState({ isEditMode: false })
		}
	}
	changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		this.setState({ inputValue: value })
	}
	render() {
		return (
			<div className={style.root}>
				<span className={style.label}>status: </span>
				{this.state.isEditMode ? (
					<input
						className={style.input}
						onChange={this.changeHandler}
						onBlur={this.deActiveateEditModeHandler}
						value={this.state.inputValue}
						autoFocus
					/>
				) : (
					<span
						className={style.value}
						onDoubleClick={this.activateEditModeHandler}
					>
						{this.props.status ? this.props.status : 'no status'}
					</span>
				)}
			</div>
		)
	}
}
