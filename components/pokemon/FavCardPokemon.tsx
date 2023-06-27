import React from 'react';
import { Grid, Card } from '@nextui-org/react';

export const FavCardPokemon = (id: any) => {
  console.log("ID", id);
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id.id}.svg`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  )
}
