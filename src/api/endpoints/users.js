export default (client) => ({
  getAll: () => client.get("/users"),
  getItem: ({ id }) => client.get(`/users/${id}`),
});
