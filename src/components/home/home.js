import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import cv from '../../CV-GLISSELISBETH.pdf';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.cfg = {
      defAnimation: 'fadeInUp'
    };
  }

  componentDidMount() {
    if (!$('html').hasClass('no-cssanimations')) {
      setTimeout(() => {
        $('.animate-intro').each(ctr => {
          const el = $(this);
          let animationEfx = el.data('animate') || null;

          if (!animationEfx) {
            animationEfx = this.cfg.defAnimation;
          }

          setTimeout(() => {
            el.addClass(`${animationEfx} animated`);
          }, ctr * 300);
        });
      }, 100);
    }
    this.setState({ isLoading: false });
  }

  render() {
    const { data } = this.props;
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <Fragment>
          <div id="preloader"></div>
          <div id="loader"></div>
        </Fragment>
      );
    }
    return (
      <section id="home">
        <div className="home-content-table">
          <div className="home-content-tablecell">
            <div className="row">
              <div className="col-twelve">
                <h1 className="animate-intro">{data.name}</h1>
                <h2 className="animate-intro">
                  {data.study &&
                    data.study.map(item => {
                      return item.name ===
                        data.study[data.study.length - 1].name
                        ? item.name
                        : `${item.name} | `;
                    })}
                </h2>
                <h3 className="animate-intro">
                  {data.role &&
                    data.role.map(item => {
                      return item.name === data.role[data.role.length - 1].name
                        ? item.name
                        : `${item.name} | `;
                    })}
                </h3>
                <div className="more animate-intro">
                  <a className="smoothscroll button stroke" href="#about">
                    Acerca de mi
                  </a>
                  <a
                    target="_blank"
                    without="true"
                    rel="noopener noreferrer"
                    className="smoothscroll button stroke"
                    href={cv}
                    download
                  >
                    Mi CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="home-social-list">
          {data.socialLinks &&
            data.socialLinks.map(item => {
              return (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    without="true"
                  >
                    <i className={item.className}></i>
                  </a>
                </li>
              );
            })}
        </ul>

        <div className="scrolldown">
          <a href="#about" className="scroll-icon smoothscroll">
            Scroll Down
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </section>
    );
  }
}

export default Home;
