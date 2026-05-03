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

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './main.scss'
import { ThemeProvider } from "@context/ThemeContext";
import Sidebar from "@layouts/sidebar/Sidebar";
// import Footer from "@layouts/footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Loader from "@components/loader/Loader";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          // style: {
          //   background: "#333",
          //   color: "#fff",
          // },
        }}
      />
      <ThemeProvider>
        <Suspense fallback={<div className="loader"><Loader /></div>}>
          <section className="app">
            {/* <Sidebar />
          <div className="app-container">
            <App />
            <Footer />
          </div> */}

            <Sidebar />

            <div className="main">
              <div className="route-container">
                <div className="content">
                  <App />
                </div>
              </div>

              {/* <Footer /> */}
            </div>
          </section>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);