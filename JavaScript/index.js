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

/* ======================================================================================= */        

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
        let text1 = ""
        // 배열의 아이템에 특정한 작업을 수행할 수 있다
        for (var i = 0; i < arri.length; i++){
            // toUpperCase(item들을 대문자로 만들어준다)
            // console.log(arri[i].toUpperCase());
            text1 += arri[i].toUpperCase() + ' '; 
        }
        console.log(text1);
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

/* ======================================================================================= */        

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

        cat.home = '삼산동';           // home 속성 업데이트
        console.log(cat);

    // 속성 삭제
        delete cat.home;                // home 속성 삭제
        console.log(cat);
        console.log('\n');

    // Q. 네덜란드 맥주의 이름에 접근해보세요

        var beers = [
            {name: '기네스', origin: '아일랜드'},
            {name: '하이네켄', origin: '네덜란드'},
            {name: '버드와이저', origin: '미국'},
        ]

        let text2 = "";

        for (var i = 0; i < beers.length; i++){
            if (beers[i]){ // 조건
                // console.log(beers[i].name);
                text2 += beers[i].name + ' ';
            }
        }

        console.log(text2);

/* ======================================================================================= */        

/*
    9. 클래스(class)
    객체를 생성하기 위한 템플릿

        1) 클래스 인스턴스
        2) static 속성과 static 메서드
        3) 미리 정의된 클래스
        4) 리터럴 표기법
*/

    // 1) 클래스 인스턴스
        // 생성자 함수 : 인스턴스 속성을 설정하기 위해 사용된다
        class Cat1 {  // 클래스의 첫글자는 대문자
            constructor(name, age){
                this.name = name;
                this.age = age;
            }

            // 클래스 멤버 (속성)
            home = null;

            // 클래스 멤버 (메서드)
            sound() {
                return '양옹';
            }
        }

        // Cat 클래스의 인스턴스
        const cat2 = new Cat1('치즈', 2);

        console.log(cat);

        console.log(cat2 instanceof Cat1); // cat2 는 Cat1의 인스턴스이다 (true)

        // 상속 (코드 재사용)
        console.log(cat2.home,"코드 재사용");

        // 상속 
        console.log(cat.sound()); // 야옹
        console.log('\n');

    /*
        2) static 속성과 static 메서드

        클래스와 인스턴스의 관련된 유틸리티를 제공한다
    */

        class Dog {

            // ...(생성자, 멤버 등)

            // static 속성
            static family = "강아지과";

            // static 메서드
            static isAdult(age){
                if (age < 1){
                    return " 아기강아지";
                }else{
                    return "성체 강아지";
                }
            }
        }

        // static 속성과 메서드는 클래스 자체가 호출한다
        console.log(Dog.family);    // 강아지과

        console.log(Dog.isAdult(2)); // 성체 강아지

        var pi = Math.PI;
        console.log(pi); // 원주율
        console.log('\n');
    /*
        3) 미리 정의된 클래스

        - 문자처리: String
        - 숫자 및 날짜: Number, Math, Date
        - 인덱스가 있는 콜렉션: Array
        - 에러: SyntaxError, ReferenceError 기타 에러 등
        - 기타: Primise, JSON
    */

    
    // 4) 리터럴 표기법

        // String클래스의 인스턴스
        var jjo = new String('hello');      // 클래스를 이용
        console.log(jjo,"클래스 표기법");

        var jjo = 'Hello';                  // 리터럴 표기법 (값만 적는다)
        console.log(jjo,"리터럴 표기법");

        console.log(jjo.toUpperCase());     // .toUpperCase() <- 대문자로 바꿔준다

        // Number의 인스턴스

        var year4 = new Number(2023);       // 클래스
        var year4 = 2023;                   // 리터럴 표기

        // Object의 인스턴스
        // var o = new Objeact({prop1: 'foo', prop2: 'bar'});  // 클래스
        // var o = { prop1: 'foo', prop2: 'bar'};

    /*
        Q. 다음을 클래스로 정의해보세요

        클래스 이름: Beer

        인스턴스의 속성: name, origin(원산지)

        클래스 속성 멤버
        history: B.C 3000

        클래스 메서드 멤버
        recipe(제조법):  보리, 홉, 효모, 물 등

        static 속성
        caution(경고): 지나친 음주는 돈이 많이 듭니다.
    */

    class Beer {

        // 인스턴스의 속성 생성 (this)
        constructor(name, origin){
            this.name = name;
            this.origin = origin;
        }

        // 속성 멤버
        history = "B.C 3000";
        
        // 메서드 멤버
        recipe (){
            return "보리, 홉, 효모, 물 등";
        }

        // static 속성
        static caution = "지나친 음주는 돈이 많이 듭니다";
    }

    // Beer의 인스턴스          
        var irishBeer = new Beer('기네스', '아일랜드');     // (name, origin)
        var dutchBeer = new Beer('하이네켄', '네덜란드');   //  class 에 적용시킨다

        console.log(irishBeer);                            
        console.log(dutchBeer); 

        // 메서드
        console.log(irishBeer.recipe());    // 추가된 irishBeer의 recipe 출력

        // static 속성
        console.log(Beer.caution);          // Beer클래스의 coution을 출력
        console.log("\n");

