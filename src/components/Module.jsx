import React, { useState } from 'react';

const Module = ({ module }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <p className="ui-accordion-header" onClick={() => setIsActive(!isActive)}>
        <span className="module">Модуль {module.id}.</span> {module.title}
        <span>{isActive ? <span className="ui-accordion-header-icon"></span> : <span className="ui-accordion-header-icon"></span>}</span>
      </p>
      {isActive && 
        <ul className="ui-accordion-content">
          {(module.topics ?? []).map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
        }
    </div>
  );
};

export default Module;
