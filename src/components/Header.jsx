import logoPGUPS from "../img/pgups.svg";
import logoPriority from "../img/logo-priority.svg";
import logoDD from "../img/logo-dd.svg";
import imageBanner from "../img/woman.png";

function Header () {
    return <header className="header">
    <div className="container">
        <div className="logo">
            <a href="#" target="_blank" rel="noreferrer">
                <img src={logoDD} alt="LogoDD" className="dd"/>
            </a>
            <a href="https://www.pgups.ru/" target="_blank" rel="noreferrer">
                <img src={logoPGUPS} alt="LogoPGUPS" className="pgups"/>
            </a>
            <a href="https://prioritet2030.pgups.ru/" target="_blank" rel="noreferrer">
                <img src={logoPriority} alt="LogoPriority" className="priority"/>
            </a>
        </div>
        <nav className="header__navigation">
            <ul className="navigation__ul">
                <li className="navigation__li"><a href="#" className="navigation__link">Программы</a></li>
                <li className="navigation__li"> | </li>
                <li className="navigation__li"><a href="#" className="navigation__link">План обучения</a></li>
                <li className="navigation__li"> | </li>
                <li className="navigation__li"><a href="#" className="navigation__link">Партнёры</a></li>
                <li className="navigation__li"> | </li>
                <li className="navigation__li"><a href="#" className="navigation__link">Новости</a></li>
                <li className="navigation__li"> | </li>
                <li className="navigation__li"><a href="#" className="navigation__link">Контакты</a></li>
            </ul>
        </nav>
        <div className="header__block">
            <div className="header-info">
                <p className="header-project wow animate__fadeInDown">ПРОЕКТ</p>
                <h1 className="header-title wow animate__fadeInUp">
                    ЦИФРОВАЯ <br/>
                    КАФЕДРА
                </h1>
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