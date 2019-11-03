import React from 'react';
import { Tabs, Tab } from 'react-materialize';

import PortfolioTab from '../parts/PortfolioTab';
import PortfolioData from '../../data/PortolioData';

const Portfolio = ({ tab = 'react' }) => {
  const handleChange = value => {
    console.log(value);
  };
  return (
    <>
      <h1>Portfolio</h1>
      <Tabs className="portfolio-tabs" onChange={handleChange}>
        {Object.keys(PortfolioData).map(key => {
          const { title: paramTitle, tab: paramTab, link } = PortfolioData[key];
          return (
            <Tab
              title={paramTitle}
              className="portfolio-tab"
              active={tab === paramTab}
              value={paramTitle}
              key={link}
            >
              <PortfolioTab dataLink={link} />
            </Tab>
          );
        })}
      </Tabs>
    </>
  );
};

export default Portfolio;
