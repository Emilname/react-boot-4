export default (client) => ({
  getAll: () => client.get("/todos"),
  getItem: ({ id }) => client.get(`/todos/${id}`),
});
