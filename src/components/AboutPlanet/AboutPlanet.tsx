import './AboutPlanet.css'

const AboutPlanet = (props: any) => {
    const { data } = props;
    return (
        <div>
            {data ?
                <section className="planets"><h2 className='planets-box__title'>Планета</h2><div className='planets-box'><div className='planets-box__item'><h3>History</h3></div ><div className='planets-box__item'><h3>Physical Characteristics</h3></div> <div className='planets-box__item'><h3>Orbital Parameters</h3></div> </div> </section>
                :
                <div>Loader...</div>}
        </div>
    )
}

export default AboutPlanet;