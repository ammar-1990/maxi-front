import SuspenseComponent from "@/components/SuspensComponent";
import Container from "../_components/Container";
import HeroSection from "../_components/HeroSection";
import FeaturedPosts from "../_components/FeaturedPosts";
import TrendingPosts from "../_components/TrendingPosts";
import CategoriesFeed from "../_components/CategoriesFeed";

export default function Home() {
  return (
    <div className="p-3">
      <Container>
        <HeroSection />
        <div className="mt-16">
          <SuspenseComponent>
            <CategoriesFeed />
          </SuspenseComponent>
        </div>
        <div className="mt-16">
          <SuspenseComponent>
            <FeaturedPosts />
          </SuspenseComponent>
        </div>
        <div className="mt-16">
          <SuspenseComponent>
            <TrendingPosts />
          </SuspenseComponent>
        </div>
      </Container>
    </div>
  );
}
