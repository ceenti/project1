import React, { useEffect } from 'react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Layout } from '../../../components/layouts';
import { useRouter } from 'next/router';
import { PokemonCard } from '../../../components/pokemon';
import { pokeApi } from '../../../api';
import { Pokemon, PokemonListResponse } from '../../../interfaces';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';

import { getPokemoninfo, localFavorites } from '../../../utils';

interface Props {
  pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({pokemon}) => {

  const onToogleToFav = () => {
    localFavorites.toogleFav( pokemon.id )
  }

  return (
    <Layout title={ pokemon.name }>
      <Grid.Container css={{marginTop: '5px'}} gap={ 2 }>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={ 200 }
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{ pokemon.name }</Text>
              <Button
                color="gradient"
                ghost
                onClick={onToogleToFav}
              >
                Guardar en Favoritos
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display='flex' direction='row' gap={ 0 }>
                <Image 
                  src={pokemon.sprites.front_default}
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={pokemon.sprites.back_default}
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={pokemon.sprites.front_shiny}
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={pokemon.sprites.back_shiny}
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemonNamesArray: string[] = data.results.map( pokemon => pokemon.name );

  return {
    paths: pokemonNamesArray.map( name => ({
      params: { name }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name }= params as { name: string }

  return {
    props: {
      pokemon: await getPokemoninfo(name)
    }
  }
}

export default PokemonByNamePage;