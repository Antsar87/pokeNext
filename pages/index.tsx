import type { GetStaticProps, NextPage } from 'next';

import { Card, Grid, Row, Text } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../components/layout';
import { Pokelist, PokeSmall } from '../interface';
import Link from 'next/link';

interface Props {
  pokemons: PokeSmall[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map(({ id, name, img }) => (
          <Link href={`/pokemon/${id}`}>
              <Grid xs={6} sm={3} md={2} key={id}>
                <Card hoverable clickable>
                  <Card.Body css={{ p: 1 }}>
                    <Card.Image src={img} width="100%" height={140} />
                  </Card.Body>
                  <Card.Footer>
                    <Row justify="space-between">
                      <Text transform="capitalize">{name}</Text>
                      <Text># {id}</Text>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
          </Link>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<Pokelist>('/pokemon?limit=151');

  const pokemons: PokeSmall[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
