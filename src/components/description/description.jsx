import './description.css';

const Description = () => {
    return (
        <div className="description_container">
            <h2 className="description__name">About Us</h2><img className="black__beans" src={require('./img/beans__black.svg').default} alt="Black beans" />
            
            <div className="text__container">
                <p className='paragraph'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
                </p>

                <p className='paragraph'>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
                </p>
            </div>
        </div>
    )
}

export default Description;