import { Component } from "react"
import { Section } from "./Section/Section"
import { SimpleForm } from "./Form/SimpleForm";
import { nanoid } from 'nanoid'
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";

export class App extends Component{
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }
  
  onAddContact = (user) => {
    const contact = {
      id: nanoid(),
     ...user
    }
    const newContacts = this.state.contacts.slice(0);
    const contactsIsInclud = newContacts.find(el => el.name === contact.name)

    if (contactsIsInclud) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    newContacts.push(contact)
    this.setState((prevState)=>({
      ...prevState,
      contacts: newContacts,
    })) 
  }
  onCheangedFilter = (event) => {
    this.setState((preState) => {
      const newState = {
        ...preState,
        [event.target.name]: event.target.value,
      }
      return newState;
    })
  }
  removeContact = (id) => {
    console.log(id)
    this.setState((preState) => {
      return {
        ...preState,
        contacts: preState.contacts.filter(contact => contact.id !== id)
      }
    })
}

  render() {
    return (
        <>
        <Section title="Phonebook">
          <SimpleForm
            onAddContact={this.onAddContact}
          />
        </Section>
        <Filter onCheangedFilter={this.onCheangedFilter} filterValue={this.state.filter} />
        <Section title="Contacts">
          <ContactsList
            contacts={this.state.contacts}
            filter={this.state.filter}
            removeContact={this.removeContact} />
        </Section>
        
        </>
    );}
  
};
