import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Navbar } from '../ui/Navbar';

interface Props {
  title?: string
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {

  const origin = typeof window != undefined ? window.location.origin : '';

  return (
    <>
      <Head>
        <title> {title || 'Pokemon App'} </title>
        <meta name="author" content="Cinthia Sánchez" />
        <meta name="description" content={`${title}`} />
        <meta name="keywords" content={`${title}, pokemón, pokedex`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página de ${title}`} />
        <meta property="og:image" content={`${origin}/image/banner-pokemon.png`} />
      </Head>
      <Navbar/>
      <main>
        {children}
      </main>
    </>
  )
}
