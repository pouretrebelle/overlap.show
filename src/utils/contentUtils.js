export const filterAndSortArtists = (edges) => (
  edges.map(edge => (
    edge.node
  )).filter(node =>
    (node.frontmatter.type && node.frontmatter.type == 'artist')
  ).sort((a, b) => {
    // sort by last name
    const a1 = a.frontmatter.name.split(' ')[1];
    const b1 = b.frontmatter.name.split(' ')[1];
    if (a1 < b1) return -1;
    if (a1 > b1) return 1;

    return 0;
  })
);
