import React from 'react';
import { Tabs, Tab } from 'react-materialize'
import PortfolioTab from '../parts/PortfolioTab';

const portfolioParams = [
  {
    "title": "React",
    "tab": "react",
    "link": '/data/portfolio.json'
  },
  {
    "title": "WordPress",
    "tab": "wordpress",
    "link": '/data/portfolio-wordpress.json'
  }
];

const Portfolio = ({tab = 'react'}) => {
  const handleChange = (value) => {
    console.log(value);
  };
  return (<>
    <h1>Portfolio</h1>
    <Tabs className="portfolio-tabs" onChange={handleChange}>
      {
        Object.keys(portfolioParams).map((key) => {
          const {title: paramTitle, tab: paramTab, link} = portfolioParams[key];
          return <Tab title={paramTitle} className="portfolio-tab" active={tab === paramTab}
                      value={paramTitle} key={link}>
            <PortfolioTab dataLink={link}/>
          </Tab>;
        })
      }
    </Tabs>
  </>)
};

export default Portfolio;