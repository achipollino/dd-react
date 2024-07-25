import Module from "./Module";
import { arrayOf, string } from 'prop-types';

const Program = ({ program }) => {
  return (
    <section id={`program${program.id}`} className="program">
      <div className="container">
        <span className="program-number wow animate__fadeInUp">
          Программа {program.id}
        </span>
        <h2 className="title program-title wow animate__fadeInUp">
          {program.name}
        </h2>
        <div className="program-actions wow animate__fadeInUp">
          {(program.actions ?? []).map((action, index) => (
            <p key={index} className="program-action">
              {action}
            </p>
          ))}
        </div>
        <div className="program-description">
          <p className="program-text wow animate__fadeInUp">
            {program.description}
          </p>
          <img className="wow animate__zoomIn" src="" alt="" />
        </div>
        <h3 className="program-list wow animate__fadeInUp">
          Содержание программы
        </h3>
        <div className="ui-accordion">
          {program.modules.map((module) => (
            <Module key={module.id} module={module} />
          ))}
        </div>
        <h3 className="program-list for-who wow animate__fadeInUp">Для кого</h3>
        <ol className="for-who-items">
          {(program.forWho ?? []).map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ol>
        <div className="program-button wow animate__fadeInUp">
          <button className="btn program-btn">Оставить заявку</button>
        </div>
      </div>
    </section>
  );
};

export default Program;
