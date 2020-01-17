"use strict";

const Task = use("App/Models/Task");

class TaskController {
  async index({ view }) {
    const tasks = await Task.all();

    return tasks;
  }

  async store({ request }) {
    const title = request.input("title");
    console.log(title);

    const task = await Task.create({ title });

    return task;
  }

  async destroy({ params }) {
    const task = await Task.find(params.id);
    await task.delete();

    return task;
  }
}

module.exports = TaskController;
