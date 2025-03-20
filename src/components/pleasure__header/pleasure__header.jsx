import Navigation from '../navigation/navigation';

import './pleasure__header.css';

const PleasureHeader = ( { switchPage }) => {
    return (
        <div className='pleasure__container'>
            <Navigation switchPage={switchPage} />
            <h2 className='pleasure__head'>For your pleasure</h2>
        </div>
    )
}

export default PleasureHeader;