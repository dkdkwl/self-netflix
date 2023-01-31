import { atom } from "recoil";

export const currentId = atom({
    key : 'currentId',
    default : [],
});

export const pageState = atom({
    key : 'pageState',
    default : 1,
});

export const filterState = atom({
    key : 'filterState',
    default : {
        sort : "popularity.desc",
        genres : "",
    },
});

export const filterYearState = atom({
    key : 'filterYearState',
    default : [1940,2023]
});

export const filterScoreState = atom({
    key : 'filterScoreState',
    default : [0,10]
});

export const filterIdState = atom({
    key : 'filterIdState',
    default : 0
});

export const searchQueryTxt = atom({
    key : 'searchQueryTxt',
    default : "슈퍼맨",
});