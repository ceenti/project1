import React from 'react';

import Image from 'next/image';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import NextLink from 'next/link';


export const Navbar = () => {

  const { theme } = useTheme();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray900.value
    }}>

      <NextLink href="/" passHref style={{flexDirection: 'row', display: 'flex'}}>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
          alt='Pokémon Logo'
          width={70}
          height={70}
        />
        <Text color='white' h2>P</Text>
        <Text color='white' h3>okémon</Text>
      </NextLink>
        
      <Spacer style={{ flex:1 }}/>
      <NextLink href="/favorites" passHref>
          <Text color='white'>Favoritos</Text>
      </NextLink>
      </div>
  )
};
