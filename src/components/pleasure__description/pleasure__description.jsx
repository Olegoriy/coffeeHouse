import './pleasure__description.css';

const PleasureDescription = () => {
    return (
        <div>
<div>
            <div className='container__description'>
                <img className='img__description' src={require('./img/pleasureImg.svg').default} alt="Girl with coffee" />

                <div className="description__text__container">
                    <h2 className="head__description">About our goods</h2>
                    <img className="black__beans__description" src={require('./img/beans__black.svg').default} alt="Black beans" />
                    <p className="text__description">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                </div>
            </div>
            <div className='border'></div>
        </div>
        </div>
    )
}

export default PleasureDescription;