
    function filterImages(category) {
    const projects = document.getElementsByClassName("project1");

    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
    const span = project.getElementsByTagName("span")[0];

    if (category === "All" || span.textContent === category) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    }
  }