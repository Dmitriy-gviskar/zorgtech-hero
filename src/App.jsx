import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CatalogHub from './pages/CatalogHub';
import CategoryPage from './pages/CategoryPage';
import UniquePage from './pages/UniquePage';
import ProductPage from './pages/ProductPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactsPage from './pages/ContactsPage';
import BlogPage from './pages/BlogPage';
import SupportPage from './pages/SupportPage';
import DeliveryPage from './pages/DeliveryPage';
import AreasPage from './pages/AreasPage';
import PolicyPage from './pages/PolicyPage';
import RentalPage from './pages/RentalPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogHub />} />
          <Route path="/catalog/unique" element={<UniquePage />} />
          <Route path="/catalog/:slug" element={<CategoryPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/rent" element={<RentalPage />} />
          <Route path="/areas" element={<AreasPage />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
