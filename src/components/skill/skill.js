import React, { Component, Fragment } from 'react';
import './skill.css';

class Skill extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section id="skill">
          <div className="row narrow section-intro with-bottom-sep animate-this">
            <div className="col-full">
              <h3>{data.skillTitle}</h3>
              <p className="lead">{data.skillDescription}</p>
            </div>
          </div>

          <div className="row skill-content">
            <div className="skill-list block-1-6 block-tab-full group">
              {data.skills &&
                data.skills.map(item => {
                  return (
                    <div
                      className="bgrid skill-item animate-this"
                      key={item.skillName}
                    >
                      <img
                        className="icon"
                        src={`images/skill/${item.imgName}.png`}
                        alt={item.skillName}
                      />
                      <div className="skill-content">
                        <p>{item.skillName}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Skill;
