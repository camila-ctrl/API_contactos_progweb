const newContact = async (contact) => {
  try {
    const response = await fetch("http://localhost:4001/api/contacts", {
      method: "POST",
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

export default newContact;
