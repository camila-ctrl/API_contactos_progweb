import {
  defaultTheme,
  ThemeProvider,
  Preflight,
} from "@xstyled/styled-components";
import ContactsList from "./components/contacts/contacts-list";

const theme = {
  ...defaultTheme,
  // Customize your theme here
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <ContactsList />
    </ThemeProvider>
  );
}
