import Favorites from '../pages/favorites';

const toggleFavorite = (id: number) => {
  let favorite: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  if (favorite.includes(id)) {
    favorite = favorite.filter((pokeId) => pokeId !== id);
  } else {
    favorite.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorite));
};

const existInfavorites = (id: number): boolean => {
  let favorite: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  return favorite.includes(id);
};

const pokemon = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export default { toggleFavorite, existInfavorites, pokemon };
