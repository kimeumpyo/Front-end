function App() {
  return <Snippet6 />;
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

// JSX 퀴즈

function Snippet6(){
  const beers = [
    { name: "기네스", origin: "아일랜드", available: false},
    { name: "하이네켄", origin: "네덜란드", available: true},
    { name: "버드와이저", origin: "미국", available: true}
  ]

  const beerList = beers.map((beer, index)=>(
    <p key={index}>
      <td>{beer.name}</td>
      <td>{beer.origin}</td>
      <td>{beer.available ? "예" : "아니오"}</td>
    </p>
  ))

  return(
    <>
    <h3>Beers</h3>

    <table>
      <tr>
        <th>이름</th>
        <th>원산지</th>
        <th>판매중</th>
      </tr>
      <tr>{beerList}</tr>
    </table>
    </>
  )

  }


