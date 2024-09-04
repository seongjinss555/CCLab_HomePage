import React, { useEffect } from "react";
import "./Members.css";
import Professor from "./Professor.js";
import Footer from "../../Footer.js";
export default function Members() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }); /*페이지 이동 시 위로 고정*/

  return (
    <div>
      <div className="professor_container">
        <div className="container_wrap">
          <h1 className="professor">교수 소개</h1>
          <div className="pf_info">
            <div className="pf_img">
              <img src="images/member/professor.jpg" alt={""} />
            </div>
            <div className="pf_details">
              <div className="pf_text">
                <div className="name">
                  <h1 className="professor">김상대</h1>
                  <h2 className="professor">의료 IT 공학과 교수</h2>
                </div>
              </div>
              <ul className="professor">
                <li>SoonChunHyang Univ.</li>
                <li>
                  <a href="https://home.sch.ac.kr/schmite/index.jsp">
                    Department of Medical IT Engineering
                  </a>
                </li>
              </ul>
              <div className="pf_email">
                <dl>
                  <br></br>
                  <dt>OFFICE : 의료과학관 1511</dt>
                  <dt>LAB : 의료과학관 1512</dt>
                </dl>
                <dl>
                  <dt>E-MAIL : sdkim.mie@sch.ac.kr</dt>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Professor />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
