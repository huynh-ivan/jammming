import React from "react";

function SearchBtn({ onSubmit }) {
  //SearchBtn receives onSubmit as props
  return (
    <div className="render-container">
      <button type="submit">Search</button>
    </div>
  )
}

export default SearchBtn();