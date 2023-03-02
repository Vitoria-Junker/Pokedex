import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './pages/home/home';
import Poke from './pages/poke/poke';
import Search from "./pages/search/search";

const Router = () => {
   return(
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Pokemon/:id" element= {<Poke/>}/>
           <Route path="/Search" element= {<Search />} />
         </Routes>
       </BrowserRouter>
   )
}

export default Router;