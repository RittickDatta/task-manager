import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import DeferredTasks from "./pages/DeferredTasks";
import DiscardedTasks from "./pages/DiscardedTasks";
import OngoingTasks from "./pages/OngoingTasks";
import MainLayout from "./layout/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/home" element={<HomePage />} />
      <Route path="/tasks" element={<AllTasks />}>
        <Route path="/tasks/completed" element={<CompletedTasks />} />
        <Route path="/tasks/deferred" element={<DeferredTasks />} />
        <Route path="/tasks/discarded" element={<DiscardedTasks />} />
        <Route path="/tasks/ongoing" element={<OngoingTasks />} />
      </Route>
    </Route>,
  ),
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
