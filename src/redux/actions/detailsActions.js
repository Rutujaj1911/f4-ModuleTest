import { ADD_CARD_TO_DETAILS } from "./actionTypes.js";


export const addToDetails = (obj) => ({
    type: ADD_CARD_TO_DETAILS,
    payload: obj
})