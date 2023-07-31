import { Component } from "react"
import { Section } from "./Section/Section"
import { SimpleForm } from "./Form/SimpleForm";
import { nanoid } from 'nanoid'
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { Container, GeneralTitle } from "./App.styled";

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
    console.log(contact)
    const newContacts = this.state.contacts.slice(0);
    const contactsIsInclud = newContacts.find(el => el.name === contact.name)

    if (contactsIsInclud) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    newContacts.push(contact)
    this.setState({
      contacts: newContacts,
    }) 
  }

  onCheangedFilter = (event) => {
    this.setState((preState) => ({ ...preState, [event.target.name]: event.target.value, }))
  }
  
  removeContact = (id) => {
    this.setState((preState) => ({ contacts: preState.contacts.filter(contact => contact.id !== id) }))
  }

  render() {
    const{filter, contacts}=this.state
    return (
      <Container>
        <GeneralTitle>Phonebook</GeneralTitle>
        <Section >
          <SimpleForm onAddContact={this.onAddContact}/>
        </Section>

        <Section title="Find contacts by name">
          <Filter onCheangedFilter={this.onCheangedFilter} filterValue={filter} />
        </Section>

        <Section title="Contacts">
          <ContactsList
            contacts={contacts}
            filter={filter}
            removeContact={this.removeContact} />
        </Section>
        </Container>
    );}
  
};
