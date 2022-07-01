import { x } from "@xstyled/styled-components";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getContact from "../../contacts/queries/getContact";
import newContact from "../../contacts/mutations/createContact";
import updateContact from "../../contacts/mutations/updateContact";
import Layout from "../../core/Layout";

export default function ContactForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  useEffect(() => {
    if (id) {
      (async () => {
        setUserData(await getContact(id));
      })();
    }
  }, []);

  return (
    <Layout>
      <x.div px={10} pb={10} textAlign="center">
        <x.h1 fontSize="2rem" fontWeight="600">
          {id ? "Contacto " + userData.nombre : "Crear contacto"}
        </x.h1>
      </x.div>
      <x.form
        display="flex"
        flexDirection="column"
        gap="2rem"
        onSubmit={(e) => e.preventDefault()}
      >
        <x.input
          p={4}
          border={1}
          borderRadius={10}
          outline="none"
          value={userData.nombre}
          type="text"
          placeholder="nombre"
          onChange={(e) =>
            setUserData(({ telefono, email }) => {
              return { nombre: e.target.value, telefono, email };
            })
          }
          required
        />
        <x.input
          p={4}
          border={1}
          borderRadius={10}
          outline="none"
          value={userData.telefono}
          type="number"
          placeholder="telefono"
          onChange={(e) =>
            setUserData(({ nombre, email }) => {
              return { nombre, telefono: e.target.value, email };
            })
          }
        />
        <x.input
          p={4}
          border={1}
          borderRadius={10}
          outline="none"
          value={userData.email || ""}
          type="email"
          placeholder="email"
          onChange={(e) =>
            setUserData(({ nombre, telefono }) => {
              return { nombre, telefono, email: e.target.value };
            })
          }
        />
        <x.button
          p={4}
          borderRadius={10}
          outline="none"
          type="sumbit"
          onClick={async () => {
            id ? await updateContact(id, userData) : await newContact(userData);
            navigate("/");
          }}
          disabled={!userData.nombre}
        >
          Enviar
        </x.button>
      </x.form>
    </Layout>
  );
}
