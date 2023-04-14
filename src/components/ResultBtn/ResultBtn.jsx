import Button from "@mui/material/Button";


const ReusableButton = (props) => {

    const { buttonText, changePlanet, planet, buttonColor } = props;
    return (
        <Button
            variant={props.buttonVariant}
            color={props.buttonColor}
            size={props.buttonSize}
            onClick={() => changePlanet(planet)}>
            {buttonText}
        </Button>
    )
}
export default ReusableButton;
