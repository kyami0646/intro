import { Route, Routes } from "react-router-dom";
import { memo, VFC } from "react";

import { Home } from "../components/pages/home";
import { About } from "../components/pages/about";
import { Works } from "../components/pages/works";
import { Page404 } from "../components/pages/page404";
export const Router: VFC =memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/works" element={<Works />}/>
            <Route path="*" element={<Page404 />}/>
        </Routes>
    )
})