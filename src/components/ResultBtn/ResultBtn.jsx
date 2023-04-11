import Button from "@mui/material/Button";
import './ResultBtn.css';

const ReusableButton = (props) => {
    const { buttonText, changePlanet } = props;
    return (
        <Button variant={props.buttonVariant}

            color={props.buttonColor}
            size={props.buttonSize}
            onClick={() => changePlanet(buttonText)}>
            {buttonText}
        </Button>
    )
}
export default ReusableButton;