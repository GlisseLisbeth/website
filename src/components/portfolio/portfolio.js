import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import 'lightgallery';
import 'lg-thumbnail';
import 'lg-fullscreen';
import 'lg-autoplay';
import 'lg-zoom';
import './portfolio.css';

class Portfolio extends Component {
  render() {
    const { data } = this.props;

    $(document).ready(() => {
      $('#folio-wrap').lightGallery({
        download: false,
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false,
        hash: false,
        selector: '.item-wrap',
        fullScreen: true
      });
    });

    return (
      <Fragment>
        <section id="portfolio">
          <div className="intro-wrap">
            <div className="row narrow section-intro with-bottom-sep animate-this">
              <div className="col-twelve">
                <h3>Proyectos y ejemplos</h3>
                <p className="lead">
                  Implementado con React y otras herramientas.
                </p>
              </div>
            </div>
          </div>

          <div className="row portfolio-content">
            <div className="col-twelve">
              <div id="folio-wrap" className="bricks-wrapper">
                {data.portfolio &&
                  data.portfolio.map(item => {
                    return (
                      <div className="brick folio-item" key={item.ord}>
                        <div
                          className="item-wrap animate-this"
                          data-src={item.imgurl}
                          data-sub-html={item.ord}
                        >
                          <a className="overlay" href={item.ord}>
                            <img src={item.imgurl} alt={item.title} />
                            <div className="item-text">
                              <span className="folio-types">{item.type}</span>
                              <h3 className="folio-title"> {item.title}</h3>
                            </div>
                          </a>
                          <a
                            href={item.link}
                            className="details-link"
                            title="details"
                          >
                            <i className="icon-link"></i>
                          </a>
                        </div>

                        <div id={item.num} className="hide">
                          <h4>{item.title}</h4>
                          <p>
                            {item.description}
                            {item.production && (
                              <Fragment>
                                <br />
                                <a href={item.link}>Demo</a>
                              </Fragment>
                            )}
                            <br />
                            <a href={item.code}>Codigo</a>
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Portfolio;
