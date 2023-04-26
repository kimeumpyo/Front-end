import{createContext, useContext} from 'react';

function App() {
  return <Snippet11 />;
}

export default App;

// Array.map
// 배열의 각각의 아이템에 특정한 작업을 수행한다
// 업데이트된 배열을 리턴한다

const numbers = [1, 2, 3];

const result = numbers.map((item, index) => {
  return item * 10; // 사용자 정의
})

console.log(numbers);
console.log(result);

const beers = ["Guinness", "Heineken", "Budwiser"];

const result2 = beers.map((beer, index) => {
  return beer.toUpperCase(); // 모든 문자를 대문자로 바꿔주는 문자열 메서드
});

console.log(beers);
console.log(result2);
// 3 JSX (JavaScript Extension)

// -------------------------------------------------------------------------------------------

// 1) JSX 기초

function Snippet() {
  return (
    <form>
      <h1>Google</h1>
      <input
        type="search"
        className="class1 class2"
        style={{ padding: "0.5rem", width: "20rem" }}
        placeholder="구글 검색"
        autoComplete="off"
      />
    </form>
  )
}

// -------------------------------------------------------------------------------------------

// 2) JSX Fragment

function Snippet2() {

  // JSX에서는 트리가 하나의 동일한 엘리먼트로 감싸져야한다
  // 또는 Fragment를 사용한다

  return (
    // 감싸는 엘리먼트 <div>를 지우면 오류가난다
    // <></> 감싸도 상관없다
    <div>
      <h1>JSX Fragment</h1>
      <ul>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
      </ul>
    </div>
  )
}

// -------------------------------------------------------------------------------------------

// 3) JSX 에서 변수 출력하기

function Snippet3() {
  let cat = {
    name: "치즈",
    age: 2,
    home: null,
    sound: function () {
      return "야옹"
    }
  }

  return (
    <ul>
      <li>이름: {cat.name}</li>
      <li>나이: {cat.age}</li>
      <li>집: {cat.home}</li>
      <li>소리: {cat.sound()}</li>
    </ul>
  )
}

// -------------------------------------------------------------------------------------------

// 4) 조건부 렌더링

function Snippet4() {
  return (
    <>
      <h1>조건부 렌더링</h1>

      <h3>&& (논리연산자AND)</h3>
      <p>
        expr1 && expr2<br />
        expr1이 참으로 간주되면 expr2를 렌더링한다
      </p>
      <p>{true && "나는 보입니다"}</p>
      <p>{null && "나는 안보입니다"}</p>

      <h3>|| (논리연산자 OR)</h3>
      <p>
        exp1 || expr2 <br />
        표현식1이 참으로 간주되면 표현식1을 렌더링한다 <br />
        표현식 1이 거짓으로 간주되면 표현식2를 렌더링한다
      </p>
      <p>{"나는 보입니다" || "나는 안보입니다"}</p>
      <p>{null || "나는 보입니다"}</p>

      <h3>? (삼항연산자)</h3>
      <p>
        조건 ?  표현식1 : 표현식2 <br />
        조건이 참이면 표현식 1을 렌더링한다 <br />
        조건이 거짓이면 표현식 2를 렌더링한다
      </p>
      <p>{true ? "조건이 참입니다" : "조건이 거짓입니다"}</p>
      <p>{false ? "조건이 참입니다" : "조건이 거짓입니다"}</p>
    </>
  )
}

// -------------------------------------------------------------------------------------------

// 5) JSX에서 리스트 출력하기

function Snippet5() {

  const beers = [
    { name: "기네스", origin: "아일랜드" },
    { name: "하이네켄", origin: "네덜란드" },
    { name: "버드와이저", origin: "미국" }
  ]

  const beerList = beers.map((beer, index) => (
    // key는 고유한 값이어야 한다
    <li key={index}>{beer.name}, {beer.origin}</li>
  ));

  return (
    <>
      <h3>세계맥주</h3>
      <ul>
        {beerList}
      </ul>
    </>
  )
}

// -------------------------------------------------------------------------------------------

// JSX 퀴즈

function Snippet6() {
  const beers = [
    { name: "기네스", origin: "아일랜드", available: false },
    { name: "하이네켄", origin: "네덜란드", available: true },
    { name: "버드와이저", origin: "미국", available: true }
  ]

  const beerList = beers.map((beer, index) => (
    <tr key={index} style={{ textAlign: "center" }}>
      <td>{beer.name}</td>
      <td>{beer.origin}</td>
      <td>{beer.available ? "예" : "아니오"}</td>
    </tr>
  ))

  return (
    <>
      <h3>Beers</h3>

      <table border="1">

        <thead>
          <tr>
            <th>이름</th>
            <th>원산지</th>
            <th>판매중</th>
          </tr>
        </thead>

        <tbody>
          {beerList}
          {/* 또는 tbody에 직접 입력 
            beers.map((beer, index) => (
            <tr key={index} style={{ textAlign: "center" }}>
              <td>{beer.name}</td>
              <td>{beer.origin}</td>
              <td>{beer.available ? "예" : "아니오"}</td>
            </tr>
          )) */}
        </tbody>

      </table>
    </>
  )
}

// -------------------------------------------------------------------------------------------

// 1) 컴포넌트 합성
function Content() {
  return (
    <>
      <h2>고양이는 액체일까?</h2>

      {/* video */}
      <img
        src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width="100%"
      />
    </>
  )
}

function Comments() {
  return (
    <ul>
      <li>3등!</li>
      <li>2등!</li>
      <li>1등!</li>
    </ul>
  )
}

