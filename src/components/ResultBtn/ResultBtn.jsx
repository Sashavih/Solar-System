import Button from "@mui/material/Button";
import './ResultBtn.css';
import AboutPlanet from "../AboutPlanet/AboutPlanet";

const ReusableButton = (props) => {
    const { buttonText, changePlanet, planet } = props;
    return (
        <Button variant={props.buttonVariant}
            color={props.buttonColor}
            size={props.buttonSize}
            onClick={() => changePlanet(planet)}>
            {buttonText}
        </Button>
    )
}
export default ReusableButton;