/* ======================================================================================= */        
    
/*
    10. 에러와 에러처리

        1) 에러개념
        2) 에러처리
        3) 에러 종류
        4) 커스텀 에러
*/

    /*
        1) 에러개념
        에러는 프로그램의 실행을 중단시킨다
        에러는 처리가 되어야 한다
    */

        // console.log(foof)
        // ReferenceError: foo is not defined.

        // ReferenceError: name
        // foo is not defined: message
        // at Object...: stack          // 에러에 대한 자세란 설명 (위치

        // > app crashed(실행 중단)     // 서버가 다운

    /*
        2) 에러 처리

        try/ catch
    */

        // try {

        //     // 코드...

        //     console.log(foof);      // 에러가 발생하면 catch에서 처리한다
        // }
        // catch(error){
        //     // 에러 처리
        //     console.log(error);
        // }

    /*
        3) 에러의 종류

            - ReferenceError (참조 에러)
            - SyntaxError (문법 에러)
            - TypeError (타입 에러) 
            - RangeError (범위 에러)
            - URIError (URI 에러)
    */

    // ReferenceError (참조 에러)
    // 존재하지 않는 변수를 참조할 떄 발생한다

        // console.log(x);          
            // ReferenceError

    // SyntaxError (문법 에러)
    // 문법이 잘못되었을 때 발생한다
    // 컴파일 에러를 발생시킨다
    // 에러 처리를 할 수 없다 (직접 수정이 필요하다)

        // console.log(2023));  
            // SyntaxError: Unexpected token ')'
    
    // TypeError (타입 에러)
    // 변수 또는 매개변수가 유효한 타입이 아닐 때 발생한다

        // setInterval(callback, ms)
        // setInterval(null, 1000);
            // TypeError [ERR_INVALID_ARG_TYPE]:
            // The 'callback' argument must be of type function. Received null.
    
    // RangeError (범위 에러)
    // 값이 지정된 범위를 벗어났을 때 발생한다

        // var pi = Math.PI;

        // console.log(pi);

        // console.log(pi.toPrecision(200));   
            // RangeError: 
            // toPrecision() argument must be between 1 and 100

    // URIError (URI 에러)
    // encodeURI 또는 decodeURI 함수가 유효하지 않은 인자를 전달받았을 때 발생한다

        // console.log(decodeURI('%'));
            // URIError:
            // URI malformed

    
    // 4) 커스텀 에러 
        // (데이터베이스 에서 사용자정보와 일치하지 않을때 로그인 등에서 사용)

        try {
        var age_1 = 15;

        console.log('학생:', '아저씨 담배하나 주세요');
            
        // 에러를 발생시켰다
        if (age_1 < 18){
            // throw 커스텀 에러
            throw '미성년자는 담배를 살 수 없습니다'
        }

        // throw 아래 코드는 실행되지 않는다
        console.log('CU직원:', '여기 있습니다');

        } catch (error){
            console.error('실패:', error);
        } finally{
        // 에러 발생 여부와 상관없이 항상 실행된다
            console.log('끝');
        }
/* ======================================================================================= */

