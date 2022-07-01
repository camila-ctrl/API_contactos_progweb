import { x } from "@xstyled/styled-components";

export default function FullScreenLoader({ ...rest }) {
  return (
    <x.div
      position="fixed"
      top="0px"
      left="0px"
      zIndex="10000"
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="rgba(0,0,0,0.6)"
      {...rest}
    >
      <x.span color="white" fontSize="2rem">
        Loading...
      </x.span>
    </x.div>
  );
}
