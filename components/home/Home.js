import React from "react";
import Navbar from "../header/navbar/navbar";
import Hero from "../Hero";
import Testimonials from "../Testimonials";
import PricingComponent from "../Pricing";
import FAQSection from "../FAQ";
import AtAGlanceSection from "../moyyn-sections";
import FooterStc from "../shared/Footer/footer/Footerstc";
import SignupBanner from "../SignupBanner/SignupBanner";

function Home() {
  return <nav>
    <Navbar/>
    <Hero/>
    <AtAGlanceSection />
    <Testimonials />
    <PricingComponent />
    <FAQSection />
    <SignupBanner/>
    <FooterStc/>
  </nav>;
}

export default Home;
