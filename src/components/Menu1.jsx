// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";


function Menu () {

    return <section className="menu">
    <nav className="navigation">
        <ul className="menu-items">
            <li><a href="#terms">Условия обучения</a></li>
            <li>
                <a href="#program01">Интеллектуальные технологии на&nbsp;железнодорожном транспорте</a>
            </li>
            <li><a href="#program02">Технологии интернета вещей</a></li>
            <li>
                <a href="#program03">Маркетинг и&nbsp;коммуникация в&nbsp;цифровой среде</a>
            </li>
            <li>
                <a href="#program04">Системы автоматизированного проектирования для транспортной
                    отрасли</a>
            </li>
            <li>
                <a href="#program05">Автоматизация бизнес-процессов средствами платформы
                    1С:Предприятие</a>
            </li>
            <li><a href="#program06">Менеджмент цифровых продуктов</a></li>
            <li><a className="order">Подать заявку</a></li>
            <li><a href="#faq">Вопросы и ответы</a></li>
        </ul>
    </nav>
</section>
}

export default Menu;