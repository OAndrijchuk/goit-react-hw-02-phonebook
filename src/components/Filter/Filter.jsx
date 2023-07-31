import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ onCheangedFilter, filterValue }) => {
    return (
        <>
            <Input
                type="text"
                name="filter"
                onChange={onCheangedFilter}
                value={filterValue}
            />
        </>
    )
}

Filter.propTypes = {
    filterValue: PropTypes.string.isRequired,
    onCheangedFilter:PropTypes.func.isRequired,
};