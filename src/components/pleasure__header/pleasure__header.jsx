import Navigation from '../navigation/navigation';

import './pleasure__header.css';

const PleasureHeader = () => {
    return (
        <div className='pleasure__container'>
            <Navigation />
            <h2 className='pleasure__head'>For your pleasure</h2>
        </div>
    )
}

export default PleasureHeader;