/*
    11. 비동기 작업 (Asynchronous operations)

    블로킹을 방지하기 위해 사용된다
    예) 서버에 데이터 요청 등

        1) 동기 작업
        2) 비동기 작업
*/

    // 1) 동기 작업 (Synchronous operation)
    // 호출된 순서대로 코드가 실행된다

        // function f() {5
        //     console.log('작업 1');
        // } 
        // f();
        // console.log('작업 2');

    // 2) 비동기 작업(Asynchronous operation)
    // 빠른것부터 처리된다

        // // 서버에 데이터를 요청하고 받는데 1초가 걸린다고 가정
        // function fetchData(callback){ // 비동기 함수
        //     var data1 = { foo: 'bar'};

        //     // setTimout(callback, ms): ms 뒤에 callvack을 실행한다
        //     setTimeout(function () {
        //         callback(null, data1);
        //     }, 1000);
        // }
        
        // fetchData(function (error1, data1){
        //     if (error1){
        //         return console.error(error1);
        //     }

        //     console.log('서버에서 받은 데이터:', data1);
        // });    // 페치데이터를 호출 파라미터 2개(error1, data1)

        // console.log('다음 작업');
/* ======================================================================================= */

/*
    12. 프로미스

    비동기 작업의 성공 실패 여부와 그 결과를 나타내는 객체
    비동기 작업의 가독성을 향상시키기 위해 사용된다

        1) 프로미스 객체의 구조
        2) 실제 예시
        3) async/await
*/

    /*
        1) 프로미스 객체의 구조

            - 프로미스 인스턴스 생성
                생성자 함수에 두개의 매개변수를 가진 콜백을 전달한다

                첫번째 매개변수(resolve): 비동기 작업이 성공했을 경우 호출한다
                두번째 매개변수(rejected): 비동기 작업이 실패했을 경우 호출한다
            
            - 프로미스의 상태
                fullfilled: 작업의 성공
                rejected: 작업의 실패
                pending: 작업이 끝나기를 기다리는 상태

            - 프로미스 인스턴스의 메서드
                Promise.then(): 성공했을 경우 데이터를 다루는 메서드
                Promise.catch(): 실패했을 경우 에러를 다루는 메서드
                Promise.finally(): 실패/성공 여부와 상관없이 실행되는 코드를 다루는 메서드
    */

            // const promise1 = new Promise(function(res, rej) {
            //     res({ foo: 'bar1'});
            // })
            // console.log(promise1);   //fullfilled

            // const promise1 = new Promise(function (res, rej){
            //     rej({ error: '..'}); // rejected
            // })
            

            // const promise2 = new Promise(function(res, rej){})
            // console.log(promise2); 

            
            // const promise3 = new Promise(function (res, rej){
            //     res({foo: 'bar3'});
            // });

            // promise3
            //     .then(function (value){  // 데이터를 다루는 부분
            //         console.log(value);
            //     })
            //     .catch(function (error2){
            //         console.error(error2);
            //     })
    /*
         2) 실제 사용 예시:
        서버에 데이터 요청
    */ 
            // 서버에 데이터를 요청하는 함수
            // 결과를 프로미스 객체로 리턴한다
            // function fetchData(){
            //     const promise4 = new Promise(function(res, rej){
            //         res({foo: 'bar4'});
            //     })
                
            //     return promise4;
            // }

            // fetchData()
            //     .then((date4) => {
            //         console.log('서버에서 받은 data:', date4);
            //     })
            //     .catch((error4) => {
            //         console.error(error4);
            //     })

            //     console.log('다음 작업');

    /*
        3) async / await

        프로미스가 결과값을 반환할 때가지 기다린다
        프로미스가 가독성을 향상시키디 위한 문법
        try / catch 에서 에러를 처리한다
    */

            // function fetchData() {
            //     const promise5 = new Promise((res, rej) =>{
            //         res({ foo: 'bar5'});
            //     })

            //     return promise5;
            // }

            // f();
            // console.log('다음 작업')

            // async function f(){
            //     try{
            //         // ...

            //         const data5 = await fetchData();

            //         console.log('서버에서 받은 데이터:', data5);

            //     } catch(error5){
            //         console.error(error5)
            //     }
            // }

