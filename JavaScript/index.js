// cmd 연결방법 nodemon 폴더 경로
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

/*
    5) 타입 연산자
        - typeof
        - instnaceof
*/
    // typeof
        var yoo = 'bar';
    // 인수의 타입을 리턴한다
        console.log ('yoo의 타입:', typeof yoo);

    // Q. 연산자 문제
    // 다음 문장을 표현식으로 작성해보세요
    // 나이가 13세 이상 19세 이하 (청소년)
        var age = 15
        console.log ('청소년', age >= 13 && age <= 19);

/* ======================================================================================= */ 

/*
    3 조건문

        1) if 
        2) switch
        3) ?(삼항연산자) 조건문
 */

    /*
    1) if 조건문

    if (조건) {
        조건이 참일 경우 실행되는 코드
    }
    */

        var year = 2023;

        if (year === 2023){
            console.log('이번 년도');
        }
        else if(year === 2022){
            console.log('작년');
        }
        else if(year === 2024){
            console.log('내년');
        }
        else{
            console.log('가까운 년도가 아닙니다.');
        }
    
    /*
        2) switch 조건문
        엄격동등비교를 수행한다
    */

        var year2 = 2023;

        switch(year2){
            case 2022:
                console.log('작년');
                break;
            case 2023:
                console.log('올해');
                break;
            case 2024:
                console.log('내년');
                break;
            default:
                console.log('가까운 년도가 아닙니다.');
    }
    /*
        3) 삼항연산자

        조건 ? 값1 : 값2

        조건이 참이면 값1 리턴
        조건이 거짓이면 값2 리턴
    */
    
    
        var year3 = 2023;
        console.log(year3 === 2023? '올해' : '올해가 아닙니다');

    /*
        나이가 성인이면 "성인입니다"
        성인이 아니면 "성인이 아닙니다"
        를 출력하는 조건문을 만들어 보세요

        if조건문
        삼항연산자 조건문
    */
        var age2 = 20;

        if(age2 > 19){
            console.log('성인입니다');
        }
        else{
            console.log('성인이 아닙니다');
        }

        console.log(age2 > 19? '성인입니다' : '성인이 아닙니다');
        console.log('\n');

/* ======================================================================================= */        

/*
     4. 반복문

        1) for 반복문
        2) while 반복문
*/

    // for 반복문

        for (var i=0; i<10; i++){
            console.log((i+1) + '번 실행되었습니다');
        }
        console.log('\n');

        var sum = 0;
        for (var i =1; i<=10; i++){
            sum += i;
        }
        console.log('1~10까지의 합:',sum); // 1~10까지의 합 55
        console.log('\n');
        // while 반복문

        let k = 0;
        while(k < 10){

            console.log((k+1) + '번 실행되었습니다');
            k++;
        }
        console.log('\n');
    /*
        Q. 반복문
        1/1, 1/2, 1/3,... 1/10 까지의 합을 구해보세요
    */

        var sum2 = 0;
        for (var l = 1; l<10; l++){
            sum2 += (1/l);
        }
        console.log(sum2);
        console.log('\n');

/* ======================================================================================= */

/*
    5. 변수와 상수

        1) 변수: var, let
        2) 상수: const (constant)
        3) 변수/상수의 범위
*/

    // 1)-1 var

        // 변수 초기화

        var moo = 'var : bar';    // 초기화
        console.log(moo);   // bar
        moo = 'var : baz';        // 재정의(재할당)
        console.log(moo);   // baz

        var ooo;            // 선언
        ooo = 'var : bar';        // 정의
        console.log(ooo);   // bar

        var fod = 'var : bar';
        var fod = 'var : nar';    // 재선언
        console.log(fod);   // nar
        console.log('\n');

    // 1)-2 let
        let ffo = 'let : bar';    // 초기화
        mmo = 'let : baz';        // 재정의(재할당)
        console.log(mmo);   // baz

        let ppo;            // 선언
        ppo = 'let : bar';        // 정의
        console.log(ppo);   // bar
        console.log('\n');
        // let fnd = 'bar';
        // let fnd = 'nar';    // 재선언 불가
        // console.log(fnd);   // nar
        
        // 2) 상수 const (constant)

        const fff = '삼수 : bar';
        console.log(fff);

        // const ggg;
        // ggg = 'bar'         // 에러

    /*
        3) 변수/상수의 범위

            - 전역 범위
            - 지역 (함수) 범위
            - 블록 범위
    */

    //  전역 범위
        //  함수 또는 블록 밖에서 선언된 변수가 갖는 범위



        // 전역(global) 변수
        // 어디에서든지 접근 가능하다
        var varInGlobal = true;

        { // 블록
            console.log(varInGlobal);   // true
        }


        function f(){
            console.log(varInGlobal);   // true
        }
        
        f() // 실행
        
    // 지역 (함수) 범위
        // 함수 안에서 선언된 변수가 갖는 범위

        function f(){
            // 함수내에서만 접근 가능
            var varInGlobal = true;
        }
        console.log(varInGlobal) // 에러



    // 블록 범위
        // 블록안에서 선언된 변수가 갖는 범위
        {
            var varInBlock3 = true;
            let letInBlock = true;
            const constInBlock = true;
        }
        

        console.log('플록 범위 : var', varInBlock3);        // true
        // console.log('lst', letInBlock);     // 에러
        // console.log('const', constInBlock);   // 에러

