export const isActive = (props, path) => {
	return props.router.pathname.indexOf(path)===0
}