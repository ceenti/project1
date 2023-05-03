import { FC } from "react";
import { GetStaticProps } from 'next'

import { Layout } from "../../components/layouts";

const Home: FC = (props) => {
  console.log('Props', props);
  return (
    <Layout title="Pokemon List">
    
    <ul>
      <li>pokémon</li>
      <li>pokémon</li>
      <li>pokémon</li>
      <li>pokémon</li>
      <li>pokémon</li>
      <li>pokémon</li>
      <li>pokémon</li>
      <li>pokémon</li>
    </ul>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log('Hola mundo')
  return {
    props: {
      name: 'Cinthia San'
    }
  }
}

export default Home;
