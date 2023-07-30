import { Contact } from "./Contact/Contact"

export const ContactsList = ({ contacts, filter, removeContact }) => {

    const filteredCotacts = contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))

    return <ul>
        {filter
            ? filteredCotacts.map(contact => <Contact contact={contact} removeContact={removeContact} key={contact.id}/>)
            :contacts.map(contact => <Contact contact={contact} removeContact={removeContact} key={contact.id}/>)} 
            {/* :contacts.map(contact => <li key={contact.id}>{contact.name} {contact.number}</li>)}  */}
    </ul>
}