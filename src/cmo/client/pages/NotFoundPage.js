import React from 'react';
import SiteWrapperWithoutRHS from '../components/SiteWrapper/SiteWrapperWithoutRHS';

const NotFoundPage = ({ staticContext = {} }) => {
  console.log(staticContext);
  staticContext.notFound = true;
  console.log(staticContext);
  return <h1>Ooops, route not found</h1>;
};

export default SiteWrapperWithoutRHS(NotFoundPage);
