"use strict";

const User = use("App/Models/User");

class UserController {
  async index({ view }) {
    const users = await User.all();

    return users;
  }

  async store({ request }) {
    const data = request.only(["username", "email", "password"]);

    const user = await User.create(data);

    return user;
  }

  async update({ request, response, params }) {
    try {
      const { username, password } = request.all();

      const user = await User.find(params.id);

      user.username = username;
      user.password = password;

      await user.save();
    } catch (error) {
      return response.status(error.status).send({
        error: { message: "Algo deu errado ao editar o usuário" }
      });
    }
  }

  async destroy({ params }) {
    const user = await User.find(params.id);
    await user.delete();

    return user;
  }
}

module.exports = UserController;
