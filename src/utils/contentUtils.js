export const getArtistsFromRoute = ({ pages }) => (
  pages.filter(page => (page.data.type && page.data.type == 'artist'))
);
