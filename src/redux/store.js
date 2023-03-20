import { createStore } from "redux";

const initialState = {
    likes: 0
}

const reduser = (state = initialState, action) => {
    console.log('reduser > ', action);

    return state;
}

const store = createStore(reduser)

export default store;