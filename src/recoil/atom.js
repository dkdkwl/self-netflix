import { atom } from "recoil";

export const currentId = atom({
    key : 'currentId',
    default : [],
});

export const pageState = atom({
    key : 'pageState',
    default : "1",
});

