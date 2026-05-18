const githubUsername = "marcochellogs";

fetch(`https://api.github.com/users/${githubUsername}/repos`)
  .then((r) => r.json())
  .then((d) => {
    const projectsContainer = document.getElementById("projects-container");
    d.forEach((repo) => {
      const projectCol = document.createElement("div");
      projectCol.classList.add("col-sm-6", "col-md-4", "mb-3");
      projectCol.innerHTML = `
        <div class="panel panel-default">
          <div class="panel-heading"><h3 class="panel-title">${repo.name}</h3></div>
          <div class="panel-body">
            <p>${repo.description || "No description"}</p>
            <a href="${repo.html_url}" target="_blank" class="btn btn-primary btn-sm">View on GitHub</a>
          </div>
        </div>
      `;
      projectsContainer.appendChild(projectCol);
    });
  })
  .catch((e) => {
    console.error("Error fetching repositories:", e);
  });
