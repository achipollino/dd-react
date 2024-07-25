function Popup () {
    return <section className="popup">
    <div className="container">
        <img src="img/close.svg" alt="" className="close"/>
        <div className="popup-form">
            <h3 className="popup-title">Оставьте заявку</h3>
            <p className="popup-text">и мы обязательно с Вами свяжемся</p>
            <form action="" method="post" className="order-form">
                <div className="form-group">
                    <input
                            type="text"
                            className="form-input"
                            id="name"
                            name="name"
                    />
                    <label htmlFor="name" className="form-label">Фамилия, Имя, Отчество</label>
                </div>
                <div className="form-group">
                    <input
                            type="text"
                            className="form-input"
                            id="university"
                            name="university"
                    />
                    <label htmlFor="university" className="form-label">ВУЗ</label>
                </div>
                <div className="form-group">
                    <input
                            type="text"
                            className="form-input"
                            id="direction"
                            name="direction"
                    />
                    <label htmlFor="direction" className="form-label"
                    >Текущее направление обучения</label>
                </div>
                <div className="form-group">
                    <select className="form-input" id="program" name="program">
                        <option disabled selected value></option>
                        <option value="program01">
                            Интеллектуальные технологии на&nbsp;железнодорожном транспорте
                        </option>
                        <option value="program02">Технологии интернета вещей</option>
                        <option value="program03">
                            Маркетинг и&nbsp;коммуникация в&nbsp;цифровой среде
                        </option>
                        <option value="program04">
                            Системы автоматизированного проектирования для транспортной
                            отрасли
                        </option>
                        <option value="program05">
                            Автоматизация бизнес-процессов средствами платформы
                            1С:Предприятие
                        </option>
                        <option value="program06">Менеджмент цифровых продуктов</option>
                    </select>
                    <label htmlFor="program" className="form-label select-label"
                    >Выбрать программу</label>
                </div>
                <div className="form-group">
                    <input
                            type="text"
                            className="form-input"
                            id="phone"
                            name="phone"
                    />
                    <label htmlFor="phone" className="form-label">Телефон для связи</label>
                </div>
                <div className="form-group" id="email-form-group">
                    <input
                            type="text"
                            className="form-input"
                            id="email"
                            name="email"
                    />
                    <label htmlFor="email" className="form-label">Email</label>
                </div>
                <div className="form-agree">
                    <input type="checkbox" id="not-study" className="checkbox-input"/>
                    <label htmlFor="not-study">
                        Ранее не обучался на цифровой кафедре
                    </label>
                </div>
                <div className="form-agree">
                    <input type="checkbox" id="agree" className="checkbox-input"/>
                    <label htmlFor="agree">
                        Я согласен/на с использованием и обработкой персональных данных
                    </label>
                </div>
                <div className="form-action">
                    <button className="btn form-button" type="button">
                        Отправить заявку
                    </button>
                </div>
            </form>
        </div>
        <div className="popup-thanks">
            <p>
                Привет, твой запрос уже в базе нашего супер компьютера, первый шаг уже сделан!
                Ожидайте, в сентябре пришлём вам ссылку для начала обучения.
            </p>
        </div>
    </div>
</section>
}

export default Popup;