import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const ServerDataContext = React.createContext();

export const ServerDataProvider = props => {
  const value = useMemo(() => {
    return {
      data: props.value
    };
  }, [props.value]);

  return (
    <ServerDataContext.Provider value={value}>
      {props.children}
    </ServerDataContext.Provider>
  );
};

ServerDataProvider.propTypes = {
  value: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};
