export interface ButtonProps {
	title: string,
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
	// const handleClick = (props: Function) => {
	// 	showList();
	// };

	return (
		<>
			<button onClick={ handleClick } className={className} type={ type }>{ title }</button>
		</>
	)
}
