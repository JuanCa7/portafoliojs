const array = [
  {
    "title": "Conecta 4",
    "description": "Juego de estrategia para grupo de amigos.",
    "link": "#"
  },
  {
    "title": "La enciclopedia Star Wars",
    "description": "Busqueda de personajes y vehiculos.",
    "link": "#"
  },
  
];

const renderProjects = () => {
      const container = document.getElementById('projectsContainer');
      
      const projectsHTML = array.map((project, index) => `
            <div class="row project mt-4">
                <div class="col-md-10">
                    <h3><b>#${index + 1}</b> ${project.title}</h3>
                    <p>${project.description}</p>
                </div>
                <div class="col-md-2 d-flex align-items-center justify-content-center">
                    <i class="icon bi bi-eye fs-4"></i>
                </div>
            </div>
      `).join('');
      
      container.innerHTML = projectsHTML;
};

document.addEventListener('DOMContentLoaded', renderProjects);

