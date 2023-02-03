import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "common/Header";
import AppRoutes from "Routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <div className="container mx-auto">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
