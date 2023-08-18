/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Signin from "./pages/Signin";

const App = () => {

    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Signin />} />
        </Routes>
    </Router>);
}

export default App;