import Hero from "../component/Hero";
import PopularSales from "./PopularSales";
import TopRated from "./TopRated";
import TopStories from "./TopStories";

function Home() {
  return (
    <div>
      <Hero />
      <PopularSales />
      <TopRated />
      <TopStories />
    </div>
  );
}

export default Home;
