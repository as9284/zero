import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ManageAccount } from "./pages/ManageAccount";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ManageAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
