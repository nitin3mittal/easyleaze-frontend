import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// ✅ Core Pages
const Home = lazy(() => import('./pages/Home'));
const Listings = lazy(() => import('./pages/Listings'));
const PostPropertyForm = lazy(() => import('./pages/PostPropertyForm'));
const PostRequirementForm = lazy(() => import('./pages/PostRequirementForm'));
const PropertyDetail = lazy(() => import('./pages/PropertyDetail'));

// ✅ Static Info Pages
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const Testimonials = lazy(() => import('./pages/Testimonials'));

// ✅ Tools Pages
const LoanCalculator = lazy(() => import('./pages/LoanCalculator'));
const AreaConvertor = lazy(() => import('./pages/AreaConverter'));
const PriceTrends = lazy(() => import('./pages/PriceTrends'));

// ✅ Other Services
const HomeLoan = lazy(() => import('./pages/HomeLoan'));
const PropertyValuation = lazy(() => import('./pages/PropertyValuation'));
const LoanAgainstProperty = lazy(() => import('./pages/LoanAgainstProperty'));

// ✅ Blog Pages
const BlogsLatest = lazy(() => import('./pages/BlogsLatest'));
const BlogsPolicies = lazy(() => import('./pages/BlogsPolicies'));
const BlogsCity = lazy(() => import('./pages/BlogsCity'));
const BlogsNews = lazy(() => import('./pages/BlogsNews'));

// ✅ Auth and User Dashboard
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

// ✅ Admin Panel
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const AdminApprovals = lazy(() => import('./pages/AdminApprovals'));

// ✅ Residential Pages
const SocietyFlats = lazy(() => import('./pages/SocietyFlats'));
const BuilderFloors = lazy(() => import('./pages/BuilderFloors'));
const IndependentHouses = lazy(() => import('./pages/IndependentHouses'));
const Plots = lazy(() => import('./pages/Plots'));

// ✅ Commercial Pages
const Shops = lazy(() => import('./pages/Shops'));
const Showrooms = lazy(() => import('./pages/Showrooms'));
const Offices = lazy(() => import('./pages/Offices'));
const Warehouses = lazy(() => import('./pages/Warehouses'));
const Factories = lazy(() => import('./pages/Factories'));
const IndustrialBuildings = lazy(() => import('./pages/IndustrialBuildings'));
const IndustrialSheds = lazy(() => import('./pages/IndustrialSheds'));
const Land = lazy(() => import('./pages/Land'));

// ✅ Optional: 404 Not Found Page
const NotFound = () => (
  <div className="text-center py-5">
    <h2>404 - Page Not Found</h2>
    <p>The page you’re looking for does not exist.</p>
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Suspense fallback={<div className="text-center my-5">Loading...</div>}>
        <main id="main-content">
          <Routes>
            {/* ✅ Core Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/submit-property" element={<PostPropertyForm />} />
            <Route path="/post-requirement" element={<PostRequirementForm />} />
            <Route path="/property/:id" element={<PropertyDetail />} />

            {/* ✅ Static Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/testimonials" element={<Testimonials />} />

            {/* ✅ Tools */}
            <Route path="/loan-calculator" element={<LoanCalculator />} />
            <Route path="/area-convertor" element={<AreaConvertor />} />
            <Route path="/price-trends" element={<PriceTrends />} />

            {/* ✅ Other Services */}
            <Route path="/home-loan" element={<HomeLoan />} />
            <Route path="/property-valuation" element={<PropertyValuation />} />
            <Route path="/lap" element={<LoanAgainstProperty />} />

            {/* ✅ Blog Categories */}
            <Route path="/blogs/latest" element={<BlogsLatest />} />
            <Route path="/blogs/policies" element={<BlogsPolicies />} />
            <Route path="/blogs/city" element={<BlogsCity />} />
            <Route path="/blogs/news" element={<BlogsNews />} />

            {/* ✅ Auth & Dashboard */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* ✅ Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/approvals" element={<AdminApprovals />} />

            {/* ✅ Residential Pages */}
            <Route path="/residential/society-flats" element={<SocietyFlats />} />
            <Route path="/residential/builder-floors" element={<BuilderFloors />} />
            <Route path="/residential/independent-houses" element={<IndependentHouses />} />
            <Route path="/residential/plots" element={<Plots />} />

            {/* ✅ Commercial Pages */}
            <Route path="/commercial/shops" element={<Shops />} />
            <Route path="/commercial/showrooms" element={<Showrooms />} />
            <Route path="/commercial/offices" element={<Offices />} />
            <Route path="/commercial/warehouses" element={<Warehouses />} />
            <Route path="/commercial/factories" element={<Factories />} />
            <Route path="/commercial/industrial-buildings" element={<IndustrialBuildings />} />
            <Route path="/commercial/industrial-sheds" element={<IndustrialSheds />} />
            <Route path="/commercial/land" element={<Land />} />

            {/* ✅ Catch-All 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Suspense>

      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;