const getContact = async (id) => {
  const response = await fetch(`http://localhost:4001/api/contacts/${id}`);
  const data = await response.json();

  return data[0];
};

export default getContact;
