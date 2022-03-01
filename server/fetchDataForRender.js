import React from 'react';
import ssrPrepass from 'react-ssr-prepass';

export const fetchDataForRender = (ServerApp, req) => {
  let data = {};

  return ssrPrepass(<ServerApp data={data} location={req.url} />, element => {
    if (element && element.type && element.type.fetchData) {
      return element.type.fetchData(req).then(d => {
        data = {
          ...data,
          ...d
        };
      });
    }
  }).then(() => {
    return data;
  });
};
