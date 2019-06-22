import React, { Component, Fragment } from 'react';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thePosition: false
    };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 190) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
    window.scrollTo(0, 0);
  }

  openMenu = event => {
    event.preventDefault();
    document.body.classList.add('menu-is-open');
  };

  closeMenu = event => {
    event.preventDefault();
    document.body.classList.remove('menu-is-open');
  };

  render() {
    const { data } = this.props;
    const { thePosition } = this.state;

    return (
      <Fragment>
        <header>
          <div className="header-logo">
            <a href="index.html">
              <h1 className="logo">G</h1>
            </a>
          </div>

          <a
            id="header-menu-trigger"
            className={`${thePosition ? 'opaque' : ''}`}
            href="#0"
            onClick={this.openMenu}
          >
            <span className="header-menu-text">Menu</span>
            <span className="header-menu-icon"></span>
          </a>

          <nav id="menu-nav-wrap">
            <a
              href="#0"
              className="close-button"
              title="close"
              onClick={this.closeMenu}
            >
              <span>Close</span>
            </a>
            <h3>Portfolio.</h3>
            <ul className="nav-list">
              <li className="current">
                <a className="smoothscroll" href="#home" title="">
                  Portada
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about" title="">
                  Acerca de mi
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio" title="">
                  Portafolio
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact" title="">
                  Contáctame
                </a>
              </li>
            </ul>
            <ul className="header-social-list">
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
          </nav>
        </header>
      </Fragment>
    );
  }
}

export default Header;
