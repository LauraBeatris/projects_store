const express = require("express");

const app = express();

let projects = [];

/* 
  Middlewares 
*/

// Global Middleware
function projectsQuantity(req, res, next) {
  console.log(`Until now, there're ${projects.length} storaged`);
  next();
}

// Local Middleware
function verifyId(req, res, next) {
  const { project_id } = req.params;

  const project = projects.find(project => project.id === project_id);

  if (!project) {
    return res.status(400).json({ error: "Project not found" });
  }

  next();
}

app.use(express.json());
app.use(projectsQuantity);

/* 
  Routes 
*/

// Listing all the projects
app.get("/projects", (req, res) => {
  return res.json({ projects });
});

// Listing all the projects
app.get("/projects/:project_id", verifyId, (req, res) => {
  const { project_id } = req.params;
  const project = projects.find(project => project.id === project_id);
  return res.json({ project });
});

// Creating a project
app.post("/projects", (req, res) => {
  const { id, title } = req.body;

  projects.push({ id, title, tasks: [] });

  return res.json({ projects });
});

app.put("/projects/:project_id", verifyId, (req, res) => {
  const { project_id } = req.params;
  const { title } = req.body;

  // Finding a project with id passed as a route param
  const edited = projects.map(project => {
    if (project.id === project_id) {
      return {
        ...project,
        title
      };
    }
    return project;
  });

  projects = edited;

  return res.json({ projects });
});

app.delete("/projects/:project_id", verifyId, (req, res) => {
  const { project_id } = req.params;

  const filteredProjects = projects.filter(
    project => project.id !== project_id
  );

  projects = filteredProjects;

  return res.json({ projects });
});

app.post("/projects/:project_id/tasks", verifyId, (req, res) => {
  const { project_id } = req.params;
  const { title } = req.body;

  const addedTask = projects.map(project => {
    if (project.id === project_id) {
      return {
        ...project,
        tasks: [...project.tasks, title]
      };
    }

    return project;
  });

  projects = addedTask;

  return res.json({ projects });
});

app.listen(3333);
