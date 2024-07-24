const Module = ({ module }) => {
  return (
    <div>
      <p className="ui-accordion-header wow animate__fadeInUp">
        <span className="module">Модуль {module.id}.</span> {module.title}
        <span className="ui-accordion-header-icon"></span>
      </p>
      <ul className="ui-accordion-content">
        {(module.topics ?? []).map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default Module;
