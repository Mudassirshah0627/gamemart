import About from "@/components/about";
import AptechMedia from "@/components/apetch-media";
import BayraMeta from "@/components/bayra-meta";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import OurGame from "@/components/our-game";
import RecentlyAddedActions from "@/components/recently-added-actions";
import RecentlyAddedGames from "@/components/recently-added-game";
import Social from "@/components/social";
import { memo } from "react";

const Home = memo(function Home() {
  return (
    <div className="bg-black-color text-secondary pb-12 px-3 sm:px-12">
      <Hero />
      <About />
      <BayraMeta />
      <AptechMedia />
      <OurGame />
      <RecentlyAddedGames />
      <RecentlyAddedActions />
      <ContactUs />
      <Social />
      <Footer />
    </div>
  );
});

export default Home;
