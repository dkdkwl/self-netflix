import { atom } from "recoil";

export const currentId = atom({
    key : 'currentId',
    default : [],
});

export const pageState = atom({
    key : 'pageState',
    default : "1",
});

export const filterState = atom({
    key : 'filterState',
    default : {
        sort : "popularity.desc",
        test : "몰라"
    },
});

