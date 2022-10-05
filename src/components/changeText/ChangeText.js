import {useDispatch, useSelector} from "react-redux";

import {setValue, setIsActive, setIsEmpty} from "../../redux/slices/toolsSlice";
import {searchIcon} from '../../pictures/index';
import '../../styles/changeText-style.css';

function ChangeText() {

    const dispatch = useDispatch();

    const value = useSelector(state => state.toolsReducer.value);
    const isEmpty = useSelector(state => state.toolsReducer.isEmpty);

    const handleChange = (e) => {
        dispatch(setValue(e.target.value));
        dispatch(setIsEmpty(false));
    };

    const handleClick = () => {
        if (value) {
            dispatch(setIsActive(true));
            dispatch(setIsEmpty(false));
        } else {
            dispatch(setIsEmpty(true));
        }
    };

    return (
        <section className={'change-text__section'}>

            <div className={isEmpty ? 'change-text__wrapper wrapper empty-value' : 'change-text__wrapper wrapper'}>
                <img src={searchIcon} alt=""/>

                <div className={'change-text__input'}>
                    <input type="text"
                           placeholder={'Enter your text'}
                           onChange={handleChange}
                           value={value}
                    />

                </div>

                <div className={'change-text__btn green-btn'}
                onClick={handleClick}>
                    Choose font
                </div>

            </div>

        </section>
    );

}

export {ChangeText};