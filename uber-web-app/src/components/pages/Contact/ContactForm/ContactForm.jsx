import { Component } from "react";
import './ContactForm.scss';


class ContactForm extends Component {
	render() {
		return (
			<form action="" className="form-container">
				<div className="contact"></div>
				<div className="col1">
					<div className="namefield">
						<label>Your name:</label>
						<input placeholder="Enter your name"></input>
					</div>
					<div className="selectfield">
						<label>Select</label>
						<select defaultValue="1">
							<option value="Rider">Rider</option>
							<option value="Driver">Driver</option>
						</select>
					</div>
				</div>
				<div className="col2">
					<label>Message</label>
					<textarea placeholder="Enter your message"></textarea>
				</div>
			</form>
		)
	};
}

export default ContactForm;