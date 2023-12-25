import React from 'react';

import PortfolioItem from './PortfolioItem';
import Loader from '../Loader';

import useAsyncHook from '../../helpers/useAsyncHook';
import { portfolioDataType } from '../../types/portfolioType';

const PortfolioTab = ({ dataLink }: { dataLink: string }) => {
  const [portfolioData, loading, error] = useAsyncHook({ link: dataLink }) as [
    portfolioDataType,
    boolean,
    string,
  ];

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return error;
  }
  if (portfolioData === null) {
    return <>Portfolio data coming soon..</>;
  }

  const { projects, text } = portfolioData;

  return (
    <>
      <p>{text}</p>
      {typeof projects !== 'undefined' && projects.length === 0 && (
        <p>More projects coming soon!</p>
      )}
      {typeof projects !== 'undefined' &&
        projects.length > 0 &&
        projects.map((item) => (
          <PortfolioItem
            item={item}
            key={item.title + item.description.length}
          />
        ))}
    </>
  );
};

export default PortfolioTab;
