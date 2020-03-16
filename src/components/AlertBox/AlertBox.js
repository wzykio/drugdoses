import React from "react";
import style from "./AlertBox.module.css";

const AlertBox = () => {
    return (
        <div className={style.alertContainer}>
            <div className={style.showAlertBox}>
                <p>Waga nie może być ujemna!</p>
            </div>
        </div>
    );
};
export default AlertBox;