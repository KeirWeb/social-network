import MUIPagination, {
	PaginationProps as MUIPaginationProps,
} from '@mui/material/Pagination'
import React from 'react'

interface PaginationProps extends MUIPaginationProps {}

class Pagination extends React.Component<PaginationProps> {
	render() {
		const { ...restProps } = this.props
		return <MUIPagination {...restProps} />
	}
}

export default Pagination
