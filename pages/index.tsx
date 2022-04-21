import type { GetStaticProps, NextPage } from 'next';

import Image from 'next/image';
import { pokeApi } from '../api';

import { Layout } from '../components/layout';
import { Pokelist, PokeSmall } from '../interface';

interface Props {
  pokemons: PokeSmall[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);

  return (
    <Layout title="Listado de Pokemons">
      <ul>
        {pokemons.map(({ id, name, img }) => (
          <li key={id}>
            <Image src={img} height={'100'} width={"100"} />#{id} - {name}
          </li>
        ))}
      </ul>
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
