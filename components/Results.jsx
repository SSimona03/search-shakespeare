"use client";
import React from "react";
import DOMPurify from "dompurify";

function Results({ searchResults }) {
  const dataSearchResults = searchResults.documents;
  const cleanHTML = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <div className="results">
      {dataSearchResults?.map((items, key) => (
        <div className="card" key={key}>
          <div>{items.document.play_name}</div>
          <div>
            <b>{items.document.speaker}</b> : "
            <span
              dangerouslySetInnerHTML={cleanHTML(items.highlight.text_entry)}
            />
            "
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
