// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";

function Menu () {
    const [isOpened, setOpened] = useState(false);

    function handleClick() {
        setOpened(!isOpened);
    }

    const className = "navigation " + (isOpened ? "is-visible" : "");

    return <section className="menu">
        <div className="menu-icon">
            <a onClick={handleClick} className="menu-link" href="#"><span className="menu-line"></span></a>
        </div>
        <nav className={className}>
            <ul className="menu-items">
                <li><a href="#terms">Условия обучения</a></li>
                <li>
                    <a href="#program01">Цифровые технологии на железнодорожном транспорте</a>
                </li>
                <li><a href="#program02">Интернет вещей в системе мониторинга инфраструктуры железнодорожного транспорта</a></li>
                <li>
                    <a href="#program03">Применение цифровых технологий в продвижении транспортно-логистических услуг</a>
                </li>
                <li>
                    <a href="#program04">Технологии информационного моделирования на железнодорожном транспорте</a>
                </li>
                <li><a className="order">Подать заявку</a></li>
                <li><a href="#faq">Вопросы и ответы</a></li>
            </ul>
        </nav>
    </section>
}

export default Menu;