/*
    13. ES6 문법(2015)
    
    새로운 문법이 많이 나온 버전

        1) let, const
        2) 화살표 삼수
        3) 구조분해할당
        4) 스프레드 연산자
        5) 클래스
        6) 프로미스
        7) 심볼
        8) Array.map()
*/

    /*
        3)-1 구조분해할당 - 배열

        간단한 문법을 사용하여 배열의 아이템을 변수에 할당할 수 있다
    */      
            console.log('\n구조분해할당 - 배열\n');
            var beers = ['기네스', '하이네켄', '버드와이저'];

            var irishBeer = beers[0];
            var dutchBeer = beers[1];
            var americanBeer = beers[2];

            console.log(irishBeer);     // 기네스
            console.log(dutchBeer);     // 하이네켄
            console.log(americanBeer);  // 버드와이저
            console.log('\n');

            // 구조분해할당
            
            var beers = ['기네스', '하이네켄', '버드와이저'];

            var[irishBeer, dutchBeer, americanBeer] = beers; // 인덱스가 필요없다

            console.log(irishBeer);     // 기네스
            console.log(dutchBeer);     // 하이네켄
            console.log(americanBeer);  // 버드와이저
            
         
    /*  
        3)-2 구조분해할당 - 객체
        
        간단한 문법으로 객체의 속성을 변수에 할당할 수 있다
    */
            console.log('\n구조분해할당 - 객체\n');
            var irishBeer = { name: '기네스', origin: '아일랜드', available: false};

            var name = irishBeer.name;
            var origin = irishBeer.origin;
            var available = irishBeer.available;

            // console.log(name, origin, available)
            console.log('맥주이름:', name);
            console.log('원산지:', origin);
            console.log('판매중:', available ? '예' : '아니오');

            var irishBeer = { name: '기네스', origin: '아일랜드', available: false};
            
            // 구조분해할당
            var{irishBeer, dutchBeer, americanBeer} = irishBeer;
            
            console.log(name, origin, available);
            

    /*
        3)-3 구조분해할당 - 매개변수
    */
            console.log('\n구조분해할당 - 매개변수\n');
            var irishBeer1 = { name1: '기네스', origin1: '아일랜드', available1: false};

            function f1(beer1){

                console.log(beer1);  

                var name1 = beer1.name1;
                var origin1 = beer1.origin1;
                var available1 = beer1.available1;

                console.log(name1, origin1, available1);
            }
            f1(irishBeer1);

            var irishBeer2 = { name2: '기네스', origin2: '아일랜드', available2: false};
            
            function f2({name2, origin2, available2}){
                console.log(name2, origin2, available2);
            }
            f2(irishBeer2);
            
    /*
        4)-1 스프레드 연산자 - 배열

        배열의 아이템을 간단하게 복사할 수 있다
        ... 복사할 배열
    */
            console.log('\n스프레드 연산자 - 배열\n');
            var beersd = ['기네스', '하이네켄'];
            var newBeer = '버드와이저'

            var updatedBeers = [...beersd, newBeer];

            console.log(updatedBeers); // [ '기네스', '하이네켄', '버드와이저' ]

            var europeanBeers = ['기네스', '하이네켄'];
            var asianBeers = ['아사히', '클라우드'];

            var worldBeers = [...europeanBeers, ...asianBeers]

            console.log(worldBeers); // [ '기네스', '하이네켄', '아사히', '클라우드' ]

    /*
        4)-2 스프레드 연산자 - 객체

        객체의 속성을 간단하게 복사할 수 있다
        ...복사할 객체
    */
            console.log('\n스프레드 연산자 - 객체\n');
            var irishBeer = {
                name: '기네스',
                origin: '아일랜드',
                avilable: false
            }

            // 기네스가 재입고 되었다
            irishBeer.available = true;

            console.log(irishBeer);

            var updatedIrishBeer = {...irishBeer, available: true};

            console.log(updatedIrishBeer);

    /*
        ES6 문제
    */

        // 1. 구조분해할당

            var asianBeers = ['클라우드', '아사히'];
            // 구조분해할당 문법을 사용해서 각각의 맥주를 변수에 할당해보세요

            // 변수이름
            // koreanBeer(클라우드), japaneseBeer(아사히)

            var [koreanBeer, japaneseBeer]  = asianBeers;

            console.log(koreanBeer);
            console.log(japaneseBeer);

        //2. 스프레드 연산자

            var cat = {
                name: '치즈',
                age: 1,
                home: null,
                sound: function(){
                    return '야옹'
                }
            }

            // 스프레드 연산자를 사용해 치즈의 home을 '삼산동' 으로 업데이트 해보세요
            // 결과는 updatedCat 변수에 할당

            var updatedCat = {...cat, home: '삼산동'};

            // 입양
            console.log(updatedCat);

        


    

            
    
