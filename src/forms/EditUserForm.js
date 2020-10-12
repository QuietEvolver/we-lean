import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {

    const [user, setUser] = useState(props.currentUser)

    useEffect(
        () => {
            setUser(props.currentUser)
        },
        [props]
    ) //able to skip effect if there is no change on re-renders of [props] 


    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }


    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()

                props.updateUser(user.id, user)
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

            <button> Update user </button>
            <button onClick={() => props.setEditing(false)}
                className="button muted-button"
            >
                cancel
            </button>
        </form>
    )
}

export default EditUserForm;