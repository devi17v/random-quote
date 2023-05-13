import React from "react";
import Quotes from "./quotes";
import { useState } from "react";
import { useEffect } from "react";
import "./app.css";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const App = () => {
  const [quotes, setQuotes] = useState();
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);
  const nextQuote = () => {
    setQuote(getRandomQuote(quotes));
  };
  return (
    <>
      <main>
        <h1>Quote Generator</h1>
        <Quotes onNext={nextQuote} quote={quote} />
      </main>
    </>
  );
};

export default App;
