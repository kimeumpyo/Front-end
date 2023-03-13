
// console.log('hello JavaScript');

/*
    JavaScript

    목차

    1 데이터 타입
    2 연산자
    3 조건문
    4 반복문
    5 변수와 상수
    6 함수
    7 배열
    8 객체
    9 클래스
    10 에러와 에러처리
    11 비동기 작업
    12 프로미스
    13 ES6 문법
    14 정규식
    15 JSON
*/

/*
    1 데이터 타입

    1) String (문자열)
    2) Number
    3) Boolean
    4) null
    5) nudefined
    6) BigInt
*/

/*
    1) String (문자열)

        - 연속된 문자
          '',"" 안에 값을 작성한다
*/

    var foo = 'bar'

    console.log(foo);               // bar 콘솔에서 글자는 흰색으로 표현한다
    console.log(typeof foo);        // string

    console.log(foo[0]);            // foo의 첫번째 글자만 출력 b
    console.log(foo[1]);
    console.log(foo[2]);

    console.log(foo.length);        // 문자열의 갯수를 나타낸다 3

/* 
    2) Nember

        -(2^1024-1) 에서 2^1024-1 사이의 숫자를 나타낸다

        값의 종류: 정수, 소수, NaN(Not a Number), +Infinity, -Infinity
*/

    // 정수
    var year = 2023;                // bar 콘솔에서 숫자는 주황색으로 표현한다
    console.log(year);              // 2023
    console.log(typeof year);       // number

    // 소수
    var pi = 3.14
    console.log(pi);                // 3.14

    // NaN
    var nan = 2 - 'foo';
    console.log(nan);               

    // Number 타입의 최대 값
    var max_value = Number.MAX_VALUE;
    console.log(max_value);

    // Number 타입의 최소 값
    var negative_max_value = -Number.MAX_VALUE;
    console.log(negative_max_value);

    // 양의 무한대
    var infinity = Number.MAX_VALUE * 1.1;
    console.log(infinity);          // infinity

    // 음의 무한대
    var negative_infinity = -Number.MAX_VALUE * 1.1;
    console.log(negative_infinity);          // infinity

/*
    3) Boolean
    참 또는 거짓 (true or false)의 값을 갖는다
*/

    var bool = true;
    console.log(bool);                      // 콘솔에서 Boolean은 주황색으로 표현한다
    console.log(typeof bool);               // boolean

    // 비교연산이나 논리연산은 boolean값을 리턴한다
    console.log(1 > 0);                     // true
    console.log(1 == 2);                    // false

/*
    4) Null
    '무효' 또는 '없는'의 상태를 나타낸다
*/

    var roo = null;
    console.log(roo);                       // null
    console.log(typeof roo);                // obfect

/* 
    5) undefined
    정의되지 않은 변수를 나타낸다
*/

    var x;
    console.log(x);
    console.log(typeof x);

/*
    6)BigInt
    안전한 정수 (safe integer) 밖의 정수를 나타낸다
    Number 타입 값의 뒤에 n을 붙여 선언한다
    
    * 안전한 정수: -(2^53 ~ 1)에서 2^53 ~ 1 사이의 정수
 */

    // 안전한 정수 (최대)
    var max_safe_integer = Number.MAX_SAFE_INTEGER;
    console.log(max_safe_integer);

    // 안전한 정수 (최소)
    var min_safe_integer = Number.MIN_SAFE_INTEGER;
    console.log(min_safe_integer);

    // Number타입은 안전한 정수 밖의 정수를 정확하게 저장할 수 없다
    var not_safe_integer = 9999999999999999;
    console.log(not_safe_integer);  // 10000000000000000

    var bigint = 9999999999999999n;
    console.log(bigint);            // 9999999999999999n
    console.log(typeof bigint);     // bigint


/* ======================================================================================= */ 

/*
    2 연산자

    1) 수리 연산자
    2) 할당 연산자
    3) 비교 연산자
    4) 논리 연산자
    5) 타입 연산자
*/

