import React, { useState } from "react";

function TeamForm (props) {
    const [ formState, setFormState ] = useState({
        name: '',
        email: '',
        role: '',
    });

    function changeHandler(event) {
        setFormState({...formState, [event.target.name]: event.target.value});
    }
    
    function formSubmitHandler(event) {
        event.preventDefault();

        props.addMember({
            id: Date.now(),
            name: formState.name,
            email: formState.email,
            role: formState.role,
        });
    }

    return(
        <div>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={formState.name} onChange={changeHandler} />

                <label htmlFor="email">Email:</label>
                <input type="text" name="email" value={formState.email} onChange={changeHandler} />

                <label htmlFor="role">Role:</label>
                <input type="text" name="role" value={formState.role} onChange={changeHandler} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TeamForm;