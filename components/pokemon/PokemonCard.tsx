import React, { FC } from 'react'
import { SmallPokemon } from '../../interfaces';
import { Card, Row, Text } from "@nextui-org/react";
import { useRouter } from 'next/router';

interface Props{
  pokemon: SmallPokemon
}
export const PokemonCard: FC<Props> = ({ pokemon:{id, name, image} }) => {
  
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${ name }`);
  }

  return (
    <Card hoverable clickable onClick={onClick}>
            <Card.Body css={{p: 1}}>
              <Card.Image
                src={image}
                width='100%'
                height={140}
                alt={name}
              />
            </Card.Body>
            <Card.Footer>
              <Row justify="space-between">
                <Text>{`# ${++id}`}</Text>
                <Text transform="capitalize">{name}</Text>
              </Row>
            </Card.Footer>
          </Card>
  )
}
