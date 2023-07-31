import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const NewForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid black;
  padding: 15px;
`;
export const Button = styled.button`
  padding: 7px 15px;
  background-color: lightgray;
  border: 1px solid black;
  width: fit-content;
  align-self: center;
  border-radius: 8px;
  transition: background-color 250ms ease-out;
  &:hover {
    background-color: gray;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const ErrMassage = styled(ErrorMessage)`
  position: absolute;
  color: red;
  width: 150%;
  left: 105%;
  top: 50%;
  transform: translate(0, -50%);
`;
export const FieldNew = styled(Field)`
  padding: 8px;
  margin-left: 15px;
`;
export const Lable = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
