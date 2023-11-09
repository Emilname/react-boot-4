import client from "./client.js";
import todosEndpointCreator from "./endpoints/todos.js";
import usersEndpointCreator from "./endpoints/users.js";
import photosEndpointCreator from "./endpoints/photos.js";

export default {
  todos: todosEndpointCreator(client),
  users: usersEndpointCreator(client),
  photos: photosEndpointCreator(client),
};
