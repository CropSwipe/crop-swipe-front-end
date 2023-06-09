import React, { useState } from "react";
import "./ProductStart.scss";

import leftContents from "../../assets/images/envir/start-left1.jpg";
import { useNavigate } from "react-router-dom";

const ProductStart = () => {
  const buttons = [
    "과일",
    "채소",
    "수산물 · 건해산",
    "정육",
    "쌀 · 잡곡 · 견과",
    "우유 · 유제품",
    "크롭",
    "스와이프",
  ];

  const [activeButton, setActiveButton] = useState(null);
  const [textareaValue, setTextareaValue] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const handleDisabledButton = () => {
    if (activeButton === null || !textareaValue) {
      return true; // activeButton이 null이거나 textarea 값이 비어 있을 때는 버튼을 비활성화
    }
    return false; // 그 외의 경우에는 버튼을 활성화
  };

  const handleNextButton = () => {
    navigate("/productpostform");
  }

  return (
    <div className="start-wrapper">
      <div className="left-contents">
        <img src={leftContents} alt="Left Content" />
      </div>
      <div className="right-contents">
        <div className="right-wrap">
          <div className="contents">
            <h2>
              멋진 아이디어가 있으시군요!
              <br />
              어떤 프로젝트를 계획 중이신가요?
            </h2>
            <p>나중에 변경 가능하니 너무 걱정마세요.</p>
            <div className="category-wrap">
              <ul className="categoryList">
                {buttons.map((button, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      className={activeButton === index ? "active" : ""}
                      onClick={() => handleButtonClick(index)}
                    >
                      {button}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="contents">
              <h2>프로젝트를 간단하게 소개해주세요.</h2>
              <p>나중에 수정 가능하니 편하게 적어주세요.</p>
              <div className="summary-wrap">
                <textarea
                  className="textareas"
                  placeholder="프로젝트 요약을 입력해주세요."
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                ></textarea>
                <div className="next">
                  <button
                    className="next-button"
                    disabled={handleDisabledButton()} // 다음 버튼의 disabled 속성 추가
                    onClick={handleNextButton}
                  >
                    다음
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStart;
