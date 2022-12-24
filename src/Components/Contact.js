import emailjs from 'emailjs-com';

const Contact = () => {

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then()
            .catch();
        window.location.reload(false);
    }

    return (
        <section className="form-section" id="contact">
            <h1 className="title">Contact Me</h1>
            <div className="form-bloc">
                <form onSubmit={sendEmail} className="form">
                    <div className="contact-info">
                        <input type="text" className="form__input" placeholder=" " name="name" />
                        <label htmlFor="" className="form__label">your name</label>
                    </div>
                    <div className="contact-info">
                        <input type="text" className="form__input" placeholder=" " name="email" />
                        <label htmlFor="" className="form__label">your email</label>
                    </div>
                    <div className="subject">
                        <input type="text" className="form__input" placeholder=" " name="subject" />
                        <label htmlFor="" className="form__label">subject</label>
                    </div>
                    <div className="contact-msg">
                        <textarea className="form__textarea" placeholder=" " name="message"></textarea>
                        <label htmlFor="" className="form__label1">message</label>
                    </div>
                    <button type="submit" value="Send" className="send-btn" >
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/paper_plane_28px.png`} alt="Send" />
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;