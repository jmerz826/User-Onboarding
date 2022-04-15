import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Need to input username!')
        .min(4, 'Username needs to be at least 4 characters long')
    ,
    email: yup
        .string()
        .email('Must be valid email!')
        .required('email is required')
    ,
    password: yup
        .string()
        .required('need password')
        .min(4, 'password must be at least 4 characters long')
    ,
    terms: yup
        .boolean()
        .oneOf([true], 'Must accept terms of service')
})

export default formSchema;