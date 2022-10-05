import '../../styles/header-style.css';

function Header() {

    return (
        <header className={'header'}>

            <div className={'header__wrapper wrapper'}>

                <div className={'header__items'}>
                    <h2 className={'header__logo'}>Funny Puzzle</h2>

                    <a 
                      href='https://www.etsy.com/shop/FunnyPuzzleUA?ref=seller-platform-mcnav&section_id=36548233' 
                      target='_blank' 
                      rel='noreferrer'
                      className={'header__btn green-btn'}
                    >
                        Go to shop
                    </a>

                </div>

                <div className={'header__line line'}> </div>

            </div>

        </header>
    );

}

export {Header};