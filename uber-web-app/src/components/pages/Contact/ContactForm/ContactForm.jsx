import './ContactForm.scss';
import Button from '../../../part/Button/FormButton';
import { useFormik } from 'formik';

const ContactForm = () => {

	const validate = values => {
		const errors = {}
		if (!values.myName) {
			errors.myName = "Name is required!"
		}
		if (!values.myMessage) {
			errors.myMessage = "Message is required!"
		}
		if (values.myMessage.length > 100) {
			errors.myMessage = "Message is too long!"
		}
		return errors;
	}

	const formik = useFormik({
		initialValues: {
			myName: '',
			myOption: 'Rider',
			myMessage: '',
		},
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
		}
	})

	return (
		<form className="form-container" onSubmit={formik.handleSubmit}>
			<div className="contact"></div>
			<div className="col1">
				<div className="namefield">
					<label>Your name:</label>
					<input
						name="myName"
						placeholder="Enter your name"
						onChange={formik.handleChange}
						value={formik.values.myName}
					>
					</input>
				</div>
				<div className="selectfield">
					<label>Select</label>
					<select defaultValue="1"
						name="myOption"
						onChange={formik.handleChange}
						value={formik.values.myOption}
					>
						<option value="Rider">Rider</option>
						<option value="Driver">Driver</option>
					</select>
				</div>
				{formik.touched.myName && formik.errors.myName ? <div className="erName">{formik.errors.myName}</div> : null}
				{formik.touched.myMessage && formik.errors.myMessage ? <div className="erMes">{formik.errors.myMessage}</div> : null}
			</div>
			<div className="col2">
				<label>Message</label>
				<textarea placeholder="Enter your message"
					name="myMessage"
					onChange={formik.handleChange}
					value={formik.values.myMessage}
				></textarea>

			</div>
			<Button />
		</form>
	)
};

export default ContactForm;