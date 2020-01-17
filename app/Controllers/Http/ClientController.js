"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with clients
 */ "use strict";

const Client = use("App/Models/Client");

class ClientController {
  async index({ view }) {
    const clients = await Client.all();

    return clients;
  }

  async store({ request }) {
    const data = request.only(["username", "email", "name"]);

    const client = await Client.create(data);

    return client;
  }

  async update({ request, response, params }) {
    try {
      const { username, email, name } = request.all();

      const client = await Client.find(params.id);

      client.username = username;
      client.email = email;
      client.name = name;

      await client.save();
    } catch (error) {
      return response.status(error.status).send({
        error: { message: "Algo deu errado ao editar o usuário" }
      });
    }
  }

  async destroy({ params }) {
    const client = await Client.find(params.id);
    await client.delete();

    return client;
  }
}

module.exports = ClientController;
