const Contact = () => {
    return (
        <section className="form-section" id="contact">
            <h1 className="title">Contact Me</h1>
            <div className="form-bloc">
                <form>
                    <div className="contact-info">
                        <input type="text" className="form__input" placeholder=" " />
                        <label htmlFor="" className="form__label">your name</label>
                    </div>
                    <div className="contact-info">
                        <input type="text" className="form__input" placeholder=" " />
                        <label htmlFor="" className="form__label">your email</label>
                    </div>
                    <div className="subject">
                        <input type="text" className="form__input" placeholder=" " />
                        <label htmlFor="" className="form__label">object</label>
                    </div>
                    <div className="contact-msg">
                        <textarea className="form__textarea" placeholder=" "></textarea>
                        <label htmlFor="" className="form__label1">message</label>
                    </div>
                    <button type="submit" value="Send" className="send-btn" >
                        <img src="../assets/icons/paper_plane_28px.png" alt="Send" />
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;