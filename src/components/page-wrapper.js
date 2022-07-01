import { x } from "@xstyled/styled-components";

export default function PageWrapper({ children, ...rest }) {
  return (
    <x.div
      w="100%"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems={{ _: "", lg: "center" }}
      bg="white"
      {...rest}
    >
      <x.div
        w={{ _: "100%", lg: "60%" }}
        h="100%"
        p={{ _: 8, lg: 16 }}
        display="flex"
        flexDirection="column"
        boxShadow={{ lg: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
      >
        {children}
      </x.div>
    </x.div>
  );
}
