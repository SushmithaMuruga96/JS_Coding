import React, { useState, useRef } from "react";
let nonverbal = [
  "is",
  "was",
  "the",
  "he",
  "she",
  "it",
  "a",
  "an",
  "his",
  "her",
  "their",
  "this",
  "that",
  "these",
  "in",
  "on",
  "at",
  "in front of",
  "on top of",
  "according to",
  "and",
  "but",
  "or",
  "because",
  "although",
  "since",
  "with",
  "to",
  "from",
  "of",
  "using",
  "for",
  "as",
  ".",
  "like",
  "best",
  "code",
  "junior",
  "developers",
  "including",
  "full",
  "app",
  "ui/ux",
  "you",
  "will",
  "be",
  "into",
  "our",
];
const TheATS = () => {
  const inputref = useRef();
  const resumeref = useRef();
  const [score, setScore] = useState(0);

  const [missingKey, setMissingKey] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    let desHub;
    let resHub;

    let description = inputref.current.value;
    if (description) {
      let desArray = description.toLowerCase().split(" ");
      desHub = desArray.filter((x) => !nonverbal.includes(x));
    }
    let resume = resumeref.current.value;
    if (resume) {
      let resumeArray = resume.toLowerCase().split(" ");
      resHub = resumeArray.filter((x) => !nonverbal.includes(x));
    }
    const misWordsFromJD = desHub.filter((x) => !resHub.includes(x));
    setMissingKey(misWordsFromJD);

    const matchPercent = Math.round((desHub.length / resHub.length) * 100);
    setScore(matchPercent);

    console.log(desHub);
    console.log(resHub);
    console.log(misWordsFromJD);
    console.log(matchPercent);
  };
  return (
    <>
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <h1>ATS Resume Score</h1>
        <div style={{ display: "flex", margin: "10px", padding: "10px" }}>
          <textarea
            ref={inputref}
            style={{ height: "20rem", width: "60%", margin: "10px" }}
            placeholder="Job Description"
          />
          <br />
          <textarea
            ref={resumeref}
            style={{ height: "20rem", width: "60%", margin: "10px" }}
            placeholder="Resume text"
          />
          <br />
        </div>
        <button type="submit">Compare</button>
      </form>
      <br />

      {score > 0 && (
        <div
          style={{
            backgroundColor:
              score < 50 ? "red" : score > 85 ? "green" : "yellow",
            width: `${score}%`,
            textAlign: "center",
            margin: "0 auto",
            border: "1px solid black",
            color: "white",
          }}
        >
          {score} %
        </div>
      )}
      {missingKey.length > 0 ? (
        <ul>
          {missingKey.map((x, index) => (
            <li key={`${x}-${index}`}>{x}</li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default TheATS;
