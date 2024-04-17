import { Header } from "@/components/header";
import { Home } from "@/pages/home";
import { Utility } from "@/pages/utility";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/utility/:id" element={<Utility />} />

        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
