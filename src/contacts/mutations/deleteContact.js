const delteContact = async (id) => {
  try {
    const response = await fetch(`http://localhost:4001/api/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export default delteContact;
