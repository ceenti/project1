import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Navbar } from '../ui/Navbar';

interface Props {
  title?: string
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title || 'Pokemon App'} </title>
        <meta name="author" content="Cinthia Sánchez" />
        <meta name="description" content={`${title}`} />
        <meta name="keywords" content={`${title}, pokemón, pokedex`} />
      </Head>
      <Navbar/>
      <main>
        {children}
      </main>
    </>
  )
}
