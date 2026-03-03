import { c as createComponent, a as renderTemplate, e as addAttribute, f as renderSlot, g as renderHead, b as createAstro } from './astro/server-CY-y48yG.js';
import 'piccolore';
import 'html-escaper';
import 'clsx';
import { g as globalStylesUrl } from './_slug_.11219a75-CduQY_rF.js';

const windowControlsScriptUrl = "/assets/window-controls-BYhiBJRg.ts";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const toDotRelative = (url) => url.startsWith("/") ? "./" + url.slice(1) : url;
  const relativeGlobalStyles = toDotRelative(globalStylesUrl);
  const relativeWindowControlsScriptUrl = toDotRelative(windowControlsScriptUrl);
  return renderTemplate(_a || (_a = __template(['<!-- Estructura HTML b\xE1sica del documento --><html lang="es"> <head><!-- Metadatos del documento --><meta charset="UTF-8"><meta name="description" content="Programmer Portfolio"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="./icons/favicon.svg"><meta name="generator"', "><title>", '</title><!-- Global styles imported by Astro/Vite --><!-- Preload de fuentes para mejorar rendimiento --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap" rel="stylesheet"><base href="/"><link rel="stylesheet"', ">", "</head> <body> <!-- Slot para insertar contenido de p\xE1ginas --> ", ' <script type="module"', " defer><\/script> </body> </html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(relativeGlobalStyles, "href"), renderHead(), renderSlot($$result, $$slots["default"]), addAttribute(relativeWindowControlsScriptUrl, "src"));
}, "/Users/dxomega/Documents/Astro - Porfolio/src/layouts/Layout.astro", void 0);

const portfolioData = {
  profile: {
    name: "Kevin Alan Sanchez Meroño",
    role: "Full-Stack Developer | SysAdmin | UX/UI | Accesibilidad",
    bio: "Desarrollador web apasionado por la tecnología y la experiencia de usuario. Trabajo en proyectos basados en Drupal creando módulos a medida y cuidando accesibilidad, rendimiento y calidad de código. Experiencia en HTML, CSS/SCSS, JavaScript, PHP y frameworks/herramientas como React, Astro y Drupal. Uso IA como apoyo para optimizar productividad y procesos.",
    contact: {
      email: "mailto:ksmerono@gmail.com",
      phone: "+34 655 239 445",
      linkedin: "https://linkedin.com/in/kevin-alan-sanchez-mero%C3%B1o"
    }
  },

  experience: [
    {
      company: "Auren (Servicio cliente Fraternidad)",
      role: "Programador Full-Stack (Drupal)",
      slug: "auren-fraternidad",
      period: "Sept 2022 – Actualidad",
      description:
        "Desarrollo y mantenimiento de soluciones en Drupal 9/10/11 para portales corporativos. Módulos personalizados en PHP, theming avanzado con Twig, y UI accesible con Bootstrap 5, SCSS y JavaScript.",
      details: [
        "Desarrollo de módulos personalizados en PHP: lógica de negocio a medida, hooks, preprocess y extensión de funcionalidades.",
        "Personalización avanzada de la presentación con Twig (views, bloques, fields, layouts) y construcción de interfaces responsive con Bootstrap 5, SCSS y JavaScript.",
        "Optimización de accesibilidad y calidad frontend: WCAG, validación W3C, buenas prácticas Lighthouse, semántica HTML y atributos ARIA.",
        "Trabajo diario con GitLab (branching/merges y resolución de conflictos), Node.js, NVM, Gulp y Sass; y con Drush, Composer y MariaDB.",
        "Gestión y diagnóstico en entornos Linux openSUSE/SUSE: configuración de dependencias y resolución de incidencias.",
        "Apoyo al diseño y refinado de UI con Figma y herramientas Adobe, aplicando criterios UX/UI.",
        "Integración de IA generativa en el flujo de trabajo (soporte de código, ideación/prototipado UI y creación de recursos visuales)."
      ]
    },

    {
      company: "Vodafone",
      role: "Programador Full-Stack (Angular / JSP)",
      slug: "vodafone",
      period: "Sept 2021 – Jul 2022",
      description:
        "Trabajo en entornos corporativos: Oracle WebCenter Sites, componentes JSP y frontend con Angular 12 + SASS. Metodologías Agile/Scrum.",
      details: [
        "Gestión, estructuración y mantenimiento de contenido en Oracle WebCenter Sites (plataformas enterprise).",
        "Desarrollo y mantenimiento de componentes dinámicos con JavaServer Pages (JSP).",
        "Construcción de interfaces y funcionalidades frontend con Angular 12 y estilado avanzado con SASS.",
        "Participación en flujos Agile/Scrum: dinámicas de equipo, iteraciones y organización del desarrollo."
      ]
    },

    {
      company: "Autónomo",
      role: "Administrador de Sistemas / Web & IT Manager",
      slug: "autonomo-it",
      period: "Sept 2021 – Jul 2022",
      description:
        "Digitalización del negocio: WordPress (PHP/HTML/CSS/SASS/JS), integración de APIs, sistemas Windows/Linux, Active Directory, redes, DNS y servidor web (Apache/PHP/MySQL).",
      details: [
        "Desarrollo y mantenimiento web en WordPress (maquetación y personalización en PHP/HTML/CSS/SASS/JavaScript).",
        "Integración de APIs y automatización de procesos para necesidades operativas.",
        "Diseño de logotipo e identidad corporativa con herramientas Adobe.",
        "Administración de sistemas Windows y Linux, usuarios, Active Directory y mantenimiento de equipos.",
        "Gestión de red y servidor web: DNS, puertos, redirecciones, IPs; y mantenimiento de servicios Apache/PHP/MySQL.",
        "Diseño e implementación de sistema de facturación online y presencial."
      ]
    }
  ],

  // Education / Certifications
  education: [
    {
      title: "Curso Google Analytics 4 (GA4)",
      slug: "google-analytics-4",
      description:
        "Desfufor (Marzo 2024). Implementación de medición, eventos y conversiones; análisis de métricas y optimización basada en datos.",
      details: [
        "Implementación de medición mejorada y eventos personalizados.",
        "Configuración de flujos de datos web y de aplicaciones.",
        "Creación de audiencias segmentadas para remarketing.",
        "Análisis de métricas e informes personalizados en GA4.",
        "Integración con Google Ads y otras herramientas del ecosistema Google para optimizar el rendimiento web basado en datos reales."
      ],
      tech: ["GA4", "Eventos", "Conversiones", "Analítica"],
      link: "#"
    },
    {
      title: "Curso Avanzado Microsoft SQL",
      slug: "microsoft-sql-avanzado",
      description:
        "Desfufor (Octubre 2023). Consultas avanzadas, optimización de rendimiento y buenas prácticas de configuración/monitorización.",
      details: [
        "Optimización de consultas complejas y subconsultas.",
        "Gestión avanzada de índices y ejecución de planes de consulta.",
        "Uso de procedimientos almacenados, funciones y triggers.",
        "Monitorización del rendimiento y resolución de cuellos de botella.",
        "Buenas prácticas en la configuración y mantenimiento de bases de datos."
      ],
      tech: ["SQL", "Performance", "Optimización"],
      link: "#"
    },
    {
      title: "GRADO SUPERIOR (DAM) - Desarrollo de Aplicaciones Multiplataforma",
      slug: "dam",
      description:
        "iFP Grupo Planeta (2020 – 2022). Programación, POO en Java, bases de datos relacionales, tecnologías web y fundamentos de sistemas y redes.",
      details: [
        "Programación orientada a objetos con Java y entornos de desarrollo IDE.",
        "Ciclo Formativo de Grado Superior donde se adquirieron bases sólidas en Java.",
        "Desarrollo de aplicaciones móviles con Android.",
        "Gestión de bases de datos relacionales y diseño de interfaces de usuario.",
        "Desarrollo de proyectos integrales abarcando frontend y backend."
      ],
      tech: ["Java", "Web", "Bases de datos", "Sistemas"],
      link: "#"
    },
    {
      title: "Cisco CCNA",
      slug: "cisco-ccna",
      description:
        "La Salle (2019). Fundamentos de redes: direccionamiento IP, switching/routing, VLANs, NAT, ACLs y troubleshooting.",
      details: [
        "Certificación profesional centrada en la configuración y mantenimiento de infraestructuras de red.",
        "Conocimientos avanzados en protocolos de routing (OSPF, EIGRP).",
        "Seguridad en capa 2, gestión de switches y routers Cisco.",
        "Resolución de problemas en redes corporativas.",
        "Implementación de direccionamiento IP y servicios de red."
      ],
      tech: ["Redes", "Cisco", "Routing/Switching"],
      link: "#"
    },
    {
      title: "GRADO SUPERIOR (ASIR) - Administración de Sistemas Informáticos en Red",
      slug: "asir",
      description:
        "La Salle (2017 – 2019). Administración Windows/Linux, servicios de red, servidores, Active Directory, seguridad y continuidad.",
      details: [
        "Ciclo Formativo de Grado Superior enfocado en la gestión de infraestructuras IT.",
        "Administración de servidores Windows Server (AD, GPOs) y Linux (ficheros, permisos, servicios).",
        "Configuración de servicios básicos de red (DHCP, DNS, FTP).",
        "Fundamentos de ciberseguridad y seguridad informática.",
        "Mantenimiento de sistemas y redes en entornos empresariales."
      ],
      tech: ["SysAdmin", "Windows/Linux", "Redes", "Servidores"],
      link: "#"
    }
  ],

  skills: [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "SCSS/SASS (arquitectura modular)", "JavaScript (ES6+)", "Bootstrap 5", "Responsive Design", "Componentes UI & micro-interacciones", "React", "Astro"]
    },
    {
      category: "Backend & CMS",
      items: ["PHP", "Drupal 9/10/11", "Módulos personalizados", "Twig (theming/templates/views)", "Hooks/Preprocess", "WordPress (customización/desarrollo)"]
    },
    {
      category: "Bases de Datos",
      items: ["SQL (Microsoft SQL, MariaDB, MySQL)", "Diseño de esquemas", "Optimización de consultas"]
    },
    {
      category: "Sistemas y Redes",
      items: ["Linux (openSUSE/SUSE)", "Windows (fundamentos de administración)", "Apache/PHP/MySQL", "DNS/puertos/redirecciones/IP", "Troubleshooting"]
    },
    {
      category: "Tooling",
      items: ["Git/GitLab/GitHub", "Node.js", "NVM", "Gulp", "Drush", "Composer"]
    },
    {
      category: "Accesibilidad / Calidad",
      items: ["WCAG", "W3C Validation", "Lighthouse (performance)", "Semántica HTML", "ARIA"]
    },
    {
      category: "Diseño & IA",
      items: ["Figma", "Adobe Photoshop", "IA generativa (código, UI/UX, imagen/vídeo)"]
    }
  ]
};

export { $$Layout as $, portfolioData as p };
