import PropTypes from 'prop-types';
import shortid from 'shortid';

function SearchContact({ value, SearchContact }) {
    const id = shortid.generate();
    return (
        <div>
            <label htmlFor={id}>Search contact by name</label>
            <input
                type="text"
                name="filter"
                value={value}
                onChange={SearchContact}
                id={id}
            />
        </div>
    );
}

SearchContact.propTypes = {
    value: PropTypes.string.isRequired,
    SearchContact: PropTypes.func.isRequired,
};

export default SearchContact;