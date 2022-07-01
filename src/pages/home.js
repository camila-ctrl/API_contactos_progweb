import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getContacts from "../contacts/queries/getContacts";
import FloatingButton from "../components/buttons/floating-button";
import ContactsList from "../components/contacts/contacts-list";
import Layout from "../core/Layout";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setContacts(await getContacts());
      setIsLoading(false);
    })();
  }, []);

  return (
    <Layout isLoading={isLoading}>
      <ContactsList contacts={contacts} />
      <Link to="/contacts/new">
        <FloatingButton />
      </Link>
    </Layout>
  );
}
