import { useState, useEffect } from "react";
import ContactList from "./componets/ContactList";
import SelectedContact from "./componets/SelectedContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContactId, setSelectedContactId] = useState(null);
  console.log("Contacts:", contacts);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error("There was an error fetching contacts", error);
      }
    };
    fetchContacts();
  }, []);
  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList
          contacts={contacts}
          setSelectedContactId={setSelectedContactId}
        />
      )}
    </>
  );
};

export default App;
