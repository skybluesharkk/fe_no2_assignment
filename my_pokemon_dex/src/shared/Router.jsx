import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dex from '../pages/Dex'
import Detail from '../pages/Detail'

const Router = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="Dex" element={<Dex />}></Route>
                    <Route path="detail" element={<Detail />} />
                </Routes>
        </BrowserRouter>
    )
}

export default Router
