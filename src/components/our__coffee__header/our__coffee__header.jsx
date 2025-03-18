import Navigation from '../navigation/navigation';

import './our__coffee__header.css';

const OurCoffeeHeader = ( { switchPage } ) => {
    return (
        <div className='our__coffee__header'>
            <Navigation switchPage={switchPage} />
            <h1 className="our__coffee__head">Our Coffee</h1>
        </div>
    )
}

export default OurCoffeeHeader;