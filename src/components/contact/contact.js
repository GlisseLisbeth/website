import React, { Component, Fragment } from 'react';

import './contact.css';

class Contact extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section id="contact">
          <div className="row narrow section-intro with-bottom-sep animate-this">
            <div className="col-twelve">
              <h3>Contáctame</h3>
            </div>
          </div>
          <div className="row contact-content">
            <div className="col-four tab-full contact-info end animate-this">
              <h5>Mi información</h5>

              <div className="cinfo">
                <h6>Envíeme un email a</h6>
                <p>{data.email}</p>
                <p>{data.email2}</p>
              </div>

              <div className="cinfo">
                <h6>Llama al</h6>
                <p>Celular: (+051) 961064075</p>
                <p>Skype: glisse86</p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Contact;
