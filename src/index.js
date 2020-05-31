import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from "./redux/state"
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                {/* bind - привязка метода к определенному объекту **.bind(store) - метод ** привязан к store */}
                <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>,
    </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
