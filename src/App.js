import { lazy, Suspense } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Contact, { contactAction } from "./pages/help/Contact";

// layouts
const HelpLayout = lazy(() => import("./layouts/HelpLayout"));
const RootLayout = lazy(() => import("./layouts/RootLayout"));
const CareersLayout = lazy(() => import("./layouts/CareersLayout"));
//lazy loading
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Faq = lazy(() => import("./pages/help/Faq"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CareersError = lazy(() => import("./pages/careers/CareersError"));
const Careers = lazy(() => import("./pages/careers/Careers"));
const CareersDetails = lazy(() => import("./pages/careers/CareersDetails"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} />
        <Route path=":id" element={<CareersDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
