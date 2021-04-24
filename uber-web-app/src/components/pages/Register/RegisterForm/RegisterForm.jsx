import FormButton from '../../../part/Button/FormButton';
import './RegisterForm.scss';
import {Formik, Form } from 'formik';
import TextField from '../Textfield/Textfield';
import * as Yup from 'yup';

export const RegisterForm = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validate = Yup.object({
        phoneNumber: Yup.string().min(9,'At least 9 digits required')
                        .required('Please provide your phone number first!')
    })
    return (
        <Formik
            initialValues = {{
                phoneNumber : '',
            }}
            validationSchema = {validate}
        >
            {formik => (
                <div>
                    <Form>
                        <div className="my-register-form">
                            <h1>Get moving with Uber</h1>
                            <TextField label="+84" name="phoneNumber"></TextField>
                            <div className="terms-control">
                                <input type="checkbox" className="check-box" required></input>
                                <label>Acept Terms and Conditions</label>
                            </div>
                            <div className="buttonclick">
                                <FormButton component='button' type="submit"></FormButton>
                            </div>
                        </div>
                    </Form> 
                </div>
            )}
        </Formik>
    )
};

export default RegisterForm;




