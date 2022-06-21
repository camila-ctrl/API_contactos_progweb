import { x } from "@xstyled/styled-components";

export default function PageWrapper({ children, ...rest }) {
  return (
    <x.div
      w="100%"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="white"
      {...rest}
    >
      {children}
    </x.div>
  );
}
