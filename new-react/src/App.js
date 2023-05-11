import { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from 'react-router-dom';


function App() {
  return <Snippet />;
}

export default App;

  // 메인 컴포넌트 
  function Snippet(){
    return(
        <Router>
          <div>
            <nav>
                <ul id='container'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                </ul>
            </nav>
          </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/post/:postId" element={<Post />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

// 홈
function Home() {
    return <h1>Home</h1>
}

// About
function About() {
    return <h1>About</h1>
}

// 게시물 목록
function Posts() {
    return (
        <>
            <h1>Posts</h1>
            <ul>
                <li>
                    <Link to="/post/p0">Post 1</Link>
                </li>
                <li>
                    <Link to="/post/p1">Post 2</Link>
                </li>
            </ul>
        </>
    )
}

// 게시물 상세보기
function Post() {
    //  useParams: url의 매개변수에 접근할 수 있다
    const{ postId }= useParams();

    return(
        <>
            <h1>Title</h1>
            <p>{postId}</p>
        </>
    )
}

// 404 페이지
function NotFound() {
    return <h1>404 NotFound</h1>
}