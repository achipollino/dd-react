import React from "react";
import { useFaq } from "../providers/QnAContext";
import QnA from "./QnA";

const QnAStart = () => {
  const faqList = useFaq();

  return (
    <div>
      {faqList.map((faq) => (
        <QnA key={faq.id} faq={faq} />
      ))}
    </div>
  );
};

export default QnAStart;