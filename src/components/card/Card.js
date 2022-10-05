import {useDispatch, useSelector} from "react-redux";

import {setIsActive, setIsEmpty, setModalStyle, setModalValue, setValue} from "../../redux/slices/toolsSlice";
import '../../styles/cards-style.css';

function Card({style, card}) {

    const dispatch = useDispatch();

    const value = useSelector(state => state.toolsReducer.value);

    const handleClick = () => {
        if (value) {
            dispatch(setModalValue(card.name));
            dispatch(setModalStyle(card.font));
            dispatch(setIsActive(true));
            dispatch(setIsEmpty(false));
        } else {
            dispatch(setIsEmpty(true));
        }
    };

    const handleChange = (e) => {
        dispatch(setValue(e.target.value));
        if (value) {
            dispatch(setIsEmpty(false));
        }
    };


    return (
        <div className={'card'}>

            <div className={'card__title'}>

                <textarea
                    className={style}
                    onChange={handleChange}
                    placeholder={'Enter your text'}
                    value={value}
                />

            </div>

            <div className={'card__line line'}></div>

            <div className="btn__container"
                 onClick={handleClick}>

                <div className={'btn__title'}>Customize</div>

                <div className={'btn'}>
                    <div className={'btn__inner'}>
                        <div className={'plus-icon'}>
                            <div className={'stick1'}></div>
                            <div className={'stick2'}></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );

}

export {Card};