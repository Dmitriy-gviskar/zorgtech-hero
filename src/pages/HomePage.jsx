import BackgroundVideo from '../components/BackgroundVideo';
import FooterContent from '../components/FooterContent';
import ProductsSection from '../components/ProductsSection';
import SolutionsSection from '../components/SolutionsSection';
import BenefitsSection from '../components/BenefitsSection';
import ProjectsSection from '../components/ProjectsSection';
import CtaSection from '../components/CtaSection';

export default function HomePage() {
  return (
    <>
      <div className="page">
        <BackgroundVideo />
        <FooterContent />
      </div>

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