/* ======================================================================================= */

/*
    6. 함수
    정의 : 호출될 때만 실행되는 코드
        1) 함수 선언 방법
        2) 게양
        3) 인자 
        4) return
        5) 콜백
*/

    /*
        1) 함수 선언 방법
            - 함수 선언식
            - 함수 표현식
            - 화살표 함수
    */

    // 함수 선언식
        function f001() {
            console.log('함수 선언식 : foo');
        }
        f001()

    // 함수 표현식
    // 변수에 익명함수를 할당한다
        var f002 = function (){
            console.log('함수 표현식 : goo');
        }
        f002()
    // 화살표 함수
    // 간단하게 사용이가능
        var f003 = () => {
            console.log('화살표 함수 : hoo');
        }
        f003()
    /*
        2) 게양 (Hoisting)    
    */

        // f()
    // 함수선언식에만 적용된다
    // 함수의 정의가 호출 시점보다 올라간다
        function f004() {
            console.log('게양 : ioo');
        }

        let ff04 = function () {
            console.log('ggr');
        }
        f004()
    // 3) parameter (인자, 매개변수)

        function adde(x, y){ //x, y 는 파라미터
            console.log(x + y);
        }

        adde(1, 2);

    // 4) return
        function addz(x, y){
            return x + y;
        }

        var r = addz(1, 2);
         console.log(r);

    // 5) 콜백(callback)
    // 다른 함수의 인자가 되는 함수

        function fr(callback){
            let ri = callback(); //  f함수 내부에서 콜백이 행되었다
            console.log(ri);
        }

        function cb() { // 콜백
            return 'foo';
        }
        f(cb);

        // 콜백 예시
         function getTime() {
            let time = new Date().toLocaleTimeString(); // 현재시간
            console.log(time);
         }
         console.log('\n');
         // setInterval(callback, ms)
         // ms마다 callback을 실행하는 함수
         // setInterval(getTime, 1000);
    
    // Q. 인자에 따라서 성인인지 아닌지를 말해주는 함수를 만들어 보세요
         
         // 함수 선언
         function getage(age3) {    // age: 매개변수(parameter)
            if (typeof age3 !== 'number'){
                console.log('인자는 숫자만 가능합니다');
                return; // return 아래 코드는 실행되지 않는다
            }

            if (age3 >= 20) {
               console.log('성인입니다');
            }
            else{
               console.log('성인이 아닙니다.');
            }
            
         }
         // 함수 호출
         getage(20); // 성인입니다 20 : 인자(argument), 함수에 실제 전달하는 값
         getage(15); // 성인이 아닙니다.

         getage('hello');  // ?


