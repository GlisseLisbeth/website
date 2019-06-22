import React, { Component, Fragment } from 'react';
import './about.css';

class About extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section id="about">
          <div className="row about-wrap">
            <div className="col-full">
              <div className="about-profile-bg"></div>

              <div className="intro">
                <h3 className="animate-this">Sobre mi</h3>
                <p className="lead animate-this">{data.aboutme}</p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default About;
