import React from 'react';
import ChatBot from '../ChatBot/ChatBot';
import './userhome.css';
import Main from '../../img/main_user.png';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const UserHome = () => {
  const examDate = new Date(2022, 11, 14);
  const now = new Date();
  const diffDay = Math.floor((examDate - now) / (24 * 60 * 60 * 1000));

  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  return (
    <div>
      {isTabletOrMobile ? (
        <div>
          {/* <ChatBot /> */}
          <div className="main-all-user">
            <div className="intro">
              <div className="intro-content-user">
                <h1 className="top-word">안녕하세요 {username}님!</h1>
                <h1>기말고사가 {diffDay}일 남았어요</h1>
                <br></br>
                <h2 className="text-userhome">
                  과목별 시험정보를 확인해보세요.
                </h2>
                <a className="btn-urp" href="https://portal.yu.ac.kr">
                  강의포털 바로가기 &gt;
                </a>
              </div>
              <img className="img-main-user" alt="" src={Main} />
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      ) : (
        <div>
          <ChatBot />
          <div className="main-all-user">
            <div className="intro">
              <div className="intro-content-user">
                <h1 className="top-word">안녕하세요 {username}님!</h1>
                <h1>기말고사가 {diffDay}일 남았어요</h1>
                <br></br>
                <h2 className="text-userhome">
                  과목별 시험정보를 확인해보세요.
                </h2>
                <a className="btn-urp" href="https://portal.yu.ac.kr">
                  강의포털 바로가기 &gt;
                </a>
              </div>
              <img className="img-main" alt="" src={Main} />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default UserHome;