/*
    7. 배열 (Array)         

    한개 이상의 값을 갖는 데이터 타입

         1) 배열에 접근하기
         2) 배열 메서드
         3) 배열과 반복문
 */

    // 1) 배열에 접근하기

        var arr = ['foo', 'bar', 'baz']; // 문자열 배열

        // 첫번쨰 아이템의 index는 0이다
        console.log(arr[0]); // foo
        console.log(arr[1]); // bar
        console.log(arr[2]); // baz
        console.log(arr.length); // item의 갯수
        console.log('\n');

        // 아이템 업데이트 하기
        arr[2] = 'Baz';
        console.log(arr); // [ 'foo', 'bar', 'Baz' ]

        // 아이템 추가하기
        arr[3] = 'duck';
        console.log(arr); // [ 'foo', 'bar', 'Baz', 'duck' ]

        arr[5] = 'duck';    // 5번째를 빼고 6번째를 추가했을시 현상
        console.log(arr,'6번째 추가');   //[ 'foo', 'bar', 'Baz', <1 empty item>, 'duck' ]
        console.log(arr[3]);    // undefined
    
    /*
         2) 배열 메서드
            - Array.push()
            - Array.pop()
            - Array.concat()
            - Array.sort()
            - Array.reverse()
            - Array.shift()
            - Array.unshift()
            - Array.splice()
    */

    // Array.push(newItem1, newItem2, ...)

         var arr = ['foo', 'bar'];
         arr.push('bar');   // 새로운 아이템을 추가한다
         console.log(arr,'새로운 아이템 추가');

    // Array.pop()

         var arr1 = ['foo', 'bar', 'baz'];
         arr1.pop();         // 가장 마지막 아이템을 제거한다
         console.log(arr1,'가장 마지막 아이템 제거');

    // Array.concat(Array2) 
    // Array3뒤에 Array4을 합친다
        var arr3 = ['foo', 'bar'];
        var arr4 = ['baz'];
        var result = arr3.concat(arr4); // concatenate
        console.log(result,'arr3 + arr4');

    // Array.sort()

        var arrr = ['aoo', 'bar', 'caz'];
        arrr.sort(); // 정렬 메서드
        // 문자열의 기본값은 알파벳순으로 정렬한다
        console.log(arrr,'알파벳순 정렬');
    
    // Array.reverse()

        var artt = ['aoo', 'bar', 'caz'];
        artt.reverse(); // 정렬 메서드
        console.log(artt,'알파벳순 반대정렬');

    // Array.shift()

        var arrt = ['foo', 'bar', 'baz'];
        arrt.shift();
        console.log(arrt,'첫번째 아이템 제거');

    // Array.unshift()

        var arre = ['foo', 'bar', 'baz'];
        arre.unshift('goo');
        console.log(arre,'첫번째 아이템 추가');

    // Array.splice()

        var arre = ['foo', 'bar', 'baz'];
        // 3번째 라인에 추가후 뒤에0개의 아이템 제거
        arre.splice(2, 0,'goo','eer');
        console.log(arre,'3번째 추가');
        console.log('\n');
        
/*
     7. 반복문과 배열

     배열에 특정한 작업을 수행할 수 있다.
*/

        var arri = ['foo', 'bar', 'baz'];
        let text = ""
        // 배열의 아이템에 특정한 작업을 수행할 수 있다
        for (var i = 0; i < arri.length; i++){
            // toUpperCase(item들을 대문자로 만들어준다)
            // console.log(arri[i].toUpperCase());
            text += arri[i].toUpperCase() + ' '; 
        }
        console.log(text);
        console.log('\n');

    // 필터링 작업

        var arry =['foo', 'bar', 'baz'];
        for (var i = 0; i < arry.length; i++){
            if (arry[i][0] === 'b'){
                console.log(arry[i],'b로 시작하는 item출력')
            }
        }
        console.log('\n');

        console.log('   foo     ');
        console.log('   foo     '.trim()); // 문자열공백을 제거
        // trimstart    앞 공백 제거
        // trimend      뒤 공백 제거
        console.log('\n');

        console.log('foo, bar, baz'.split(',')) // [ 'foo', ' bar', ' baz' ]
        console.log('\n');

    // Q1. beers 배열에 미국 맥주를 추가해보세요

        var beers = ['기네스', '하이네켄'];
        var americanBeer = '버드와이저';

        beers.push(americanBeer);
        console.log(beers);

        beers[2] = americanBeer;
        // console.log(beers);
        console.log('\n');

    // Q2. 성인의 나이만 출력하는 코드를 작성해보세요
    // 반복문 사용

        var ages = [12, 19, 23, 30];
        for (var i = 0; i < ages.length; i++){
            if (ages[i]>= 20){ // 조건
                console.log(ages[i],'세 성인입니다');
            }
        }
        console.log('\n');

/*
    8. 객체(Object)
    데이터와 함수의 집합
*/

        var cat = {
            // 객체의 속성 (porperty)
            name: '치즈',
            home: null,
            sound: function(){ // 메서드 (method)
                return'야옹'
            }
        }
        console.log(cat);
        console.log(cat.name);          // name 속성에 접근
        console.log(cat['name']);       // name 속성에 접근
        console.log(cat.color,'\n');    // 존재하지 않는 속성에 접근 undefined

        // 메서드 호출시 ()붙여준다.
        console.log(cat.sound(),'\n');  // 메서드 호출
    
    // 새로운 속성 추가

        cat.age = 2;                    // age 속성 추가
        console.log(cat);

    // 속성 업데이트

        cat.home = '삼산동'             // home 속성 업데이트
        console.log(cat);

    // 속성 삭제
        delete cat.home;                // home 속성 삭제
        console.log(cat);
        console.log('\n')

    // Q. 네덜란드 맥주의 이름에 접근해보세요

        var beers = [
            {name: '기네스', origin: '아일랜드'},
            {name: '하이네켄', origin: '네덜란드'},
            {name: '버드와이저', origin: '미국'},
        ]

        let text1 = ""

        for (var i = 0; i < beers.length; i++){
            if (beers[i]){ // 조건
                // console.log(beers[i].name);
                text1 += beers[i].name + ' '
            }
        }

        console.log(text)
        