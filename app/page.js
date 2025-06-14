import Image from "next/image";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import ProductsPage from "./Component/Product";

export default function Base() {
  return (
    <div>
      <Navbar />
      <Home />
      <ProductsPage />
      <About />
      <Contact />
    </div>
  );
}
