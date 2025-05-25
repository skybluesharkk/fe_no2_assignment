import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dex from '../pages/Dex'
import Detail from '../pages/Detail'
import PokemonProvider from '../context/PokemonProvider'

const Router = () => {
    return (
        <BrowserRouter>
            <PokemonProvider>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="Dex" element={<Dex />}></Route>
                    <Route path="detail" element={<Detail />} />
                </Routes>
            </PokemonProvider>
        </BrowserRouter>
    )
}

export default Router
