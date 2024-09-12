import React, { useState } from 'react';

const QnA = ({ question, answer, }) => {
  const [isActive, setIsActive] = useState(false);

  return (
            <div id="faq" className="ui-accordion">
                <p className="ui-accordion-header" onClick={() => setIsActive(!isActive)}>
                    <span className="module-faq">{question}</span>
                    {isActive ? <span className="ui-accordion-faq-icon-up"></span> : <span className="ui-accordion-faq-icon"></span>}
                </p>
                {isActive && <p className="ui-accordion-faq-content">{answer}</p>}
            </div>
    );
};

export default QnA;