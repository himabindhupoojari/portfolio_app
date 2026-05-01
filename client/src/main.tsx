// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import Sidebar from './layouts/sidebar/Sidebar.tsx';
// import Footer from './layouts/footer/Footer.tsx';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <Sidebar/>
//     <section>
//       <App />
//       <Footer />
//     </section>
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@context/ThemeContext";
import Sidebar from "@layouts/sidebar/Sidebar";
import Footer from "@layouts/footer/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Sidebar />
      <App />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);