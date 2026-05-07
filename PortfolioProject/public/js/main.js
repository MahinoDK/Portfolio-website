const videoOverlay = document.getElementById("videoOverlay");
const videoFrame = document.getElementById("videoFrame");
const closeVideo = document.getElementById("closeVideo");


function loadLaboratoryProjects() {
 const projects = [
    {
      title: "AR Game",
      tag: "Lens Studio",
      image: "Images/ARGame.png",
      video: "https://www.youtube.com/embed/QH2-TGUlwu4"
    },
    {
      title: "Egypt Dungeon Crawler",
      tag: "Unity",
      image: "Images/EgyptGame.png",
      video: "https://www.youtube.com/embed/QH2-TGUlwu4"
    },
    {
      title: "Fridge Buddies",
      tag: "Unity",
      image: "Images/Fridgebuddies.png",
      video: "https://www.youtube.com/embed/QH2-TGUlwu4"
    },
    {
      title: "Ghost Game",
      tag: "Unity",
      image: "Images/GhostGame.png",
      video: "https://www.youtube.com/embed/QH2-TGUlwu4"
    },
    {
      title: "Minecraft Project",
      tag: "Unity",
      image: "Images/MinecraftGame.png",
      video: "https://www.youtube.com/embed/QH2-TGUlwu4"
    },
    {
      title: "Slender Remake",
      tag: "Unity",
      image: "Images/SlenderGame.png",
      video: "https://www.youtube.com/embed/QH2-TGUlwu4"
    },
  ];

  const track = document.querySelector(".lab-track");
  track.innerHTML = "";

  // Build cards TWICE — this is intentional for the infinite scroll animation
  [0, 1].forEach(() => {
    projects.forEach((project) => {
      const card = document.createElement("article");
      card.classList.add("lab-card");
      card.dataset.video = project.video;

      card.innerHTML = `
        <div class="lab-tag">${project.tag}</div>
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
      `;

      card.addEventListener("click", () => {
        videoFrame.src = project.video;
        videoOverlay.classList.add("active");
      });

      track.appendChild(card);
    });
  });
}

function closeVideoOverlay() {
  videoOverlay.classList.remove("active");
  videoFrame.src = "";
}

closeVideo.addEventListener("click", closeVideoOverlay);

videoOverlay.addEventListener("click", (event) => {
  if (event.target === videoOverlay) {
    closeVideoOverlay();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeVideoOverlay();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  loadLaboratoryProjects();
});