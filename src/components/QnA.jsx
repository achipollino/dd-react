
import React from "react";

const QnA = ({faq}) => {
    return <section id="faq" className="faq">
    <div className="container">
        <h2 className="terms-title title wow animate__fadeInUp">
            Вопросы и ответы
        </h2>
        <div>
            {faq.map((index, qna) => (
                <div key={index}>
                    <p className="ui-accordion-header wow animate__fadeInUp">
                        <span className="module">{qna.q}</span>
                        <span className="ui-accordion-header-icon"></span>
                    </p>
                    <p className="ui-accordion-content">
                        {qna.a}
                    </p>
                </div>
            ))}
    </div>
    </div>
</section>
}

export default QnA;