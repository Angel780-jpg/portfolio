const translations = {
  es: {
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",

    "hero.greeting": "Hola, soy",
    "hero.role": "Frontend Developer",
    "hero.cvEs": "Descargar CV (Español)",
    "hero.cvEn": "Download CV (English)",

    "about.title": "Sobre mí",
    "about.bio":
      "Desarrollador web Front-End con conocimientos en HTML, CSS, JavaScript y desarrollo de aplicaciones interactivas. Experiencia previa en diseño digital, creación de contenido multimedia y administración de sistemas dentro de entornos institucionales. He desarrollado herramientas web funcionales como generadores de QR, además de participar en proyectos open-source enfocados en utilidades para desarrolladores. Actualmente estudio Ingeniería en Desarrollo de Videojuegos, fortaleciendo habilidades en programación, lógica y desarrollo de software.",

    "skills.title": "Lenguajes y Tecnologías",

    "projects.title": "Mis Proyectos",
    "projects.qr": "Generador de códigos QR.",
    "projects.converter": "Conversor de unidades.",
    "projects.resources":
      "Proyecto open source que busca recopilar recursos gratuitos para programadores.",
    "projects.github": "GitHub",
    "projects.demo": "Ver Demo",

    "footer.rights": "© 2026 Angel Valencia. Todos los derechos reservados.",
    "footer.cvEs": "CV Español",
    "footer.cvEn": "CV English",
  },
  en: {
    "nav.about": "About me",
    "nav.skills": "Skills",
    "nav.projects": "Projects",

    "hero.greeting": "Hi, I'm",
    "hero.role": "Frontend Developer",
    "hero.cvEs": "Download CV (Spanish)",
    "hero.cvEn": "Download CV (English)",

    "about.title": "About me",
    "about.bio":
      "Front-End web developer with knowledge in HTML, CSS, JavaScript and interactive application development. Previous experience in digital design, multimedia content creation, and systems administration within institutional environments. I have built functional web tools such as QR code generators, and have contributed to open-source projects focused on developer utilities. I am currently studying Video Game Development Engineering, strengthening skills in programming, logic, and software development.",

    "skills.title": "Languages & Technologies",

    "projects.title": "My Projects",
    "projects.qr": "QR code generator.",
    "projects.converter": "Unit converter.",
    "projects.resources":
      "Open source project that compiles free resources for developers.",
    "projects.github": "GitHub",
    "projects.demo": "Live Demo",

    "footer.rights": "© 2026 Angel Valencia. All rights reserved.",
    "footer.cvEs": "CV Spanish",
    "footer.cvEn": "CV English",
  },
};

function applyLanguage(lang) {
  const t = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.documentElement.lang = lang;

  localStorage.setItem("lang", lang);

  const toggle = document.getElementById("langToggle");
  const options = toggle.querySelectorAll(".lang-option");
  options.forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.lang === lang);
  });
  toggle.classList.toggle("en", lang === "en");
}

function initLangToggle() {
  const toggle = document.getElementById("langToggle");
  const savedLang = localStorage.getItem("lang") || "es";

  applyLanguage(savedLang);

  toggle.addEventListener("click", () => {
    const currentLang = localStorage.getItem("lang") || "es";
    const newLang = currentLang === "es" ? "en" : "es";
    applyLanguage(newLang);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLangToggle();

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") !== "#") {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = hamburger.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      const icon = hamburger.querySelector("i");
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-times");
    });
  });
});