function Suggested() {
  return (
    <ul>
      <li>고양이는 정말 폭력적일까?</li>
      <li>소양이는 정말 자기가 신이라고 생각할까?0</li>
      <li>냥냥펀치는 얼마나 아플까?</li>
    </ul>
  )
}

function Snippet7() {
  return (
    <>
      <header>
        <h1>Youtube</h1>
      </header>

      <main>
        <Content />

        <h2>댓글</h2>
        <Comments />
      </main>

      <aside>
        <h2>추천 영상</h2>
        <Suggested />
      </aside>
    </>
  )
}

// -------------------------------------------------------------------------------------------

function Snippet8() {

  // 지역 변수
  const irishBeer = {
    name: "기네스",
    origin: "아일랜드",
    available: false
  }

  return (
    <>
      <h1>맥주</h1>
      <Beer beer={irishBeer} />
    </>
  )
}

function Beer({ beer }) {
  console.log(beer);

  return (
    <ul>
      <li>이름: {beer.name}</li>
      <li>원산지: {beer.origin}</li>
      <li>판매중: {beer.available ? "예" : "아니오"}</li>
    </ul>
  )
}

// -------------------------------------------------------------------------------------------

// Q. 다음 데이터를 사용해서 유튜브 페이지를 완성해보세요
// 영상, 댓글, 추천비디오 컴포넌트를 만들고 합성
function Snippet9() {
  const DATA = {
    video: {
      id: 'v0',
      title: '고양이는 액체일까?',
      source: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    commentsd: [
      { id: 'c0', content: '1빠' },
      { id: 'c1', content: '2빠' },
      { id: 'c2', content: '3빠' },
    ],

    suggestedVideos: [
      { id: 's0', title: '고양이는 정말 폭력적일까?' },
      { id: 's1', title: '고양이는 정말 자기가 신이라고 생각할까?' },
      { id: 's2', title: '냥냥펀치는 얼마나 아플까?' },
    ]
  }

  return (
    <>
      <header>
        <h1>Youtube</h1>
      </header>

      <main>
        <Comment video={DATA.video} />

        <h2>댓글</h2>
        <Commentsd commentsd={DATA.commentsd} />
      </main>

      <aside>
        <h2>추천영상</h2>
        <Suggesteds suggestedVideos={DATA.suggestedVideos} />
      </aside>
    </>
  )
}

function Comment({ video }) {
  console.log(video);

  return (
    <>
      <h2>{video.title}</h2>

      <img src={video.source} alt="" width="100%" />
    </>
  )
}

function Commentsd({ commentsd }) {
  console.log(commentsd);

  const commentsdList = commentsd.map(comment => (
    <li key={commentsd.id}>{comment.content}</li>
  ))

  return (
    <ul>
      {commentsdList}
    </ul>
  )
}

function Suggesteds({ suggestedVideos }) {
  console.log(suggestedVideos);

  const suggestedVideoList = suggestedVideos.map(videos => (
    <li key={videos.id}>{videos.title}</li>
  ))

  return (
    <ul>
      {suggestedVideoList}
    </ul>
  )
}

// -------------------------------------------------------------------------------------------

/*
    3) children props
    컴포넌트를 트리구조로 작성할 수 있다

*/
// function Layout({children}){
//   return(
//       <>
//           <h1>Instagram</h1>
//           <nav>
//               <ul>
//                   <li>Home</li>
//                   <li>Posts</li>
//                   <li>Profile</li>
//               </ul>
//           </nav>

//           <main style={{padding: "1rem 0"}}>
//             {/* children이 의미하는것 Article */}
//               {children}
//           </main>

//           <footer>
//               <small>2023 %copy; Instagram</small>
//           </footer>
//       </>
//   )
// }

// function Article(){
//   return(
//       <>
//           <img
//           src="data:image/jpeg;base64,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"
//           alt=""
//           width="100%"
//           />
//           <p>
//               <b>snoop Dogg</b>
//               주인 출근해서 한컷.
//           </p>

//           <small>1일 전</small>
//       </>
//   )
// }

// function Snippet10(){
//   return(
//       <Layout>
//           <Article/>
//       </Layout>
//   )
// }

// -------------------------------------------------------------------------------------------

/*
    4) useContext Hook
    children 컴포넌트에 데이터를 전달할 수 있다

*/

// 3.
const AuthContext = createContext();

// 1.유저데이터 관리하는 컴포넌트
function AuthProvider({children}){
  // AuthProvider의 children은 Layout

  // 유저데이터
  const value = { username: 'bunny'}

  return (
    // 4.
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
)
}

function Layout({children}){

  // 5.
  const auth = useContext(AuthContext);

  console.log(auth);

  return(
      <>
          <h1>Instagram</h1>
          <nav>
              <ul>
                  <li>Home</li>
                  <li>Posts</li>
                  <li>Profile</li>
              </ul>
          </nav>
          {/* 6. */}
          <p>안녕하세요 {auth.username}님</p>

          <main style={{padding: "1rem 0"}}>
              {children}
          </main>

          <footer>
              <small>2023 %copy; Instagram</small>
          </footer>
      </>
  )
}

function Article(){

  // 7.
  const auth = useContext(AuthContext);

  console.log(auth);

  return(
      <>
          <img
          src="data:image/jpeg;base64,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"
          alt=""
          width="100%"
          />
          <p>
              <b>snoop Dogg</b>
              주인 출근해서 한컷.
          </p>

          <small>1일 전</small>
      </>
  )
}

function Snippet11(){
  return(
      // 2
      <AuthProvider>
          <Layout>
              <Article/>
          </Layout>
      </AuthProvider>
  )
}


