import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LinksData from '../data/LinksData';

const Links = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  type linkType = {
    link: string;
    name: string;
    icon: string;
  };

  const renderLink = (item: linkType, index: number) => {
    const iconClass = `fa fa-${item.icon} sidebar__link-icon`;
    return (
      <li key={index} className="sidebar__link-wrap">
        <NavLink
          to={item.link}
          className={(navData) =>
            `sidebar__link-item waves-effect waves-light ${
              navData.isActive ? 'active-link' : ''
            }`
          }
        >
          <span className="sidebar__link-icon-wrap">
            {item.name} <i className={iconClass} />
          </span>
        </NavLink>
      </li>
    );
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button
        type="button"
        className={`sidebar__menu-button
         ${menuOpen ? 'sidebar__menu-button_visible' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
      </button>
      <ul
        className={`sidebar__links ${menuOpen ? 'sidebar__links_visible' : ''}`}
      >
        {LinksData.map((item, index) => renderLink(item, index))}
      </ul>
    </>
  );
};

export default Links;
