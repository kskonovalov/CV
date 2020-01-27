import React from 'react';

import PortfolioItem from './PortfolioItem';
import Loader from '../Loader';

import useAsyncHook from '../../helpers/useAsyncHook';

const PortfolioTab = ({ dataLink }) => {
  const [data] = useAsyncHook({ link: dataLink });
  const { projects, text } = data;
  return (
    <>
      {<p>{text}</p> || <Loader />}
      {typeof projects !== 'undefined' &&
        projects.length > 0 &&
        projects.map(item => {
          return (
            <PortfolioItem
              item={item}
              key={item.title + item.description.length}
            />
          );
        })}
    </>
  );
};

export default PortfolioTab;
