import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "../pages/Main";
import Information from "../pages/Information";
import {Provider} from "react-redux";
import {store} from "../../engine/init/redux";

export function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/information" element={<Information/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}