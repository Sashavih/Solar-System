import Loader from '../Loader/Loader';
import './AboutPlanet.css'

const AboutPlanet = ({ ...props }) => {

    const isPlanet = (planet) =>
        planet ? 'yes' : 'no';

    return (
        <div>
            {props.name ?
                <section id="planets" className="planets"><h2 className='planets-box__title'>{props.name}</h2><div className='planets-box'>
                    <div className='planets-box__item'><h3 className='subtitle'>History</h3><p><span>Is Planet :</span> {isPlanet(props.isPlanet)}</p><span>English Name</span> {props.englishName} <p><span>Body Type</span> {props.bodyType}</p><p><span>Moons </span>{props.moons}</p><p><span>Discovered By</span>  {props.discoveredBy}</p><p><span>Discovery Date</span>  {props.discoveryDate}
                    </p></div ><div className='planets-box__item'><h3 className='subtitle'>Physical Characteristics</h3><p><span>Mass </span>: {props.mass.massValue}</p><p><span>Gravity :</span> {props.gravity}</p><p><span>Flattening </span> {props.flattening}
                    </p><p><span>vAphelion : </span>{props.aphelion}
                        </p></div> <div className='planets-box__item'><h3 className='subtitle'>Orbital Parameters</h3><p><span>Density :</span> {props.density}
                        </p><p><span>Equa Radius</span>  {props.equaRadius}
                        </p><p><span>Escape </span> {props.escape}
                        </p><p><span>Mean Radius  </span>{props.meanRadius}
                        </p>
                        <p><span>Polar Radius :</span> {props.polarRadius}
                        </p></div> </div> </section>
                :
                <Loader />}
        </div>
    )
}

export default AboutPlanet;