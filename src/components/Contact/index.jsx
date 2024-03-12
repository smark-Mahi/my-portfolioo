import "./contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="bg-image"></div>
      <div className="contact-content">
        <div className="contact-container">
          <h1 className="contact-title">Contact to Eric</h1>
          <div className="contact-para">
            If you want to contact with Eric, You can write this form. this
            message will send directly to Eric
          </div>
          <div className="contact-form">
            <form action="" className="contact-info">
              <div className="contact-container-wrapper">
                <div className="contact-left">
                  <input type="text" className="name" placeholder="your name" />
                  <input
                    type="text"
                    className="email"
                    placeholder="your email"
                  />
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="message"
                ></textarea>
              </div>
              <button className="submit">Let's Talk</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
