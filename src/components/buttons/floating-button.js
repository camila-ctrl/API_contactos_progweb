import { useState } from "react";
import { x } from "@xstyled/styled-components";

export default function FloatingButton({ children, ...rest }) {
  return (
    <x.button
      w={12}
      h={12}
      position="fixed"
      right="1.5rem"
      bottom="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginBottom="1.5rem"
      bg="#312F2F"
      color="white"
      borderRadius="full"
      outline="none"
      border="none"
      zIndex="100"
      {...rest}
    >
      {children || <x.span>+</x.span>}
    </x.button>
  );
}
