import { Contact } from "./Contact/Contact"
import PropTypes from 'prop-types';
import { List } from "./ContactList.styled";

export const ContactsList = ({ contacts = [], filter, removeContact }) => {

    const filteredCotacts = contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))

    return <List>
        {filter
            ? filteredCotacts.map(contact => <Contact contact={contact} removeContact={removeContact} key={contact.id}/>)
            :contacts.map(contact => <Contact contact={contact} removeContact={removeContact} key={contact.id}/>)} 
    </List>
}


ContactsList.propTypes = {
    filter: PropTypes.string,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            number: PropTypes.string,
            name: PropTypes.string,
            id: PropTypes.string,
        }),
    ),
    removeContact:PropTypes.func.isRequired,
};