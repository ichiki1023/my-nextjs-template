import React from 'react';
import App from 'next/app';
import { wrapper } from 'src/redux/store';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);
