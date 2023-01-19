import { selector } from "recoil";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const api = axios.create({
	baseURL:'https://api.themoviedb.org/3/'
});

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
            return console.log("에러입니다.")
        }
    }
})

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
            return console.log("에러입니다.")
        }
    }
})