import React from "react";
import Nav from "../shared/Header/Navigation";
import Hero from "../Hero";
import Testimonials from "../Testimonials";
import PricingComponent from "../Pricing";
import FAQSection from "../FAQ";
import AtAGlanceSection from "../moyyn-sections";
import FooterStc from "../shared/Footer/footer/Footerstc";
import SignupBanner from "../SignupBanner/SignupBanner";

function Home() {
  return <nav>
    <Nav/>
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
