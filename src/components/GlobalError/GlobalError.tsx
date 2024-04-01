import { FC } from 'react'
import { ToastContainer } from 'react-toastify'
import { GlobalErrorProps } from './GlobalErrorContainer'

const GlobalError: FC<GlobalErrorProps> = ({ errorMessage }) => {
	return <ToastContainer autoClose={3000} theme='colored' />
}

export default GlobalError
