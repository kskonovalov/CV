import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import LinksData from '../data/LinksData';

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  renderLink = (item, index) => {
    const iconClass = `fa fa-${item.icon} sidebar__link-icon`;
    return <li key={index} className="sidebar__link-wrap">
      <NavLink to={item.link} className='waves-effect waves-light sidebar__link-item'
               activeClassName='active-link' exact>
        <span className='sidebar__link-icon-wrap'>{item.name} <i className={iconClass}></i></span>
      </NavLink>
    </li>;
  };
  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  };

  render() {
    return (
      <React.Fragment>
          <div className={`sidebar__menu-button
           ${this.state.menuOpen ? "sidebar__menu-button_visible" : ""}`} onClick={this.toggleMenu}>
            <i className={`fa ${this.state.menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
            <ul className={`sidebar__links ${this.state.menuOpen ? "sidebar__links_visible" : ""}`}>
              {LinksData.map((item, index) => this.renderLink(item, index))}
            </ul>
      </React.Fragment>
    );
  }
}

export default Links;