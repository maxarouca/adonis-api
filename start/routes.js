"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.get("users", "UserController.index").middleware(["auth"]);
Route.post("users", "UserController.store").middleware(["auth"]);
Route.put("users/:id", "UserController.update").middleware(["auth"]);
Route.delete("users/:id", "UserController.destroy").middleware(["auth"]);

Route.post("sessions", "SessionController.store");

Route.post("passwords", "ForgotPasswordController.store");
Route.put("passwords", "ForgotPasswordController.update");

Route.post("files", "FileController.store").middleware(["auth"]);
Route.get("files/:id", "FileController.show").middleware(["auth"]);

Route.get("tasks", "TaskController.index").middleware(["auth"]);
Route.post("tasks", "TaskController.store").middleware(["auth"]);
Route.delete("tasks/:id", "TaskController.destroy").middleware(["auth"]);
