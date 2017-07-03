export const getArtistsFromRoute = ({ pages }) => (
  pages.filter(page =>
    (page.data.type && page.data.type == 'artist')
  ).sort((a, b) => {
    // sort by last name
    const a1 = a.data.name.split(' ')[1];
    const b1 = b.data.name.split(' ')[1];
    if (a1 < b1) return -1;
    if (a1 > b1) return 1;

    return 0;
  })
);
