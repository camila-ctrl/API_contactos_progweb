import { x } from "@xstyled/styled-components";
import ContactCard from "./contact-card";

export default function ContactsList({ contacts }) {
  return (
    <>
      {contacts.length > 0 ? (
        <>
          {contacts.map((contact, index) => (
            <ContactCard
              key={index}
              contact={contact}
              mb={index !== contacts.length - 1 && "2rem"}
            />
          ))}
        </>
      ) : (
        <x.p>No hay contactos</x.p>
      )}
    </>
  );
}
