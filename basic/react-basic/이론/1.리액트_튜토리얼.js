/*

  리액트 튜토리얼

  1 리액트 기초
  2 리액트와 ES6
  3 JSX
  4 컴포넌트
  5 이벤트
  6 화면 업데이트
  7 데이터 요청

  할인 목록 만들기

*/

/* 
    1 리액트 기초

        1) 리액트란
            UI 개발용 자바스크립트 라이브러리
            페이스북이 개발
            가장 인기있는 프론트엔드 프레임워크

        2) 리액트 특징

            - 컴포넌트 기반
                컴포넌트는 복잡한 UI를 설계하기 위해 사용하는 독립적이고 재사용 가능한 부품이다
            
            - 선언적 문법
                사용하기 쉽다

        3) 구조
            SPA (Single Page Application)구조이다
            자바스크립트를 사용하여 화면을 업데이트한다
*/

/*
    2 리액트와 ES6

        1) 구조분해할당
        2) 스프레드 연산자
        3) let, const
        4) Array.map
        5)기타 등등
*/

// Array.map
// 배열의 각각의 아이템에 특정한 작업을 수행한다
// 업데이트된 배열을 리턴한다

// 1)    
const numbers = [1, 2, 3];

const result = numbers.map((item, index) => {
    return item * 10; // 사용자 정의
});

console.log(numbers);
console.log(result);

// 2)
const beers = ["Guinness", "Heineken", "Budwiser"];

const result2 = beers.map((beer, index) => {
    return beer.toUpperCase(); // 모든 문자를 대문자로 바꿔주는 문자열 메서드
});

console.log(beers);
console.log(result2);

/*
    3 JSX (JavaScript Extension)

        자바스크립트의 확장 문법
        가상의 엘리먼트를 만들기 위해 사용한다
        선언적 문법
        일반 자바스크립트 객체로 변환된다

        1) JSX 기초
        2) JSX Fragment
        3) JSX 에서 변수 출력하기
        4) 조건부 렌더링
        5) JSX에서 리스트 출력하기
*/

//  1) JSX 기초

function Snippet(){
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

function Snippet2(){

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

function Snippet3(){
    let cat = {
        name: "치즈",
        age: 2,
        home: null,
        sound: function(){
            return "야옹"
        }
    }

    return(
        <ul>
            <li>이름: {cat.name}</li>
            <li>나이: {cat.age}</li>
            <li>집: {cat.home}</li>
            <li>소리: {cat.sound()}</li>
        </ul>
    )
}

// 4) 조건부 렌더링

function Snippet4(){
    return(
        <>
            <h1>조건부 렌더링</h1>

            <h3>&& (논리연산자AND)</h3>
            <p>
                expr1 && expr2<br/>
                expr1이 참으로 간주되면 expr2를 렌더링한다
            </p>
            <p>{true && "나는 보입니다"}</p>
            <p>{true && "나는 안보입니다"}</p>


            <h3>|| (논리연산자 OR)</h3>
            <p>
                exp1 || expr2 <br/>
                표현식1이 참으로 간주되면 표현식1을 렌더링한다 <br/>
                표현식 1이 거짓으로 간주되면 표현식2를 렌더링한다
            </p>
            <p>{"나는 보입니다" || "나는 안보입니다"}</p>
            <p>{null || "나는 안보입니다"}</p>

            <h3>? (삼항연산자)</h3>
            <p>
                조건 ?  표현식1 : 표현식2 <br/>
                조건이 참이면 표현식 1을 렌더링한다 <br/>
                조건이 거짓이면 표현식 2를 렌더링한다
            </p>
            <p>{true ? "조건이 참입니다" : "조건이 거짓입니다"}</p>
            <p>{false ? "조건이 참입니다" : "조건이 거짓입니다"}</p>
        </>
    )
}

// 5) JSX에서 리스트 출력하기

function Snippet5(){
    
    const beers = [
        { name: "기네스", origin: "아일랜드"},
        { name: "하이네켄", origin: "네덜란드"},
        { name: "버드와이저", origin: "미국"}
    ]

    const beerList = beers.map((beer, index)=>(
        // key는 고유한 값이어야 한다
        <li key={index}>{beer.name}, {beer.origin}</li>
    ));

    return(
        <>
            <h3>세계맥주</h3>
            <ul>
                {beerList}
            </ul>
        </>
    )
}



