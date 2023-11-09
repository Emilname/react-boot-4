export default (client) => ({
  getAll: () => client.get("/photos"),
  getItem: ({ id }) => client.get(`/photos/${id}`),
});
