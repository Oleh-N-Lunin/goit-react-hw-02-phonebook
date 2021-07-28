import { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    InputValues = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    addContact = e => {
        e.preventDefault();
        const checkName = this.props.contactList({ name: this.state.name });
        if (checkName) {
            alert("You already have this contact name!!");
            return;
        }

        this.props.onSubmit({
            id: shortid.generate(),
            name: this.state.name,
            number: this.state.number,
        });

        this.resetInputValues();
    };

    resetInputValues = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const idName = shortid.generate();
        const idNumber = shortid.generate();

        return (
            <form onSubmit={this.addContact}>
                <label htmlFor={idName}>Name</label>
                <input
                    id={idName}
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.InputValues}
                    autoComplete="off"
                ></input>
                <label>Phone number</label>
                <input
                    id={idNumber}
                    type="tel"
                    pattern=""
                    name="number"
                    value={this.state.number}
                    onChange={this.InputValues}
                    autoComplete="off"
                ></input>
                <button type="submit">Add contact</button>
            </form>
        );
    }
}

export default Form;