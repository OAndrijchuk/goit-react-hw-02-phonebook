import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'

const userSchema = yup.object().shape({
    name: yup.string()
        .min(2, 'To short name!')
        .max(24, 'To long name!')
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Невірний формат імені')
        .trim('Пробіли видалено')
        .required('Поле обов’язкове для заповнення'),
    number: yup.string()
        .min(7, 'To short phone!')
        .max(18, 'To long phone!')
        .matches(/\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, 'Невірний формат номера телефону')
        .trim('Пробіли видалено')
        .required('Поле обов’язкове для заповнення')

});

const initialValues = {
    name: '',
    number: '',
}

export const SimpleForm = ({onAddContact}) => {
    const onSubmit = (values, { resetForm }) => {
        const trimValues = {};
        for (let key in values) {
            trimValues[key] = values[key].trim();
        }
        onAddContact(trimValues);
        resetForm();
}

    return (
    <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={userSchema}>
        <Form autoComplete="on">
            <label htmlFor="userName">Name</label>
            <Field
                id="userName"
                type="text"
                name="name"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder='Jone Smit'
                    // placeholder="Введите что-нибудь!"
                />
            <ErrorMessage component="span" name="name" />
            <label htmlFor="userPhone">Number</label>
            <Field
                id="userPhone"
                type="tel"
                name="number"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    placeholder='+380-55-555-55-55'
                />
            <ErrorMessage component="span" name="number" />
            <button type="submit">Add contact</button>
        </Form>
    </Formik>
    )
}