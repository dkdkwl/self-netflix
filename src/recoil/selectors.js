import { selector } from "recoil";
import { currentId,pageState,filterState,filterYearState,filterScoreState,filterIdState,searchQueryTxt } from "./atom";
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


//페이지 유튜브 가져오기
export const getDetailReviewApi = selector({
    key : 'getDetailReviewApi',
    default : {},
    get : async({get})=>{
        const currentUrl = get(currentId);
        let reviewApi = await api.get(`/movie/${currentUrl}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        try {
            let reviewData = await reviewApi.data;
            let reviewDataResults = await reviewApi.data.results;
            return {reviewData,reviewDataResults}
        } catch (error) {
            return console.log("파람스 확인 오류")
        }
    }
});


//관련영화 가져오기
export const getMovieSimilarApi = selector({
    key : 'getMovieSimilarApi',
    default : {},
    get : async({get})=>{
        const currentUrl = get(currentId);
        const similarApi = await api.get(`/movie/${currentUrl}/similar?api_key=${API_KEY}&language=en-US&page=1`)
        const genreApi = await api.get(`/genre/movie/list?api_key=${API_KEY}&language=ko-KR`)
        try {
            let SimilarData = await similarApi.data;
            let genreMovies = genreApi.data;
            return {SimilarData,genreMovies}
        } catch (error) {
            return console.log("파람스 확인 오류")
        }
    }
});


//list page 전체영화 가져오기
export const getMovieListApi = selector({
    key : 'getMovieListApi',
    default : [],
    get : async ({get})=>{
        let currentPage = get(pageState);
        let filterSort = get(filterState).sort;
        let filterYear = get(filterYearState);
        let filterAverage = get(filterScoreState);
        let filterId = get(filterIdState);
        console.log(filterId)
        if(filterId === 0){
            filterId = ``
        }else{
            filterId = `&with_genres=${filterId}`
        }
        console.log("filterId",filterId)
        console.log("페이징 재실행",filterSort);
        console.log(`language=ko-KR&sort_by=${filterSort}&include_adult=false&include_video=false&page=${currentPage}&with_watch_monetization_types=flatrate`)
        let movieListApi = await api.get(`/discover/movie?api_key=${API_KEY}&language=ko-KR&sort_by=${filterSort}&include_adult=false&include_video=false&primary_release_date.gte=${filterYear[0]}&primary_release_date.lte=${filterYear[1]}&page=${currentPage}&vote_average.gte=${filterAverage[0]}&vote_average.lte=${filterAverage[1]}${filterId}&with_watch_monetization_types=flatrate`)
        let genreApi = await api.get(`/genre/movie/list?api_key=${API_KEY}&language=ko-KR`)
        try {
            let movieListData = await movieListApi.data;
            let genreMovies = genreApi.data;
            // console.log("sort 테스트",movieListApi);
            return {movieListData,genreMovies}
        } catch (error) {
            return console.log("파람스 확인 오류")
        }
    }
});

//Search page 전체영화 가져오기
export const getMovieSearchListApi = selector({
    key : 'getMovieSearchListApi',
    default : [],
    get : async ({get})=>{
        let currentPage = get(pageState);
        let queryTxt = get(searchQueryTxt);
        let getMovieSearchList = await api.get(`/search/movie?api_key=${API_KEY}&query=${queryTxt}&page=${currentPage}`);
        let genreApi = await api.get(`/genre/movie/list?api_key=${API_KEY}&language=ko-KR`)
        // console.log(queryTxt)
        try {
            let getMovieData = await getMovieSearchList.data;
            let genreMovies = genreApi.data;
            // console.log(getMovieData);
            return {getMovieData,genreMovies}
        } catch (error) {
            return console.log("파람스 확인 오류")
        }
    }
});