import Carousel from "../components/home/Carousel";
import Box from "../components/home/Box";
import Package from "../components/home/package";
import { cheeses, clubs, accompaniments } from "../../data";

export default function Home() {
  return (
    <main className="home">
      <Carousel />
      <Box
        title="What's new"
        intro="Discover the tasties cheese of the season."
        cheeses={cheeses.slice(0, 3)}
        cta="Shop now"
      />
      <Box
        title="20 Years of Murray's Cheese Caves"
        intro="Celebrating two decades of unique Cave Aged cheese."
        cheeses={cheeses.slice(3, 6)}
        cta="Learn more"
      />
      <Box
        title="Celebrating Women in Cheese"
        intro="Explore top cheeses from women-run creameries."
        cheeses={cheeses.slice(6, 9)}
        cta="Shop all"
      />
      <Box
        title="Join A Cheese Club"
        intro="The cheesy gift that keeps on delivering"
        cheeses={clubs.slice(0, 3)}
        cta="Shop clubs"
      />
      <Box
        title="A Taste of Ireland & the U.K."
        intro="World-class cheeses, from cheddar to blue and beyond."
        cheeses={cheeses.slice(9, 12)}
        cta="Shop all"
      />
      <Box
        title="Easter Essentials"
        intro="Fill your basket with celebratory sweets."
        cheeses={accompaniments.slice(0, 3)}
        cta="Shop all"
      />
      <Box
        intro="Don't show up empty-handed—bring cheese."
        cheeses={accompaniments.slice(3, 6)}
        cta="Shop all"
      />
      <Box
        intro="Slice into spring with fresh cheeses."
        cheeses={accompaniments.slice(6, 9)}
        cta="Shop all"
      />
      <Package />
    </main>
  );
}
