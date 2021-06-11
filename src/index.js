import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/DMSerifDisplay-Regular.ttf';
import './assets/fonts/Monoton-Regular.ttf';
import './assets/fonts/RobotoCondensed-Bold.ttf';
import './assets/fonts/Roboto-Regular.ttf';
import './assets/fonts/Roboto-Bold.ttf';
// import WebFont from 'webfontloader';



import {createStore, applyMiddleware,compose,combineReducers} from 'redux';
import {Provider} from 'react-redux';

import searchResultReducer from './components/store/reducers/searchResults';
import nominatedMoviesReducer from './components/store/reducers/nominatedMovies'
import thunk from 'redux-thunk';

// WebFont.load({
//   google: {
//     families: ['Monoton:400','DM Serif Display: 400','Roboto: 400, 700','RobotoCondensed: 700', 'sans-serif']
//   }
// });
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const rootReducer = combineReducers({
                                      searchResults: searchResultReducer,
                                      nominatedMovies:nominatedMoviesReducer,
  
                                    }) 
const store = createStore(rootReducer, applyMiddleware(thunk))
// composeEnhancers(applyMiddleware(thunk))
// applyMiddleware(thunk)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
