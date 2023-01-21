import { selector } from "recoil";
import { currentId } from "./atom";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const api = axios.create({
	baseURL:'https://api.themoviedb.org/3/'
});

// 메인슬라이드 인기,탑랭크,개봉예정작,장르 가져오기
export const getMoviesAPi = selector({
    key : "moviesApi",
    default : "",
    get : async ({get}) => {
        const popularApi = await api.get(`/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`)
        const topRatedApi = await api.get(`/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`)
        const upComingApi = await api.get(`/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`)
        const genreApi = await api.get(`/genre/movie/list?api_key=${API_KEY}&language=ko-KR`)
        let [popularMovies,topRatedMovies,upComingMovies,genreMovies] = await Promise.all([popularApi.data.results,topRatedApi.data.results,upComingApi.data.results,genreApi.data])
        try {
            // console.log(popularMovies,topRatedMovies,upComingMovies,genreMovies)
            return {popularMovies,topRatedMovies,upComingMovies,genreMovies}
        } catch (error) {
            // ex.request 서버에 성공적으로 요청했을 때 설정됨
            // ex.response 서버에 성공적으로 응답을 받았을 때 설정됨
            return console.log("메인슬라이드 에러입니다.")
        }
    }
})

// 메인비주얼 랜덤으로 개봉예정작 나오게하기
export const mainVisualTop = selector({
    key : "mainVisualTop",
    default : [],
    get : async ({get})=>{
        const mainVisualList = await api.get(`/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`)
        try {
            let mainVisualData = mainVisualList.data.results;
            let sPick = Math.floor(Math.random() * mainVisualData.length);
            let mainVisualPick = mainVisualData[sPick];
            return {mainVisualPick}
        } catch (error) {
            return console.log("메인비주얼 에러입니다.")
        }
    }
})

//현재 보고 있는 페이지 정보 가져오기
export const moviesParms = selector({
    key : 'moviesParms',
    default : {},
    get : async({get})=>{
        const currentUrl = get(currentId);
        const subViewApi = await api.get(`/movie/${currentUrl}?api_key=${API_KEY}&language=ko-KR`)
        const genreApi = await api.get(`/genre/movie/list?api_key=${API_KEY}&language=ko-KR`)
        let [subViewData,viewGenreData] = await Promise.all([subViewApi.data,genreApi.data])
        try {
            return {subViewData,viewGenreData}
        } catch (error) {
            return console.log("파람스 확인 오류")
        }
    }
});

//페이지 유튜브 가져오기
export const getYoutubeApi = selector({
    key : 'getYoutubeApi',
    default : {},
    get : async({get})=>{
        const currentUrl = get(currentId);
        let youtubeApi = await api.get(`/movie/${currentUrl}/videos?api_key=${API_KEY}&language=en-US`)
        try {
            let youtubeData = await youtubeApi.data;
            return {youtubeData}
        } catch (error) {
            return console.log("파람스 확인 오류")
        }
    }
});

