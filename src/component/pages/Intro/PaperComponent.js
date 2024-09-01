import React from "react";
function PaperComponent(props) {
  return (
    <>
      <li className="paper_component">
        <figure className="paper_component_wrap">
          <img src={props.src} alt="paper" className="paper_img"></img>
        </figure>
        <div className="paper_context">
          <h5 className="paper_text">{props.text}</h5>
        </div>
      </li>
    </>
  );
}

export default PaperComponent;
