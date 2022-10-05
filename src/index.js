import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {setUpStore} from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setUpStore();

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
