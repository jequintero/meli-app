import React, { useMemo } from 'react';

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
