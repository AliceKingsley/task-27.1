import React from "react";
import "./Card.css";

export default class Card extends React.Component {

    

    render() {
        const {id, name, price, speed, text, isSelected, onCardClick} = this.props;
        let nameClass = isSelected ? "card-max" : "card";

        if (isSelected) {
            nameClass += " card-max";
        }

        function onClick() {
            onCardClick(id);
        }

        return (
            <React.Fragment>
                <div className={nameClass} data-id={id} onClick={onClick}>
                    <div className="card-header">
                        <p>{name}</p>
                    </div>
                    <div className="card-main">
                        <span className="card-main_currency">руб&nbsp;</span>
                        <span className="card-main_price">{price}</span>
                        <span className="card-main_period">&nbsp;/мес</span>
                    </div>
                    <div className="card-footer">
                        <p className="card-footer_speed">{`до ${speed} Мбит/сек`}</p>
                        <p className="card-footer_text">{text}</p>
                    </div>
                    <div className="card-button">
                        <button className="button">{isSelected ? "Выбрано" : "Выбрать"}</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}