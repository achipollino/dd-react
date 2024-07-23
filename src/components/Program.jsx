import Module from "./Module";

const Program = (props) => {

    return <section id="program01" className="program">
    <div className="container">
        <span className="program-number wow animate__fadeInUp"> Программа {props.programNumber}</span>
        <h2 className="title program-title wow animate__fadeInUp">
            {props.programName}
        </h2>
        <div className="program-actions wow animate__fadeInUp">
            <p className="program-action">{props.programAction1}</p>
            <p className="program-action">{props.programAction2}</p>
            <p className="program-action">Квалификация по окончании обучения: {props.programAction3}</p>
        </div>
        <div className="program-description">
            <p className="program-text wow animate__fadeInUp">{props.programDescription}</p>
            <img className="wow animate__zoomIn" src="" alt=""/>
        </div>
        <h3 className="program-list wow animate__fadeInUp">Содержание программы</h3>

        <Module />
        
        <h3 className="program-list for-who wow animate__fadeInUp">Для кого</h3>
        <ol className="for-who-items">
            <li>
                <p>Студенты бакалавриата 3 курса очной формы обучения</p>
            </li>
            <li>
                <p>Студенты специалитета 4 курса очной формы обучения</p>
            </li>
            <li>
                <p>Студенты магистратуры 1 курса очной формы обучения</p>
            </li>
        </ol>
        <div className="program-button wow animate__fadeInUp">
            <button className="btn program-btn">Оставить заявку</button>
        </div>
    </div>
</section>
}

export default Program;