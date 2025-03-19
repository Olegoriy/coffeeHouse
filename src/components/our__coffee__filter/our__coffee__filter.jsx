import './our__coffee__filter.css';

const OurCoffeeFilter = () => {
    return (
        <div className="catalog__container">
            <div className='filter__container'>
                <div className="search__block">
                    <p className="search_text">Looking for</p>
                    <input type="text" className="search__input" placeholder='start typing here...' />
                </div>

                <div className="filter__block">
                    <p className="filter__text">Or filter</p>
                    <div className="buttons__filter">
                        <button className="filter">Brazil</button>
                        <button className="filter">Kenya</button>
                        <button className="filter">Columbia</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCoffeeFilter;