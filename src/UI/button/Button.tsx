import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button'
import { FC } from 'react'

interface ButtonProps extends MUIButtonProps {}

const Button: FC<ButtonProps> = ({ ...rest }) => {
	const { disabled } = rest
	return disabled ? (
		<span style={{ cursor: 'not-allowed' }}>
			<MUIButton {...rest} />
		</span>
	) : (
		<MUIButton {...rest} />
	)
}

export default Button
