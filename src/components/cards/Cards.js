import {Card} from "../card/Card";
import {fonts} from "../../services/fonts-service";

function Cards() {
    return (
        <section className={'cards__wrapper wrapper'}>
            {
                fonts.map(card => <Card
                    key={card.id}
                    style={card.font}
                    card={card}
                />)
            }
        </section>
    );

}

export {Cards};