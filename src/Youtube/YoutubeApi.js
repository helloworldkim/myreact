import axios from 'axios';

const MYKEY='AIzaSyAWrr2rDhKy1Rt0yKNc3wjtyt-Zq53Ljmg';
//해당결과 자체를 반환
//https://www.googleapis.com/youtube/v3/search?key=AIzaSyAWrr2rDhKy1Rt0yKNc3wjtyt-Zq53Ljmg 로 get방식접근하면 결과 json으로 받음
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAWrr2rDhKy1Rt0yKNc3wjtyt-Zq53Ljmg&part=snippet&q=%EA%B2%A8%EC%9A%B8%EC%99%95%EA%B5%AD part=snippet q=검색단어
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet', 
        key:MYKEY,          //키
        maxResults:5        //검색결과 갯수
    }
})
