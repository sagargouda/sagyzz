import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-form">
            <div className="contact-form__header">
                <h2 id="formTitle">Contact Us</h2>
                <p id="formSubtitle"> leave us a message:</p>
            </div>

            <div className="contact-form__row">
                <div className="contact-form__column">
                    <label htmlFor="firstName" id="firstNameLabel">First Name</label>
                    <input type="text" id="firstNameInput" placeholder="Your name.."/>
                </div>

                <div className="contact-form__column">
                    <label htmlFor="subject" id="subjectLabel">Subject</label>
                    <input type="text" id="subjectInput" placeholder="Subject.."/>
                </div>
            </div>

            <div className="contact-form__row">
                <div className="contact-form__column">
                    <label htmlFor="message" id="messageLabel">Message</label>
                    <textarea id="messageTextarea" placeholder="Write something..."></textarea>
                </div>
            </div>

            <div className="contact-form__row">
                <div className="contact-form__column">
                    <input type="submit" value="Submit" id="submitButton"/>
                </div>
            </div>
        </div>
    );
}
