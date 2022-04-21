import { FC, ReactNode } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';

type Props = {
  children: ReactNode;
  title?: string;
};

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon'}</title>
        <meta name="author" content="Manuel Arnaldo" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
