import { Route, Routes } from "react-router"
import AdminWrapper from "./components/AdminWrapper"
import AdminDashboard from "./pages/admin/Dashboard"

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
      </Route>
    </Routes>
  )
}

export default App