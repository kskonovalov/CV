import React from 'react';
import { Tabs, Tab } from 'react-materialize';

import PortfolioTab from '../parts/PortfolioTab';
import PortfolioData from '../../data/PortolioData';

const Portfolio = ({ tab = 'react' }) => (
  <>
    <h1>Portfolio</h1>
    <Tabs className="portfolio-tabs">
      {PortfolioData.map((dataItem) => {
        const { title: paramTitle, tab: paramTab, link } = dataItem;
        return (
          <Tab
            title={paramTitle}
            className="portfolio-tab"
            active={tab === paramTab}
            value={paramTitle}
            key={link} // Ensure 'link' is unique for each item
          >
            <PortfolioTab dataLink={link} />
          </Tab>
        );
      })}
    </Tabs>
  </>
);

export default Portfolio;
