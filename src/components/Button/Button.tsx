export interface ButtonProps {
	title: String,
	type: "button" | "submit" | "reset" | undefined,
	className: string,
	handleClick?:  React.MouseEventHandler<HTMLButtonElement> | undefined,
}

export const Button = ({
	title,
	type,
	className,
	handleClick,
}: ButtonProps) => {

	return (
		<>
			<button onClick={ handleClick } className={className} type={ type }>{ title }</button>
		</>
	)
}
