import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Domain } from "../domain";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Domain.Home />} />
            <Route path="/add-user" element={<Domain.AddUser />} />
        </Routes>
    )
}
