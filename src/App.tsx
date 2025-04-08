import { Route, Routes } from "react-router"
import AdminWrapper from "./components/AdminWrapper"
import AdminDashboard from "./pages/admin/Dashboard"
import Plans from "./pages/admin/plan-management/Plans"
import Courses from "./pages/admin/plan-management/Courses"
import SocialMedias from "./pages/admin/site-management/SocialMedias"
import About from "./pages/admin/site-management/About"
import Contact from "./pages/admin/site-management/Contact"
import Webinar from "./pages/admin/webniar-management/Webniar"
import Enrollments from "./pages/admin/webniar-management/Enrollments"
import Trainings from "./pages/admin/webniar-management/Trainings"
import BankDetails from "./pages/admin/user-management/BankDetails"
import KYC from "./pages/admin/user-management/KYC"
import Users from "./pages/admin/user-management/Users"
import Withdrawal from "./pages/admin/payment-management/Withdrawal"
import PaymentHistory from "./pages/admin/payment-management/PaymentHistory"
import Traffics from "./pages/admin/affilates-management/Traffics"
import Affilates from "./pages/admin/affilates-management/Affilates"
import PlanCompletion from "./pages/admin/certificates-management/PlanCompletion"
import WebniarCompletion from "./pages/admin/certificates-management/WebniarCompletion"
import TrainingCompletion from "./pages/admin/certificates-management/TrainingCompletion"

const App = () => {
  return (
    <Routes>
      {/* <Route element={<NavWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hosting/:id" element={<Hosting />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/services/:id" element={<Services />} />
        <Route path="/ssl" element={<SSL />} />
        <Route path="/support/contact" element={<Contact />} />
        <Route path="/support/announcements" element={<Announcements />} />
      </Route> */}

      {/* admin routes */}
      <Route element={<AdminWrapper />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/plans" element={<Plans />} />
        <Route path="/admin/courses" element={<Courses />} />
        <Route path="/admin/social-medias" element={<SocialMedias />} />
        <Route path="/admin/about-us" element={<About />} />
        <Route path="/admin/contact-us" element={<Contact />} />
        <Route path="/admin/webinar" element={<Webinar />} />
        <Route path="/admin/enrollments" element={<Enrollments />} />
        <Route path="/admin/trainings" element={<Trainings />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/kyc" element={<KYC />} />
        <Route path="/admin/bank-details" element={<BankDetails />} />
        <Route path="/admin/withdrawal-requests" element={<Withdrawal />} />
        <Route path="/admin/payment-history" element={<PaymentHistory />} />
        <Route path="/admin/affilates" element={<Affilates />} />
        <Route path="/admin/traffics" element={<Traffics />} />
        <Route path="/admin/plan-completion" element={<PlanCompletion />} />
        <Route path="/admin/webinar-completion" element={<WebniarCompletion />} />
        <Route path="/admin/training-completion" element={<TrainingCompletion />} />
      </Route>
    </Routes>
  )
}

export default App