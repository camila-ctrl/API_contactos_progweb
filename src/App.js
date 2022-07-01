import {
  defaultTheme,
  ThemeProvider,
  Preflight,
} from "@xstyled/styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Page404 from "./pages/404";
import ContactForm from "./components/contacts/contact-form";

const theme = {
  ...defaultTheme,
  // Customize your theme here
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts/:id" element={<ContactForm />} />
          <Route path="/contacts/new" element={<ContactForm />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
