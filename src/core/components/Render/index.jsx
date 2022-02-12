import React, { Fragment } from 'react';

export const Render = ({ if: condition, children }) => {
  return condition ? (
    <Fragment>
      {children}
    </Fragment>
  ) : (
    <Fragment />
  );
}