/*
    1) 수리 연산자
        - 4칙연산   +, -, *, /
        - 증감 연산자   ++, --
        - 제곱 연산자   **
        - 계수 연산자   %
*/

    // 4칙연산자
    var add = 1 + 1;        console.log('덧셈:', add)
    var subtract = 2 - 1;   console.log('뺄셈:', subtract)
    var multiply = 1 * 1;   console.log('곱셈:', multiply)
    var divide = 1 / 2;     console.log('나눗셈:', divide)

    // 증감 연산자
    var i = 1;
    i++;
    console.log(i);

    var j = 1;
    j--;
    console.log(j);

    // 제곱 연산자  (지수)
    var exp = 2 ** 7;
    console.log(exp)        // 128

    // 계수 연산자
    var mod = 5 % 2;
    console.log(mod);

/*
    2) 할당 연산자
        - 변수할당 연산자 =   
        - 덧셈할당 연산자 +=
        - 빼기할당 연산자 -=
        - 곱하기할당 연산자 *=
        - 나누기할당 연산자 /=
        - 지수할당 연산자 **=
        - 계수할당 연산자 %=
*/

    // 변수할당 연산자 =
    var goo = 'barr';
    console.log(goo);

    // 덧셈할당 연산자 +=
    var longVariablesName = 1;
    // longVariablesName = longVariablesName + 1 과 같다
    longVariablesName += 1;
    console.log(longVariablesName);
    // 나머지도 동일!! (생략)

/*
    3) 비교 연산자
        - 동등 연산자 ==
        - 비동등 연산자 !=
        - 엄격동등 연산자 ===
        - 엄격비동등 연산자 !==
        - greater than 연산자 >
        - greater than or equal 연산자  >=
        - less than 연산자 <
        - less than or equal 연산자 <=
*/

    // 동등 연산자 == (잘 사용안한다)
    console.log('동등:', 2023 == 2023);  // true
    console.log('동등:', 2023 == "2023");  // true
    console.log('동등:', null == undefined);  // true
    console.log('\n');

    // 비동등 연산자 != (잘 사용안한다)
    console.log('비동등:', 2023 != 2023);  // false
    console.log('비동등:', 2023 != "2023");  // false
    console.log('비동등:', null != undefined);  // false
    console.log('\n');

    // 엄격동등 연산자 ===
    console.log('엄격동등:', 2023 === 2023);  // true
    console.log('엄격동등:', 2023 === "2023");  // false
    console.log('엄격동등:', null === undefined);  // false
    console.log('\n');

    // 엄격비동등 연산자 !==
    console.log('엄격비동등:', 2023 !== 2023);  // false
    console.log('엄격비동등:', 2023 !== "2023");  // true
    console.log('엄격비동등:', null !== undefined);  // true
    console.log('\n');

    // greater than 연산자 >
    console.log('연산자:', 4 > 1);  // true
    console.log('연산자:', 1 > 4);  // false
    console.log('\n');
    
    // greater than or equal 연산자  >=
    // less than 연산자 <
    // less than or equal 연산자 <=

/*
    4) 논리 연산자
        - AND(그리고)   expr 1 && expr 2
        - OR(또는)      expr 1 || expr 2
        - !(NOT)        expr
*/

    // AND(그리고)
    console.log('AND:', 1 > 0 && 1 < 2);    // true
    console.log('AND:', 1 > 0 && 1 > 2);    // false
    console.log('\n');

    // OR(또는)
    console.log('OR:', 1 > 0 || 1 < 2);      // true
    console.log('OR:', 1 > 0 || 1 > 2);      // true
    console.log('OR:', 1 < 0 || 1 > 2);      // false
    console.log('\n');

    // !(NOT)
    console.log('NOT:', !(0 > 1));          // true        
    console.log('NOT:', !(true));          // false
    console.log('\n');
    
    //  boolean 타입이 아닌 다른 데니터 타입을 부정할 경우

    console.log('Not null:', !null);         // true
    console.log('Not undefined:', !undefined);         // true
    console.log('Not zero:', !0);        // true
    console.log('Not 빈문자열', !"");