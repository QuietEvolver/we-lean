import React, { useState } from 'react';
//
const AddUserForm = (props) => {
    const initialFormState = {
        id: null,
        name: '',
        userName: ''
    }
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!user.name || !user.userName) return

                props.addUser(user)
                setUser(initialFormState)
            }}>
            <label>Name</label>
            <input
                type='text'
                name='name'
                value={user.name}
                onChange={handleInputChange} />

            <label>Username</label>
            <input
                type='text'
                name='userName'
                value={user.userName}
                onChange={handleInputChange} />

            <button> Add new user </button>
        </form>
    )
}

export default AddUserForm;

// import React from 'react';
// import PropTypes from 'prop-types';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';

// function ProductForm(props) {
//     const { onLinkClick, onSubmittingForm, buttonText, defaultName, defaultBrand, defaultFlavor, defaultPrice, defaultPints } = props;

//     function handleSubmittingForm(event) {
//         event.preventDefault();
//         onSubmittingForm(event);
//     }

//     return (
//         <React.Fragment>
//             <h1>Add a new kombucha keg:</h1>
//             <Form onSubmit={handleSubmittingForm}>
//                 <Form.Group controlId="name">
//                     <Form.Label>Product Name</Form.Label>
//                     <Form.Control type='text' placeholder='Product Name' defaultValue={defaultName} required />
//                 </Form.Group>
//                 <Form.Group controlId="brand">
//                     <Form.Label>Product Brand</Form.Label>
//                     <Form.Control type='text' placeholder='Brand' defaultValue={defaultBrand} />
//                 </Form.Group>
//                 <Form.Group controlId="flavor">
//                     <Form.Label>Product Flavor</Form.Label>
//                     <Form.Control type='text' placeholder='Flavor' defaultValue={defaultFlavor} />
//                 </Form.Group>
//                 <Form.Group controlId="price">
//                     <Form.Label>Price</Form.Label>
//                     <InputGroup>
//                         <InputGroup.Prepend>
//                             <InputGroup.Text>$</InputGroup.Text>
//                         </InputGroup.Prepend>
//                         <Form.Control type='text' placeholder='0.00' defaultValue={defaultPrice} pattern='^\d+\.\d{2}$' required />
//                     </InputGroup>
//                     <Form.Text className='text-muted'>Format as a decimal (e.g. 49.99 or 150.00)</Form.Text>
//                 </Form.Group>
//                 <Form.Group controlId="pints">
//                     <Form.Label>Pints: 124 to start</Form.Label>
//                     <Form.Text type='text' placeholder='124' defaultValue={defaultPints} />
//                 </Form.Group>
//                 <Button className='mb-3' variant='success' type="submit" size='lg' block>{buttonText}</Button>
//             </Form>
//             <Button className='mb-3' variant='secondary' type='button' size='lg' block onClick={() => onLinkClick("index")}>Back To Index</Button>
//         </React.Fragment>
//     )
// }

// ProductForm.propTypes = {
//     onLinkClick: PropTypes.func.isRequired,
//     onSubmittingForm: PropTypes.func.isRequired,
//     buttonText: PropTypes.string.isRequired,
//     defaultName: PropTypes.string,
//     defaultBrand: PropTypes.string,
//     defaultFlavor: PropTypes.string,
//     defaultPrice: PropTypes.string,
//     defaultPints: PropTypes.number,
//     defaultDescription: PropTypes.string
// }

// export default ProductForm;