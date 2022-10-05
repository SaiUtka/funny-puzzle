import {useDispatch, useSelector} from "react-redux";

import {setBgColor, setBgIsActive} from "../../redux/slices/toolsSlice";
import {bgColors} from "../../services/colors-service";
import '../../styles/chooseBgColor-style.css';


function ChooseBgColor() {

    const dispatch = useDispatch();

    const isActive = useSelector(state => state.toolsReducer.bgIsActive);
    const bgColor = useSelector(state => state.toolsReducer.bgColor);

    const isChosen = (item) => {
        return bgColor === item;
    };

    return (
        <div className={isActive ? 'text-background__wrapper bg-active' : 'text-background__wrapper'}>

            <div className={'text-background__btn'}>

                <div className={isActive ? 'btn bg-green checked' : 'btn'}
                     onClick={() => dispatch(setBgIsActive(!isActive))}>
                      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.55 11.575C5.41667 11.575 5.29167 11.554 5.175 11.512C5.05833 11.4707 4.95 11.4 4.85 11.3L0.550001 7.00002C0.366667 6.81669 0.279001 6.57902 0.287001 6.28702C0.295667 5.99569 0.391667 5.75836 0.575 5.57502C0.758334 5.39169 0.991667 5.30002 1.275 5.30002C1.55833 5.30002 1.79167 5.39169 1.975 5.57502L5.55 9.15002L14.025 0.675025C14.2083 0.491691 14.446 0.400024 14.738 0.400024C15.0293 0.400024 15.2667 0.491691 15.45 0.675025C15.6333 0.858358 15.725 1.09569 15.725 1.38702C15.725 1.67902 15.6333 1.91669 15.45 2.10002L6.25 11.3C6.15 11.4 6.04167 11.4707 5.925 11.512C5.80833 11.554 5.68333 11.575 5.55 11.575Z" fill="black"/>
                      </svg>

                </div>

                <h3 className={'btn__title'}>Використовувати підкладку?</h3>
            </div>

            <div className={'options__line'}></div>

            <div className={'text-background__colors'}>

                <div className={'background-colors__title'}>Виберіть колір підкладки</div>

                <div className={'background-colors__container'}>
                    {
                        bgColors.map(color =>
                            <div
                                key={color.id}
                                style={{backgroundColor: color.hex}}
                                onClick={() => dispatch(setBgColor(color.hex))}
                                className={isChosen(color.hex) ? 'color-icon chosen' : 'color-icon'}
                            >
                            </div>)
                    }
                </div>

            </div>

        </div>
    );

}

export {ChooseBgColor};