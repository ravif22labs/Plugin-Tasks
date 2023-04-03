import { useState } from "preact/hooks";
import Carousel from "./components/Carousel";

export function App() {
  return (
    <div className="bg-black h-screen">
      <p className="text-lg font-bold">Vite + Preact + TS + Tailwind</p>
      <Carousel />
    </div>
  );
}
