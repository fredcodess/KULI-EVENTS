import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import BookingFormPage from "./pages/BookingFormPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="bookingform" element={<BookingFormPage />} />
      <Route path="contact" element={<ContactUsPage />} />
      <Route path="about-us" element={<AboutPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
