const getContacts = async () => {
  const response = await fetch("http://localhost:4001/api/contacts");
  const data = await response.json();

  return data;
};

export default getContacts;
