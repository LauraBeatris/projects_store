<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Challenge from GoStack Bootcamp. Goals: Apply the main concepts of NodeJS
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/laurabeatris/projects_store?color=brightgreen&logoColor=black">

  <a href="https://www.linkedin.com/in/laurabeatris/">
    <img alt="Made by Laura Beatris" src="https://img.shields.io/badge/made%20by-laurabeatris-brightgreen">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/LauraBeatris/projects_store/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/LauraBeatris/projects_store?color=brightgreen&style=social">
  </a>
</p>

<p align="center">
  <a href="#laura-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-goals">Goals</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licence">Licence</a>
</p>

## :laura: About the project

A application to storage projects and their tasks using [Express](https://expressjs.com/pt-br/).

### Routes

- `POST /projects`: This route receives the id and title in the body of the request. Creating a project like this format: `{ id: "1", title: 'Novo projeto', tasks: [] }`;

- `GET /projects`: This route list all the projects storaged

- `PUT /projects/:id`: This route update a project, receiving the `id` as a route param and the `title` in the request body.

- `DELETE /projects/:id`: This route delete a project, receiving the `id` of the specific project as a route param.

- `POST /projects/:id/tasks`: This route add a task in the project. For this, the `id` of the project is passed as a route param and the `title` of the task is passed in the request body.

### Examples

If i call the route `POST /projects` passing `{ id: 1, title: 'AirHealth' }` e a rota `POST /projects/1/tasks` com `{ title: 'Fix errors' }`, the array of projects should be like this:

```js
[
  {
    id: "1",
    title: "AirHealth",
    tasks: ["Fix errors"]
  }
];
```

### Middlewares

- `projectsQuantity`: This's a global middleware responsable for (`console.log`) the current count of storaged projects.

- `requestsQuantity`: This's a global middleware responsable for (`console.log`) the current
  count of requests made to the api.

- `verifyId`: This's a local middleware responsable for the verification if the id passed as a param has a project related to it. If not, will return a error with `status 404 (Bad Request)`, but if the project exists, the middleware will permit the request to continue normally.

- Crie um middleware global chamado em todas requisições que imprime (`console.log`) uma contagem de quantas requisições foram feitas na aplicação até então;

## :memo: Licence

MIT Licence. See the file [LICENSE](LICENSE.md) for more details.

---

Made with ♥ by Laura :wave: [See my linkedin!](https://www.linkedin.com/in/laurabeatris/)
