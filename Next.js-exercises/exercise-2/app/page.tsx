
import ProductPage from "./products/page";
import Client from "./products/Client";
import Time from "./products/Time";
import About from "./products/About";
import { Suspense } from "react";
import SlowComponent from "./components/SlowComponent";

export default function Home() {
  return (
  <div>
    <ProductPage/>
    <Client/>
    <Time/>
    <About/>
    <Suspense fallback={<p>Loading...</p>}>
      <SlowComponent/>
    </Suspense>
  </div>
  );
}
