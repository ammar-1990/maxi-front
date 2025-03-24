import SuspenseComponent from "@/components/SuspensComponent";
import Container from "../_components/Container";
import HeroSection from "../_components/HeroSection";
import FeaturedPosts from "../_components/FeaturedPosts";
import TrendingPosts from "../_components/TrendingPosts";

export default function Home() {
  return (
    <div className="p-3">
      <Container>
        <HeroSection />
        <div className="mt-12">
          <SuspenseComponent>
            <FeaturedPosts />
          </SuspenseComponent>
        </div>
        <div className="mt-12">
          <SuspenseComponent>
            <TrendingPosts />
          </SuspenseComponent>
        </div>
      </Container>
    </div>
  );
}
