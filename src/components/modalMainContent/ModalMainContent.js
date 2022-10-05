import {useDispatch, useSelector} from "react-redux";

import {setIcon} from "../../redux/slices/toolsSlice";
import {bed, bedIcon, woman, womanIcon} from "../../pictures";
import '../../styles/modalMainContent-style.css';


function ModalMainContent({modalStyle}) {

    const fontColor = useSelector(state => state.toolsReducer.fontColor);
    const value = useSelector(state => state.toolsReducer.value);
    const icon = useSelector(state => state.toolsReducer.icon);
    const fontSize = useSelector(state => state.toolsReducer.fontSize);

    const dispatch = useDispatch();

    const resizeBedImg = () => {
        if (fontSize >= 46.8 && fontSize < 69.6) {
            return 'content__bed resize-bed1'
        } else if (fontSize >= 69.6) {
            return 'content__bed resize-bed2'
        } else {
            return 'content__bed'
        }
    }

    const resizeWomenImg = () => {
        if (fontSize >= 46.8 && fontSize < 69.6) {
            return 'main-content__woman main-content-general resize-woman1'
        } else if (fontSize >= 69.6) {
            return 'main-content__woman main-content-general resize-woman2'
        } else {
            return 'main-content__woman main-content-general'
        }
    }

    return (
        <div className={'modal__main-content'}>
            {
                icon ?
                    <div className={'main-content__bed main-content-general'}>

                        <div className={'content-bed__title main-content__title'}>
                            <h2 className={modalStyle}
                                style={
                                    {
                                        fontSize: `${fontSize}px`,
                                        color: `${fontColor}`
                                    }
                                }>
                                {value}
                            </h2>
                        </div>

                        <div className={resizeBedImg()}>
                            <img src={bed} alt="bed"/>
                        </div>

                    </div>
                    :
                    <div className={resizeWomenImg()}>

                        <div className={'content-woman__title main-content__title'}>
                            <h2 className={modalStyle}
                                style={
                                    {
                                        fontSize: `${fontSize}px`,
                                        color: `${fontColor}`
                                    }
                                }>
                                {value}
                            </h2>
                        </div>

                        <div className={'content-woman'}>

                            <div className={'ruler'}>
                                <p>160 cм.</p>

                                <div className={'ruler__line'}>
                                    <div className={'line-x'}></div>
                                    <div className={'line-y'}>

                                    </div>
                                </div>

                            </div>

                            <img src={woman} alt="woman"/>

                        </div>

                    </div>
            }


            <div className={'main-content__icons'}>

                <div className={icon ? 'icon green-border' : 'icon grey-border'}
                     onClick={() => dispatch(setIcon(true))}
                >
                    <img src={bedIcon} alt="bed icon"/>
                </div>

                <div className={icon ? 'icon grey-border' : 'icon green-border'}
                     onClick={() => dispatch(setIcon(false))}
                >
                    <img src={womanIcon} alt="woman icon"/>
                </div>

            </div>

        </div>
    );

}

export {ModalMainContent};