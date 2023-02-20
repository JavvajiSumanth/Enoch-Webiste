import { Routes, Route, Navigate } from "react-router-dom";
import Properties from "../components/Properties";
import MainLayout from "../layout/MainLayout";
import Home from "../views/Home";
import Pricing from "../views/Pricing";
import PromisesView from "../views/PromisesView";
import WhatWeDo from "../views/WhatWeDo";

// todo lazy loading

// import { lazy } from "react";
// import Loadable from "../Helpers/Loadable";
// const Component = Loadable(lazy(() => import("../views/Component")));

export default function TheRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/properties" element={<Properties />} />
        <Route exact path="/promises" element={<PromisesView />} />
        <Route exact path="/what-we-do" element={<WhatWeDo />} />
        <Route exact path="/pricing" element={<Pricing />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
