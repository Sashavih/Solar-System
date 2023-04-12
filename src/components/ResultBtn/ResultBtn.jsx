import Button from "@mui/material/Button";
import './ResultBtn.css';
import AboutPlanet from "../AboutPlanet/AboutPlanet";

const ReusableButton = (props) => {
    const { buttonText, changePlanet } = props;
    return (
        <Button variant={props.buttonVariant}
            color={props.buttonColor}
            size={props.buttonSize}
            onClick={() => changePlanet(AboutPlanet)}>
            {buttonText}
        </Button>
    )
}
export default ReusableButton;