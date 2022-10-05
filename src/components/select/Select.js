import {useDispatch} from "react-redux";
import {useState} from "react";

import {setModalStyle, setModalValue} from "../../redux/slices/toolsSlice";
import {fonts} from "../../services/fonts-service";
import '../../styles/select-style.css';


function Select({modalValue, modalStyle}) {

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const handleClick = (font) => {
        dispatch(setModalValue(font.name));
        dispatch(setModalStyle(font.font));
        setOpen(false);
    }

    return (

        <div className={open ? 'select__wrapper opened' : 'select__wrapper'}>

            <div className={'select'} onClick={() => setOpen(!open)}>
                <h2 className={modalStyle}>{modalValue}</h2>
                <div className={open ? 'select__btn selected' : 'select__btn'}>
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1594 0.954631C14.9484 0.743727 14.6623 0.625246 14.364 0.625246C14.0657 0.625246 13.7796 0.743727 13.5686 0.954631L7.99989 6.52338L2.43114 0.954632C2.21896 0.749705 1.93478 0.636311 1.63981 0.638874C1.34484 0.641438 1.06267 0.759753 0.854089 0.968336C0.645504 1.17692 0.52719 1.45908 0.524628 1.75406C0.522065 2.04903 0.635458 2.3332 0.840386 2.54538L7.20451 8.90951C7.41548 9.12041 7.70158 9.23889 7.99989 9.23889C8.2982 9.23889 8.58429 9.12041 8.79526 8.90951L15.1594 2.54538C15.3703 2.33441 15.4888 2.04832 15.4888 1.75001C15.4888 1.4517 15.3703 1.1656 15.1594 0.954631Z" fill="black"/>
                  </svg>
                </div>

            </div>

            <div className={'options__wrapper'}>

                <div className={'select__line'}></div>

                {
                    fonts.map(font =>

                        <div className={'option'}
                             key={font.id}
                             onClick={() => handleClick(font)}>
                            <p>{font.fontID}</p>
                            <h3 className={font.font}>{font.name}</h3>
                        </div>)
                }

            </div>

        </div>
    );

}

export {Select};