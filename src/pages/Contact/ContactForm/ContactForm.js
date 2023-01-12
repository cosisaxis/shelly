import React from "react";
import "./ContactForm.css";
import background from '../../../assets/img1.jpg'

const ContactForm = () => {
  return (
    <div className="section">
      <div className="container grid-container contact-content">
      <div>
                <h1 className='heading-secondary'>
                    get in <span>touch</span>
                </h1>

                <p>Lorem ipsum dolor sit amet, <span className='special-word'>consectetuer</span> adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>

                <img src={background} alt="get in touch" />

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque <span className='special-word'>penatibus</span> et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

                <p>Nulla consequat massa quis enim. Donec pede justo, <span className='special-word'>fringilla</span> vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
            </div>
        <div>
          <h1 className="heading-secondary">
            EMAIL <span>US</span>
          </h1>
          <form>
            <div className="form-field name-email">
              <div>
                <label>name</label>
                <input type="text" name="name" />
              </div>
              <div>
                <label>email</label>
                <input type="email" name="email" />
              </div>
            </div>
            <div className="form-field">
              <div>
                <label>subject</label>
                <input type="text" name="subject" />
              </div>
            </div>
            <div className="form-field">
              <div>
                <label>subject</label>
                <textarea type="text" name="message" />
              </div>
            </div>
          </form>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
