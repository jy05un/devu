import React from "react";
import "./board.css";

const Board = () => {
  return (
    <div>
      <div className="qna-header">
        <div className="container-board">
          <div className="best-board">
            <h2>답변을 기다리고 있습니다!</h2>
            <div className="row">
              <div className="board-best-item">
                <div className="qna-card">
                  <div className="type">답변을 기다리는 QnA</div>
                  <h4 className="title">
                    <a>질문 1</a>
                  </h4>
                  <p className="content">
                    <a className="content">내용 blablablabalbal</a>
                  </p>
                  <ul className="metadata">
                    <li className="metadata-item">
                      <span className="name">답변수</span>
                      <span className="value">0</span>
                    </li>
                    <li className="metadata-item">
                      <span className="name">추천수</span>
                      <span className="value">3</span>
                    </li>
                    <li className="metadata-item">
                      <span className="name">조회수</span>
                      <span className="value">20</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="board-best-item">
                <div className="qna-card">
                  <div className="type">답변을 기다리는 QnA</div>
                  <h4 className="title">
                    <a>질문 2</a>
                  </h4>
                  <p className="content">
                    <a className="content">내용 blablablabalbal</a>
                  </p>
                  <ul className="metadata">
                    <li className="metadata-item">
                      <span className="name">답변수</span>
                      <span className="value">0</span>
                    </li>
                    <li className="metadata-item">
                      <span className="name">추천수</span>
                      <span className="value">3</span>
                    </li>
                    <li className="metadata-item">
                      <span className="name">조회수</span>
                      <span className="value">20</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="board-best-item">
                <div className="qna-card">
                  <div className="type">답변을 기다리는 QnA</div>
                  <h4 className="title">
                    <a>질문 3</a>
                  </h4>
                  <p className="content">
                    <a className="content">내용 blablablabalbal</a>
                  </p>
                  <ul className="metadata">
                    <li className="metadata-item">
                      <span className="name">답변수</span>
                      <span className="value">0</span>
                    </li>
                    <li className="metadata-item">
                      <span className="name">추천수</span>
                      <span className="value">3</span>
                    </li>
                    <li className="metadata-item">
                      <span className="name">조회수</span>
                      <span className="value">20</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 게시판 */}
      <div className="main-area">
        <div className="main-container container">
          <div className="qnas">
            <div className="content">
              <div className="content-top">
                <div className="filter-area">
                  <div className="orders">
                    <div className="order-item">
                      <div className="check-icon"></div>
                      <p className="active">최신순</p>
                    </div>
                    <div className="order-item">
                      <div className="check-icon"></div>
                      <p className="active">추천순</p>
                    </div>
                    <div className="order-item">
                      <div className="check-icon"></div>
                      <p className="active">조회순</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="article-list">
                <div className="search">
                  <div className="search-input">
                    <input
                      type="text"
                      className="input-search"
                      placeholder="검색어를 입력하세요"
                    />
                  </div>
                </div>
                <div className="article-item">
                  <div className="item-content">
                    <a className="item-link">
                      <div className="title">안녕하세용!</div>
                      <div className="item-body">
                        <span className="body-link">반갑습니다요!</span>
                      </div>
                    </a>
                    <div className="item-info">
                      <div className="left">
                        <div className="time">4시간 전</div>
                      </div>
                      <div className="right">
                        <div className="item-user">
                          <a className="profile-link">
                            <span className="nickname">김철수</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-meta">
                    <div className="metadata">
                      <span className="key">답변</span>
                      <span className="value">1 </span>
                    </div>
                    <div className="metadata">
                      <span className="key">추천</span>
                      <span className="value">6 </span>
                    </div>
                    <div className="metadata">
                      <span className="key">조회</span>
                      <span className="value">19 </span>
                    </div>
                  </div>
                </div>
                <div className="article-item">
                  <div className="item-content">
                    <a className="item-link">
                      <div className="title">안녕하세용!</div>
                      <div className="item-body">
                        <span className="body-link">반갑습니다요!</span>
                      </div>
                    </a>
                    <div className="item-info">
                      <div className="left">
                        <div className="time">4시간 전</div>
                      </div>
                      <div className="right">
                        <div className="item-user">
                          <a className="profile-link">
                            <span className="nickname">김철수</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-meta">
                    <div className="metadata">
                      <span className="key">답변</span>
                      <span className="value">1</span>
                    </div>
                    <div className="metadata">
                      <span className="key">추천</span>
                      <span className="value">6</span>
                    </div>
                    <div className="metadata">
                      <span className="key">조회</span>
                      <span className="value">19</span>
                    </div>
                  </div>
                </div>
                <div className="article-item">
                  <div className="item-content">
                    <a className="item-link">
                      <div className="title">안녕하세용!</div>
                      <div className="item-body">
                        <span className="body-link">반갑습니다요!</span>
                      </div>
                    </a>
                    <div className="item-info">
                      <div className="left">
                        <div className="time">4시간 전</div>
                      </div>
                      <div className="right">
                        <div className="item-user">
                          <a className="profile-link">
                            <span className="nickname">김철수</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-meta">
                    <div className="metadata">
                      <span className="key">답변</span>
                      <span className="value">1</span>
                    </div>
                    <div className="metadata">
                      <span className="key">추천</span>
                      <span className="value">6</span>
                    </div>
                    <div className="metadata">
                      <span className="key">조회</span>
                      <span className="value">19</span>
                    </div>
                  </div>
                </div>
                <div className="article-item">
                  <div className="item-content">
                    <a className="item-link">
                      <div className="title">안녕하세용!</div>
                      <div className="item-body">
                        <span className="body-link">반갑습니다요!</span>
                      </div>
                    </a>
                    <div className="item-info">
                      <div className="left">
                        <div className="time">4시간 전</div>
                      </div>
                      <div className="right">
                        <div className="item-user">
                          <a className="profile-link">
                            <span className="nickname">김철수</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-meta">
                    <div className="metadata">
                      <span className="key">답변</span>
                      <span className="value">1</span>
                    </div>
                    <div className="metadata">
                      <span className="key">추천</span>
                      <span className="value">6</span>
                    </div>
                    <div className="metadata">
                      <span className="key">조회</span>
                      <span className="value">19</span>
                    </div>
                  </div>
                </div>
                <ul className="pagination">
                  <li className="page-item">
                    <button className="page-link">1</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">2</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">3</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">4</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">5</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">6</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">7</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">8</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
