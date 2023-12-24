import React from 'react';

import PortfolioItem from './PortfolioItem';
import Loader from '../Loader';

import useAsyncHook from '../../helpers/useAsyncHook';

const PortfolioTab = ({ dataLink }) => {
  const [data, loading, error] = useAsyncHook({ link: dataLink });
  const { projects, text } = data;

  if(loading) {
    return <Loader />;
  }
  if(error) {
    return (
      <>
        {error}
      </>
    );
  }
  return (
    <>
      <p>{text}</p>
      {typeof projects !== 'undefined' && projects.length === 0 && <p>More projects coming soon!</p>}
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
