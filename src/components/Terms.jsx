import calendar from "../img/calendar.svg";
import onlineMeeting from "../img/online-meeting.svg";
import coding from '../img/coding.svg';
import diploma from "../img/diploma.svg";

function Terms () {
    return <section id="terms" className="terms">
    <div className="container">
        <h2 className="terms-title title wow animate__fadeInUp">
            Условия обучения
        </h2>
        <div className="terms-text-items">
            <p className="terms-text wow animate__fadeInUp">
                Цифровая кафедра ПГУПС приглашает студентов всех направлений
                подготовки на&nbsp;<strong><a href="#programs-list">бесплатные программы </a></strong>
                профессиональной переподготовки в&nbsp;области&nbsp;IT.
            </p>
            <p className="terms-text wow animate__fadeInUp">
                Обучение происходит одновременно с&nbsp;прохождением обучения
                по&nbsp;основным образовательным программам.
            </p>
            <p className="terms-text wow animate__fadeInUp">
                Ознакомиться с часто задаваемыми вопросами можно&nbsp;<strong
            ><a href="#faq">здесь</a></strong>.
            </p>
        </div>
        <ul className="terms-items">
            <li className="terms-item wow animate__fadeInUp">
                <div className="term-img">
                    <img src={calendar} alt=""/>
                </div>
                <div className="term-info">
                    <h3 className="term-title">Продолжительность</h3>
                    <p className="term-text">
                        252 академических часа программы ~ 9&nbsp;месяцев
                    </p>
                </div>
            </li>
            <li className="terms-item wow animate__fadeInUp">
                <div className="term-img">
                    <img src={onlineMeeting} alt=""/>
                </div>
                <div className="term-info">
                    <h3 className="term-title">Формат</h3>
                    <p className="term-text">
                        Лекции проводятся в&nbsp;онлайн формате с&nbsp;использованием
                        современного отечественного&nbsp;ПО
                    </p>
                </div>
            </li>
            <li className="terms-item wow animate__fadeInUp">
                <div className="term-img">
                    <img src={coding} alt=""/>
                </div>
                <div className="term-info">
                    <h3 className="term-title">Практика</h3>
                    <p className="term-text">
                        Стажировки и&nbsp;практика проводятся <br/>
                        у&nbsp;ИТ-партнеров
                    </p>
                </div>
            </li>
            <li className="terms-item wow animate__fadeInUp">
                <div className="term-img">
                    <img src={diploma} alt=""/>
                </div>
                <div className="term-info">
                    <h3 className="term-title">Диплом</h3>
                    <p className="term-text">
                        По&nbsp;окончании программы выдается диплом для работы
                        в&nbsp;ИТ-сфере
                    </p>
                </div>
            </li>
        </ul>
    </div>
</section>
}

export default Terms;