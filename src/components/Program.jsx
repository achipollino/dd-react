import Module from "./components/Module";

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
        <div className="ui-accordion">
            <p className="ui-accordion-header wow animate__fadeInUp">
                <span className="module">Модуль 1.</span> {Module.props.programModule1}
                <span className="ui-accordion-header-icon"></span>
            </p>
            <ul className="ui-accordion-content">
                <li>Основные направления ИИ</li>
                <li>Обработка информации для принятия решений</li>
                <li>Нейронные сети и их применение в информационных системах</li>
            </ul>

            <p className="ui-accordion-header wow animate__fadeInUp">
                <span className="module">Модуль 2.</span> {props.programModule2}
                <span className="ui-accordion-header-icon"></span>
            </p>
            <ul className="ui-accordion-content">
                <li>
                    Основные управляющие конструкции языка Python и базовые типы
                    данных
                </li>
                <li>
                    Парадигмы программирования. Введение в объектно-ориентированное
                    программирование. Функциональное программирование
                </li>
                <li>Модули Python для анализа данных и машинного обучения</li>
            </ul>

            <p className="ui-accordion-header wow animate__fadeInUp">
                <span className="module">Модуль 3.</span> {props.programModule3}
                <span className="ui-accordion-header-icon"></span>
            </p>
            <ul className="ui-accordion-content">
                <li>Введение в управление данными</li>
                <li>Проектирование реляционных баз данных</li>
                <li>Функции управления данными</li>
                <li>Управление большими данными</li>
                <li>Анализ больших данных</li>
            </ul>

            <p className="ui-accordion-header wow animate__fadeInUp">
                <span className="module">Модуль 4.</span> {props.programModule4}
                <span className="ui-accordion-header-icon"></span>
            </p>
            <ul className="ui-accordion-content">
                <li>Введение в машинное обучение</li>
                <li>Алгоритмы кластеризации</li>
                <li>Задачи сортировки</li>
                <li>Предсказание и регрессия</li>
                <li>Нейронные сети прямого распространения</li>
                <li>Сверточные нейронные сети</li>
                <li>Рекуррентные нейронные сети</li>
            </ul>

            <p className="ui-accordion-header wow animate__fadeInUp">
                <span className="module">Модуль 5.</span> {props.programModule5}
                <span className="ui-accordion-header-icon"></span>
            </p>
            <ul className="ui-accordion-content">
                <li>
                    Особенности аппаратных и программных средств технического зрения
                </li>
                <li>
                    Способы поиска и представления научно-технической информации об
                    аппаратных и программных средствах технического зрения
                </li>
                <li>
                    Основные виды пакетов программ и инструментальных средств,
                    применяемых при разработке программного обеспечения систем
                    технического зрения
                </li>
                <li>Методы обработки и преобразования изображений</li>
                <li>
                    Методы решения простых задач распознавания объектов на
                    изображениях
                </li>
            </ul>

            <p className="ui-accordion-header wow animate__fadeInUp">
                <span className="module">Модуль 6.</span> {props.programModule6}
                <span className="ui-accordion-header-icon"></span>
            </p>
            <ul className="ui-accordion-content">
                <li>Подходы к созданию ЭС</li>
                <li>Особенности неформализованных задач</li>
                <li>Интегрированность, открытость и переносимость ЭС</li>
                <li>Проблемно / предметно – ориентированные ИС</li>
                <li>Технология создания и этапы проектирования ЭС</li>
            </ul>

            <p className="ui-accordion-header">
                <span className="module">Модуль 7.</span> {props.programModule7}
                <span className="ui-accordion-header-icon"></span>
            </p>
            <ul className="ui-accordion-content">
                <li>Итоговая аттестация: защита проекта</li>
            </ul>
        </div>
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