import React from "react";
import { Link } from "react-router-dom";

function NewsComponent(props) {
  return (
    <>
      <li className="news_components">
        <Link className="news_components_link" to={props.path}>
          <figure className="news_components_wrap" data-category={props.label}>
            <img src={props.src} alt="news" className="news_img"></img>
          </figure>
          <div className="news_item_info">
            <h5 className="news_item_texts">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default NewsComponent;
