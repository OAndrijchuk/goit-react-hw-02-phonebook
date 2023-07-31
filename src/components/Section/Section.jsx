import PropTypes from 'prop-types';
import { NewSection, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
    return (
        <NewSection>
            {title ? <SectionTitle>{title}</SectionTitle> : null}
            {children}
        </NewSection>
    )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};