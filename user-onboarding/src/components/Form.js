import React from 'react';

const Form = (props) => {
    const { values, submit, change, disabled, errors, checked, validate } = props;


    const onChange = (evt) => {  
        const { name, value, checked, type } = evt.target;
        const realValue = type === 'checkbox' ? checked : value;
        validate(name, value);
        change(name, realValue);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }


    return (
        <form onSubmit={onSubmit}>
            <h2>Add user</h2>
            <p>{errors.username}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.terms}</p>
            <label> Name 
                <input
                    name='username'
                    value={values.username}
                    type='text'
                    onChange={onChange}
                />
            </label>
            <label> Email 
                <input
                    name='email'
                    value={values.email}
                    type='email'
                    onChange={onChange}
                />
            </label>
            <label> Password 
                <input
                    name='password'
                    value={values.password}
                    type='password'
                    onChange={onChange}
                />
            </label>
            <label> Terms of Service 
                <input
                    name='terms'
                    checked={checked}
                    type='checkbox'
                    onChange={onChange}
                />
            </label>
            <button disabled={disabled}>Submit</button>
        </form>
    )
}

export default Form;