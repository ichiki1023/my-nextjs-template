import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Home: React.FunctionComponent = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <H1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </H1>
    </main>
  </div>
);

export default Home;

const H1 = styled.h1`
  color: red;
`;
