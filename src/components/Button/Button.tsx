const Button = ({
	title,
	type,
	className
}) => {
	return (
		<>
			<button className={className} type={ type }>{ title }</button>
		</>
	)
}

export default Button;
