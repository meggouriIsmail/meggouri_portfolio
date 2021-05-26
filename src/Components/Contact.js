const Contact = () => {
    return (
        <section class="form-section" id="contact">
            <h1 class="title">Contact Me</h1>
            <div class="form-bloc">
                <form>
                    <div class="contact-info">
                        <input type="text" class="form__input" placeholder=" " />
                        <label for="" class="form__label">your name</label>
                    </div>
                    <div class="contact-info">
                        <input type="text" class="form__input" placeholder=" " />
                        <label for="" class="form__label">your email</label>
                    </div>
                    <div class="subject">
                        <input type="text" class="form__input" placeholder=" " />
                        <label for="" class="form__label">object</label>
                    </div>
                    <div class="contact-msg">
                        <textarea class="form__textarea" placeholder=" "></textarea>
                        <label for="" class="form__label1">message</label>
                    </div>
                    <button type="submit" value="Send" class="send-btn" >
                        <img src="../assets/icons/paper_plane_28px.png" alt="Send" />
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;