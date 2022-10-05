import {useDispatch, useSelector} from "react-redux";

import {setFontColor} from "../../redux/slices/toolsSlice";
import {colors} from "../../services/colors-service";
import '../../styles/chooseColor-style.css';

function ChooseColor() {

    const dispatch = useDispatch();

    const fontColor = useSelector(state => state.toolsReducer.fontColor);

    const getColor = (color) => {
        if (color.colorId === '5C' || color.colorId === '21C' ||
            color.colorId === '23C' || color.colorId === '24C') {
            return '#fff';
        } else {
            return '#000'
        }
    };

    const isChosen = (item) => {
        return fontColor === item;
    };

    return (
        <div className={'colors'}>
            <h4>Choose font color</h4>

            <div className={'colors__container'}>

                    {
                    colors.map(color =>
                        <div
                            className={isChosen(color.hex) ? 'color-icon chosen' : 'color-icon'}
                            key={color.id}
                            style={{
                                backgroundColor: `${color.hex}`,
                                color: getColor(color)
                            }}
                            onClick={() => dispatch(setFontColor(color.hex))}
                        >
                            {color.colorId}
                        </div>)
                }

            </div>

        </div>
    );

}

export {ChooseColor};