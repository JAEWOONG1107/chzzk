$(document).ready(function(){
    // 메뉴 슬라이드 토글
    $('nav .contUl span, nav .contUl svg').click(function(){
        $('nav .contUl .chn').slideToggle(400);
        $("nav .contUl svg").toggleClass("active");
    });

    // 메인 방송화면 썸네일 전환
    $('.streamThumbnail li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    // 햄버거 메뉴 네비게이션 토글
    $('.menu').click(function(){

        $('nav').toggleClass('smallNav');
        $('.topUl li').toggleClass('smallLi');
        $('.topUl svg, .link svg').toggleClass('smallSvg');
        $('.topUl a span, .link a span').toggleClass('smallText');
        $('.topUl a, .link a').toggleClass('smallA');
        $('.streamMImg').toggleClass('centerImg');
        $('.streamContent, .viewers').toggle();
        $('.contUl svg').toggle();
        $('main').toggleClass('bigMain');
    });
})

let streamScreen = document.querySelector('.streamBox > img');
let streamThumnail = document.querySelectorAll('.streamThumbnail li');
let streamViewer = document.querySelector('.viewersM');
let streamName = document.querySelector('.bName');
let streamerName = document.querySelector('.mName');
let streamCategory = document.querySelector('.bCategory');
const viewers = ['1,111', '2,222', '3,333', '4,444']; 
const mName = ['닉네임 - 1', '닉네임 - 2', '닉네임 - 3', '닉네임 - 4'];
const category = ['카테고리 - 1', '카테고리 - 2', '카테고리 - 3', '카테고리 - 4'];

for(let i=0; i<streamThumnail.length; i++) {
    streamThumnail[i].addEventListener('click', function() {
        streamScreen.setAttribute('src', `img/bg${i+1}.png`);
        streamViewer.innerHTML = `${viewers[i]}`;
        streamName.innerHTML = "방송 제목 - " + (i + 1);
        streamerName.innerText = `${mName[i]}`;
        streamCategory.innerText = `${category[i]}`;
    });
}

let menu = document.querySelector('.menu');
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');
let span4 = document.querySelector('.span4');
let span5 = document.querySelector('.span5');
let span6 = document.querySelector('.span6');


menu.addEventListener('click', function(){
    if(span1.innerHTML == '전체 라이브') {
        span1.innerHTML = "전체<br>라이브";
        span2.innerHTML = "즐겨찾기<br>채널";
        span3.innerHTML = "추천<br>채널";
        span4.innerHTML = "서비스<br>바로가기";
        span5.innerHTML = "네이버<br>게임";
        span6.innerHTML = "치지직<br>라운지";
    }
    else {
        span1.innerHTML = '전체 라이브';
        span2.innerHTML = '&nbsp;&nbsp;&nbsp;즐겨찾기 채널';
        span3.innerHTML = "&nbsp;&nbsp;&nbsp;추천 채널";
        span4.innerHTML = "&nbsp;&nbsp;&nbsp;서비스 바로가기";
        span5.innerHTML = "네이버 게임";
        span6.innerHTML = "치지직 라운지";
    }
})
