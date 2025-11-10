import { Toaster } from "@/components/ui/sonner";
import { VlyToolbar } from "../vly-toolbar-readonly.tsx";
import { InstrumentationProvider } from "@/instrumentation.tsx";
import Home from "@/pages/Home.tsx";
import About from "@/pages/About.tsx";
import Contact from "@/pages/Contact.tsx";
import Catalogs from "@/pages/Catalogs.tsx";
import Samie from "@/pages/Samie.tsx";
import Powerman from "@/pages/Powerman.tsx";
import Samee from "@/pages/Samee.tsx";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import "./index.css";
import NotFound from "./pages/NotFound.tsx";
import "./types/global.d.ts";
import './i18n/config';

function RouteSyncer() {
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage(
      { type: "iframe-route-change", path: location.pathname },
      "*",
    );
  }, [location.pathname]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "navigate") {
        if (event.data.direction === "back") window.history.back();
        if (event.data.direction === "forward") window.history.forward();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VlyToolbar />
    <InstrumentationProvider>
      <BrowserRouter>
        <RouteSyncer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalogs" element={<Catalogs />} />
          <Route path="/brands/samie" element={<Samie />} />
          <Route path="/brands/powerman" element={<Powerman />} />
          <Route path="/brands/samee" element={<Samee />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </InstrumentationProvider>
  </StrictMode>,
);