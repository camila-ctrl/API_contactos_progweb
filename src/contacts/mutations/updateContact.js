const updateContact = async (id, contact) => {
  try {
    const response = await fetch(`http://localhost:4001/api/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export default updateContact;
