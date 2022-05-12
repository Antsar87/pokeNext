import { Card, Grid } from '@nextui-org/react';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Layout } from '../components/layout';
import { NoFavorites } from '../components/ui';
import { localFavorites } from '../utils';

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemon());
  }, []);

  return (
    <Layout title="Pokémons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {favoritePokemons.map((id) => (
            <Grid xs={6} sm={3} key={id}>
              <Card hoverable clickable css={{ padding: 10 }}>
                <Link href={`pokemon/${id}`}>
                  <a>
                    <Card.Image
                      width={'100%'}
                      height={140}
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    />
                  </a>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </Layout>
  );
};

export default FavoritesPage;
