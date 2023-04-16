import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "./ui/containers/App";
import {Provider} from "react-redux";
import {store} from "./engine/app/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>);