import logoPGUPS from "../img/pgups.svg";
import logoPriority from "../img/logo-priority.svg";
import imageBanner from "../img/woman.png";

function Header () {
    return <header className="header">
    <div className="container">
        <div className="logo">
            <a href="https://www.pgups.ru/" target="_blank" rel="noreferrer">
                <img src={logoPGUPS} alt="LogoPGUPS" className="pgups"/>
            </a>
            <a href="https://prioritet2030.pgups.ru/" target="_blank" rel="noreferrer">
                <img src={logoPriority} alt="LogoPriority" className="priority"/>
            </a>
        </div>
        <div className="header__block">
            <div className="header-info">
                <p className="header-project wow animate__fadeInDown">ПРОЕКТ</p>
                <h1 className="header-title wow animate__fadeInUp">
                    ЦИФРОВАЯ <br/>
                    КАФЕДРА
                </h1>
                <p className="header-text wow animate__fadeInUp">
                    Объявляет набор <br/>
                    на программы 2024/2025 учебного года
                </p>
            </div>
            <div className="header-image">
                <img src={imageBanner} alt="imageBanner"/>
            </div>
        </div>
        <div className="header-action">
            <button className="btn header-btn">Оставить заявку</button>
        </div>
    </div>
</header>
}

export default Header;