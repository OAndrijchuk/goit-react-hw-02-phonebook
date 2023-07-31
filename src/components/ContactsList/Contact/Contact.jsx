import PropTypes from 'prop-types';
import { Doters, Item } from './Contact.styled';
import { Button } from 'components/Form/SimpleForm.styled';

export const Contact = ({ contact, removeContact }) => {
    return (
        <Item><div>{contact.name}</div><Doters></Doters><div>{contact.number}</div>
            <Button type="button" onClick={()=>removeContact(contact.id)}>Delete</Button>
        </Item>
    )
}

Contact.propTypes = {
    contact:  PropTypes.shape({
            number: PropTypes.string,
            name: PropTypes.string,
            id: PropTypes.string,
    }),
    removeContact:PropTypes.func.isRequired,
};