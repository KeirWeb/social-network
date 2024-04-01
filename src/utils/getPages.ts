export const getPages = (totalCount: number, limit = 4) => {
	const totalPages = Math.ceil(totalCount / limit)
	return totalPages
}
