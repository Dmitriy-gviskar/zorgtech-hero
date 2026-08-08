import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import SolutionsSection from '../components/SolutionsSection';
import BenefitsSection from '../components/BenefitsSection';
import ProjectsSection from '../components/ProjectsSection';
import CtaSection from '../components/CtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <main>
        <ProductsSection />
        <SolutionsSection />
        <BenefitsSection />
        <ProjectsSection />
        <CtaSection />
      </main>
    </>
  );
}