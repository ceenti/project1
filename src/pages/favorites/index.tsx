import React, { useState, useEffect } from 'react';
import { Layout } from '../../../components/layouts';
import { NoFav } from '../../../components/ui';
import { localFavorites } from '../../../utils';
import { FavPokemons } from '../../../components/pokemon/FavPokemons';

const Favorites = () => {
  const [favPokemons, setFavPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavPokemons( localFavorites.pokemons );
  }, [])
  

  return (
    <Layout title='Pokémon - Favorites'>
      {
        favPokemons.length === 0
        ? (<NoFav />)
        : (
          <FavPokemons pokemons={favPokemons}/>
        )
      }
     
    </Layout>
  )
}

export default Favorites;
