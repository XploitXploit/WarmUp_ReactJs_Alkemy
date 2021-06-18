import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userLoginReducer } from './Reducers/userReducer';
import {postListReducer, postCreateReducer, postDeleteReducer, postDetailReducer} from './Reducers/postsReducer'




const reducer = combineReducers({ 
    userLogin: userLoginReducer,
    postList: postListReducer,
    postCreated: postCreateReducer,
    postDeleted: postDeleteReducer,
    postDetail: postDetailReducer,

})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
                                JSON.parse(localStorage.getItem('userInfo')) : null                                                        

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))


export default store;