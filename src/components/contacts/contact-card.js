import { x } from "@xstyled/styled-components";
import { useNavigate } from "react-router-dom";
import deleteContact from "../../contacts/mutations/deleteContact";
import FloatingButton from "../../components/buttons/floating-button";

export default function ContactCard({ contact, ...rest }) {
  const navigate = useNavigate();

  return (
    <x.div
      p={8}
      display="flex"
      flexDirection="column"
      gap="1rem"
      bg="#A6D9F7"
      borderRadius={16}
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
      {...rest}
      position="relative"
      cursor="pointer"
      onClick={() => navigate(`/contacts/${contact.id}`)}
    >
      <x.p>Nombre: {contact.nombre}</x.p>
      <x.p>Telefono: {contact.telefono || "No tiene telefono"}</x.p>
      <x.p>Email: {contact.email || "No tiene email"}</x.p>
      <FloatingButton
        position="absolute"
        top={0}
        right={0}
        h={8}
        w={8}
        mt={5}
        mr={5}
        mb={0}
        zIndex="50"
        fontSize="1rem"
        bg="white"
        onClick={async () => {
          await deleteContact(contact.id);
          navigate("/");
        }}
      >
        <x.img src="x.png" w={5} />
      </FloatingButton>
      <x.span
        position="absolute"
        bottom={0}
        right={0}
        mr={5}
        mb={8}
        fontSize="14px"
      >
        Toca para mas detalles
      </x.span>
    </x.div>
  );
}
