import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "../pages/Main";
import Character from "../pages/Character";

export function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/character/:id" element={<Character/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}