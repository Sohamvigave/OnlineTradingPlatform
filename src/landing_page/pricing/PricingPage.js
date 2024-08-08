// import React from "react";
// import Pricing from "./Pricing";
// import Brokerage from "./Brokerage";
// import Navbar from "../Navbar";
// import Footer from "../Footer";

// function PricingPage() {
//     return (
//         <>
//             <Pricing />
//             <Brokerage />
//         </>
//     );
// }

// export default PricingPage;

import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";

function PricingPage() {
  return (
    <>
      <Hero />
      <OpenAccount />
      <Brokerage />
    </>
  );
}

export default PricingPage;
