import React, { useState, useEffect } from 'react';
import { Layout } from '../../../components/layouts';
import { NoFav } from '../../../components/ui';
import { localFavorites } from '../../../utils';
import { FavPokemons } from '../../../components/pokemon/FavPokemons';

const Favorites = () => {
  const [favPokemons, setFavPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavPokemons( localFavorites.pokemons() );
    console.log("favPokemons", favPokemons);
  }, [])
  

  return (
    <Layout title='Pokémon - Favorites'>
      {
        favPokemons.length > 0
        ?  (
          <FavPokemons pokemons={favPokemons}/>
        )
        : (<NoFav />)
      }
     
    </Layout>
  )
}

export default Favorites;
