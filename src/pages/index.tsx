import { FC } from "react";
import { GetStaticProps } from 'next'

import { Layout } from "../../components/layouts";
import { pokeApi } from "../../api";
import { PokemonListResponse, SmallPokemon } from "../../interfaces";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "../../components/pokemon/PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: FC<Props> = ({pokemons}) => {
  console.log('pokemons', pokemons);
  return (
    <Layout title="Pokemon List">
    <Grid.Container>
      {
        pokemons.map((pokemon, index) =><Grid xs={6} sm={3} md={2} xl={1} key={index} css={{p: 10}}>
          <PokemonCard
            key={index}
            pokemon={pokemon}
          />
        </Grid> )
      }
    </Grid.Container>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png
  const pokemons : SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${++index}.png`
  }));
  console.log(data, pokemons);
  return {
    props: {
      pokemons
    }
  }
}

export default Home;
