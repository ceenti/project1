import React from 'react';
import { Grid } from '@nextui-org/react';
import { FavCardPokemon } from './FavCardPokemon';

interface Props {
  pokemons: number[]
}

export const FavPokemons = ({pokemons}: Props) => {
  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
      {
        pokemons.map( (id: number) => (
          <FavCardPokemon id={ id } key={ id } />
        ))
      }
    </Grid.Container>
  )
};