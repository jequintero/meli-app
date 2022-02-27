import React, { useContext, useMemo } from 'react';
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

export const useServerData = fn => {
  const context = useContext(ServerDataContext);

  if (!context) {
    throw new Error(
      'useServerData() must be a child of <ServerDataProvider />'
    );
  }

  if (fn) {
    return fn(context.data);
  } else {
    return context.data;
  }
};
