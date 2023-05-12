
import "./App.css";
import { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, NavLink } from 'react-router-dom';


function App() {
  return <Snippet />;
}

export default App;

// 메인 컴포넌트 
function Snippet() {
  return (
    <Router>
      {/* header */}
      <header>
        <div className="header_flex">
          <a href="#" className="header_a">&#9776;</a>
          <h1 className="header_h1">미세먼지</h1>
        </div>
      </header>

      {/* side bar */}
      <nav className="side_nav">
        <div className="side_div">
          <h2 className="side_h2">
            미세먼지
          </h2>
        </div>
        <ul>
          <li>
            <Link className="Link" to="/seoul">서울</Link>
          </li>
          <li>
            <Link className="Link" to="/inchoen">인천</Link>
          </li>
          <li>
            <Link className="Link" to="/daegu">대구</Link>
          </li>
          <li>
            <Link className="Link" to="/busan">부산</Link>
          </li>
        </ul>
      </nav>

      {/* main */}
      <main>
        <h1 className="main_h1">지역별</h1>

        {/* SHOW */}
        <div id="show">
          <h2 className="show_h2">미세먼지</h2>
          <hr className="show_hr"></hr>
        </div>
        <div className="show_images">
          <div className="image_p">
              <NavLink className="show_image " to="/seoul">
                <img className="image_size" src="https://blog.kakaocdn.net/dn/bezjux/btqCX8fuOPX/6uq138en4osoKRq9rtbEG0/img.jpg" ></img>
              </NavLink>
              <NavLink className="show_image " to="inchoen">
                <img className="image_size" src="https://blog.kakaocdn.net/dn/bezjux/btqCX8fuOPX/6uq138en4osoKRq9rtbEG0/img.jpg" ></img>
              </NavLink>
          </div>
          <div className="image_p">
              <NavLink className="show_image " to="/daegu">
                <img className="image_size" src="https://blog.kakaocdn.net/dn/bezjux/btqCX8fuOPX/6uq138en4osoKRq9rtbEG0/img.jpg" ></img>
              </NavLink>
              <NavLink className="show_image " to="/busan">
                <img className="image_size" src="https://blog.kakaocdn.net/dn/bezjux/btqCX8fuOPX/6uq138en4osoKRq9rtbEG0/img.jpg" ></img>
              </NavLink>
          </div>

        </div>
      </main>    

      <div className="container">
        <Routes>
          <Route path="/seoul" element={<Seoul />} />
          <Route path="/seoul1" element={<Seoul1 />} />
          <Route path="/seoul2" element={<Seoul2 />} />

          <Route path="/inchoen" element={<Incheon />} />
          <Route path="/inchoen1" element={<Incheon1 />} />
          <Route path="/inchoen2" element={<Incheon2 />} />

          <Route path="/daegu" element={<Daegu />} />
          <Route path="/daegu1" element={<Daegu1 />} />
          <Route path="/daegu2" element={<Daegu2 />} />

          <Route path="/busan" element={<Busan />} />
          <Route path="/busan1" element={<Busan1 />} />
          <Route path="/busan2" element={<Busan2 />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}


      // var ShowIM = document.getElementsByClassName("show_image")
      // var ShowIMs = document.getElementsByClassName("show_images")

      // ShowIM.addEventListener('click', () =>{
      //   ShowIMs.classList.add("hidden");
      // });
    


// 서울
function Seoul() {
  return (
    <>
      <h1>서울</h1>
      <nav className="show_images">
        <div>
          <NavLink to="/seoul1">
            <img className="show_image" src="https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg" style={{ width: "300px" }}></img>
          </NavLink>
        </div>
        <div>
          <NavLink to="/seoul2">
            <img className="show_image" src="https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg" style={{ width: "300px" }}></img>
          </NavLink>
        </div>
      </nav>
    </>

  )
}
function Seoul1() {
  return (
    <>
    <h1>감자</h1>
    </>
  )
}
function Seoul2() {
  return (
    <>
    <h1>고구마</h1>
    </>
  )
}

// 인천
function Incheon() {
  return (
    <>
      <h1>인천</h1>
      <nav>
        <div>
          <Link to="/inchoen1">1지역</Link>
        </div>
        <div>
          <Link to="/inchoen2">2지역</Link>
        </div>
      </nav>
    </>
  )
}

function Incheon1() {
  return (
    <>
      <h1>인천1</h1>
    </>
  )
}
function Incheon2() {
  return (
    <>
      <h1>인천2</h1>
    </>
  )
}
// 대구
function Daegu() {
  return (
    <>
      <h1>대구</h1>
      <nav>
        <div>
          <Link to="/daegu1">1지역</Link>
        </div>
        <div>
          <Link to="/daegu2">2지역</Link>
        </div>
      </nav>
    </>
  )
}
function Daegu1() {
  return (
    <>
      <h1>대구1</h1>
    </>
  )
}

function Daegu2() {
  return (
    <>
      <h1>대구2</h1>
    </>
  )
}

// 부산
function Busan() {
  return (
    <>
      <h1>부산</h1>
      <nav>
        <div>
          <Link to="/busan1">1지역</Link>
        </div>
        <div>
          <Link to="/busan2">2지역</Link>
        </div>
      </nav>
    </>
  )
}
function Busan1() {
  return (
    <>
      <h1>부산1</h1>
    </>
  )
}

function Busan2() {
  return (
    <>
      <h1>부산2</h1>
    </>
  )
}

// 404 페이지
function NotFound() {
  return <h1>404 NotFound</h1>
}