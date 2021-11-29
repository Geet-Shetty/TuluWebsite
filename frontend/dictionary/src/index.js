import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />}>
  //       <Route path="expenses" element={<Expenses />} />
  //       <Route path="invoices" element={<Invoices />}>
  //         <Route
  //           index
  //           element={
  //             <main style={{ padding: "1rem" }}>
  //               <p>Select an invoice</p>
  //             </main>
  //           }
  //         />
  //         <Route path=":invoiceId" element={<Invoice />} />
  //       </Route>
  //       <Route
  //         path="*"
  //         element={
  //           <main style={{ padding: "1rem" }}>
  //             <p>There's nothing here!</p>
  //           </main>
  //         }
  //       />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>,
  <App />,
  document.getElementById("root")
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
