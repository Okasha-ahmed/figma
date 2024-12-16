import Categories from "./components/categories";
//import CompanyLogo from "./components/companyLogo";

import Hero from "./components/hero";
import HotProduct from "./components/hotproduct";
//import OurProduct from "./components/ourProduct";

export default function Home() {
  return (
    <>
      <Hero />
     
      <Categories />
      <HotProduct />
      
    </>
  );
}