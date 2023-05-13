import React from "react";

const Quotes = ({ onNext, quote }) => {
  return (
    <>
      <section>
        <button onClick={onNext}>Next Quote</button>
        <h3>"{quote.text}"</h3>
        <i>-{quote.author}</i>
      </section>
    </>
  );
};

export default Quotes;
