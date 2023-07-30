export const Contact = ({contact, removeContact}) => {
    return (
        <li>{contact.name} {contact.number}   
            <button type="button" onClick={()=>removeContact(contact.id)}>Delete</button>
        </li>
    )
}