import type { Content, Locale, Localized } from "./types";

/** Atajo para escribir las tres traducciones juntas y revisarlas de un vistazo. */
const l = <T>(es: T, ca: T, en: T): Localized<T> => ({ es, ca, en });

const es: Content = {
  meta: {
    title: "Shaila Martínez — Sistemas y Soporte IT",
    description:
      "Portafolio de Shaila Martínez, técnica en Administración de Sistemas y Soporte IT cursando ASIR, con experiencia en soporte informático en entornos educativos y hospitalarios.",
    keywords: [
      "Shaila Martínez",
      "ASIR",
      "sistemas",
      "redes",
      "soporte IT",
      "soporte técnico",
      "Linux",
      "Windows Server",
      "Active Directory",
      "Docker",
      "AWS Academy",
      "Cloud Foundations",
    ],
  },

  hero: {
    greeting: "Hola, soy",
    // Áreas confirmadas, usadas en el efecto de escritura.
    roles: ["Sistemas y Soporte IT", "Administración de sistemas", "Soporte a usuarios"],
    intro: null, // TODO: presentación de 1-2 líneas, pendiente de redactar juntos.
  },

  about: {
    // Biografía alineada con el CV (perfil de técnica, ASIR y carnet B).
    paragraphs: [
      "Técnica en Administración de Sistemas y Soporte IT, cursando el Grado Superior en Administración de Sistemas Informáticos en Red (ASIR). Tengo formación previa en Sistemas Microinformáticos y Redes (SMX) y experiencia en soporte informático en entornos educativos y hospitalarios, realizando tareas de resolución de incidencias, mantenimiento de equipos y soporte de redes y sistemas. Me interesa seguir aprendiendo y desarrollándome profesionalmente en el ámbito de la administración de sistemas y las tecnologías IT.",
    ],
    facts: [
      { label: "Enfoque", value: "Sistemas y Soporte IT" },
      { label: "Idiomas", value: "Español nativo · Catalán nativo · Inglés B1" },
      { label: "Carnet de conducir", value: "B" },
    ],
  },

  skills: {
    intro: null, // TODO
    groups: [
      {
        id: "os",
        title: l("Sistemas operativos", "Sistemes operatius", "Operating systems"),
        items: ["Linux", "Windows Server", "Windows 10/11", "Ubuntu", "Debian"],
      },
      {
        id: "networking",
        title: l("Redes y conectividad", "Xarxes i connectivitat", "Networking and connectivity"),
        items: ["DNS", "BIND9", "DHCP", "Kea", "VLAN", "Subnetting", "Wireshark", "Proxy"],
      },
      {
        id: "identity",
        title: l("Identidad y directorios", "Identitat i directoris", "Identity and directories"),
        items: ["Active Directory", "LDAP", "GPO"],
      },
      {
        id: "containers",
        title: l("Contenedores", "Contenidors", "Containers"),
        items: ["Docker", "Docker Compose"],
      },
      {
        id: "automation",
        title: l("Automatización y monitorización", "Automatització i monitoratge", "Automation and monitoring"),
        items: ["PowerShell", "Shell / Bash", "Prometheus", "Grafana"],
      },
      {
        id: "web",
        title: l("Desarrollo y bases de datos", "Desenvolupament i bases de dades", "Development and databases"),
        items: [
          "PHP",
          "Python",
          "HTML",
          "CSS",
          "XML",
          "JSON",
          "Apache",
          "MySQL / MariaDB",
          "PostgreSQL",
          "PL/pgSQL",
          "CustomTkinter",
          "Git",
        ],
      },
      {
        id: "security",
        title: l("Seguridad informática", "Seguretat informàtica", "IT security"),
        items: ["DNSSEC", "bcrypt", "Firewalls", "Copias de seguridad", "Hardening"],
      },
      {
        id: "data",
        title: l("Datos, ofimática y cloud", "Dades, ofimàtica i cloud", "Data, office and cloud"),
        items: ["Power BI", "Microsoft 365", "AWS (fundamentos)"],
      },
      {
        id: "soft-skills",
        title: l("Competencias", "Competències", "Soft skills"),
        items: [
          "Trabajo en equipo",
          "Organización y puntualidad",
          "Responsabilidad",
          "Autoaprendizaje",
          "Resolución de problemas",
        ],
      },
    ],
  },

  projects: {
    intro: "Selección de prácticas y proyectos académicos de ASIR. Cada ficha enlaza a su repositorio público, donde puedes consultar el código y la documentación.",
    items: [
      {
        slug: "servicios-red-internet",
        kind: "practica",
        title: l(
          "Servicios de red e Internet",
          "Serveis de xarxa i Internet",
          "Network and Internet Services",
        ),
        summary: l(
          "Colección de prácticas académicas de ASIR dedicadas a servicios de red e Internet. Reúne el despliegue de un servicio DHCP con Kea, su monitorización con Prometheus y Grafana, la configuración de alta disponibilidad con Kea Hot-Standby, un servidor DNS con BIND9 y la implementación de DNS dinámico con DNSSEC.",
          "Col·lecció de pràctiques acadèmiques d'ASIX dedicades a serveis de xarxa i Internet. Reuneix el desplegament d'un servei DHCP amb Kea, la seva monitorització amb Prometheus i Grafana, la configuració d'alta disponibilitat amb Kea Hot-Standby, un servidor DNS amb BIND9 i la implementació de DNS dinàmic amb DNSSEC.",
          "A collection of ASIR academic practices on network and Internet services. It covers the deployment of a DHCP service with Kea, its monitoring with Prometheus and Grafana, high availability with Kea Hot-Standby, a DNS server with BIND9, and dynamic DNS with DNSSEC.",
        ),
        highlights: l(
          [
            "Servicio DHCP con Kea",
            "Monitorización DHCP con Prometheus y Grafana",
            "Alta disponibilidad DHCP con Kea Hot-Standby",
            "Servidor DNS con BIND9",
            "DNS dinámico y DNSSEC",
          ],
          [
            "Servei DHCP amb Kea",
            "Monitoratge DHCP amb Prometheus i Grafana",
            "Alta disponibilitat DHCP amb Kea Hot-Standby",
            "Servidor DNS amb BIND9",
            "DNS dinàmic i DNSSEC",
          ],
          [
            "DHCP service with Kea",
            "DHCP monitoring with Prometheus and Grafana",
            "DHCP high availability with Kea Hot-Standby",
            "DNS server with BIND9",
            "Dynamic DNS and DNSSEC",
          ],
        ),
        stack: [
          "Kea",
          "BIND9",
          "DNS",
          "DHCP",
          "Prometheus",
          "Grafana",
          "Docker",
          "Python",
          "DNSSEC",
        ],
        status: null, // Pendiente: confirmar "finalizado" o "documentado".
        links: {
          demo: null,
          repo: "https://github.com/shailamgm/Network-and-Internet-services",
        },
        image: null,
      },
      {
        slug: "hospivibe",
        kind: "proyecto",
        title: l("HospiVibe", "HospiVibe", "HospiVibe"),
        summary: l(
          "Proyecto académico intermodular de ASIR consistente en una aplicación de gestión hospitalaria para administrar información de pacientes, personal médico y servicios del centro. El repositorio incluye la planificación, el diseño de la base de datos relacional, la conectividad y la autenticación, la seguridad, el mantenimiento, la alta disponibilidad, las consultas y la exportación de datos.",
          "Projecte acadèmic intermodular d'ASIX consistent en una aplicació de gestió hospitalària per administrar informació de pacients, personal mèdic i serveis del centre. El repositori inclou la planificació, el disseny de la base de dades relacional, la connectivitat i l'autenticació, la seguretat, el manteniment, l'alta disponibilitat, les consultes i l'exportació de dades.",
          "An ASIR cross-module academic project consisting of a hospital management application for handling patient, medical staff and hospital service information. The repository covers project planning, relational database design, database connectivity and authentication, security, maintenance, high availability, queries and data export.",
        ),
        highlights: l(
          [
            "Planificación del proyecto",
            "Diseño de la base de datos relacional",
            "Conectividad y autenticación",
            "Seguridad y control de acceso",
            "Mantenimiento de la base de datos",
            "Alta disponibilidad con replicación",
            "Consultas a la base de datos",
            "Exportación de datos",
          ],
          [
            "Planificació del projecte",
            "Disseny de la base de dades relacional",
            "Connectivitat i autenticació",
            "Seguretat i control d'accés",
            "Manteniment de la base de dades",
            "Alta disponibilitat amb replicació",
            "Consultes a la base de dades",
            "Exportació de dades",
          ],
          [
            "Project planning",
            "Relational database design",
            "Database connectivity and authentication",
            "Security and access control",
            "Database maintenance",
            "High availability with replication",
            "Database queries",
            "Data export",
          ],
        ),
        stack: [
          "Python",
          "PostgreSQL",
          "CustomTkinter",
          "bcrypt",
          "PL/pgSQL",
          "Power BI",
          "Shell",
          "Linux",
        ],
        status: null, // Pendiente: confirmar "finalizado" o "documentado".
        links: {
          demo: null,
          repo: "https://github.com/shailamgm/Projecte_intermodular_ASIX_HOSPITAL",
        },
        image: null,
      },
    ],
  },

  experience: {
    intro: null, // TODO
    practice: [
      {
        id: "hospital-blanes",
        organization: l("Hospital Comarcal de Blanes", "Hospital Comarcal de Blanes", "Hospital Comarcal de Blanes"),
        role: l(
          "Sistemas y Soporte IT",
          "Sistemes i Suport IT",
          "Systems and IT Support",
        ),
        period: l(
          "Del 25/02/2026 a la actualidad",
          "Del 25/02/2026 a l'actualitat",
          "From 25 Feb 2026 to present",
        ),
        status: null,
        description: null, // TODO
        tasks: l(
          [
            "Atención y resolución de incidencias técnicas a usuarios",
            "Gestión y mantenimiento de equipos informáticos",
            "Soporte en redes y sistemas",
            "Instalación, configuración y actualización de software",
          ],
          [
            "Atenció i resolució d'incidències tècniques als usuaris",
            "Gestió i manteniment d'equips informàtics",
            "Suport en xarxes i sistemes",
            "Instal·lació, configuració i actualització de programari",
          ],
          [
            "Handling and resolving technical incidents for users",
            "IT equipment management and maintenance",
            "Network and systems support",
            "Software installation, configuration and updates",
          ],
        ),
      },
      {
        id: "escola-joaquim-ruyra",
        organization: l(
          "Escola Joaquim Ruyra",
          "Escola Joaquim Ruyra",
          "Escola Joaquim Ruyra",
        ),
        role: l(
          "Soporte técnico",
          "Suport tècnic",
          "Technical support",
        ),
        period: l(
          "Del 01/10/2024 al 10/03/2025",
          "Del 01/10/2024 al 10/03/2025",
          "From 1 Oct 2024 to 10 Mar 2025",
        ),
        status: "finalizado",
        description: null, // TODO
        tasks: l(
          [
            "Soporte técnico a alumnos y profesores",
            "Mantenimiento de equipos",
            "Resolución de incidencias mediante herramientas digitales",
          ],
          [
            "Suport tècnic a alumnes i professors",
            "Manteniment d'equips",
            "Resolució d'incidències mitjançant eines digitals",
          ],
          [
            "Technical support for students and teachers",
            "Equipment maintenance",
            "Troubleshooting incidents using digital tools",
          ],
        ),
      },
    ],
    education: [
      {
        id: "asix",
        title: l(
          "Administración de Sistemas Informáticos en Red (ASIR)",
          "Administració de Sistemes Informàtics en Xarxa (ASIX)",
          "Network Computer Systems Administration (ASIR)",
        ),
        center: "Sa Palomera, Blanes",
        period: l("Desde el 12/09/2025", "Des del 12/09/2025", "Since 12 Sep 2025"),
        status: "en-curso",
      },
      {
        id: "smx",
        title: l(
          "Sistemas Microinformáticos y Redes (SMX)",
          "Sistemes Microinformàtics i Xarxes (SMX)",
          "Microcomputer Systems and Networks (SMX)",
        ),
        center: "Sa Palomera, Blanes",
        period: l(
          "Del 07/09/2023 al 30/05/2025",
          "Del 07/09/2023 al 30/05/2025",
          "From 7 Sep 2023 to 30 May 2025",
        ),
        status: "finalizado",
      },
    ],
    certifications: [
      {
        id: "word-specialist",
        name: "Microsoft Office Word Specialist",
        issuer: "Certiport",
        year: null, // TODO
      },
      {
        id: "aws-cloud-foundations",
        name: "AWS Academy Graduate – Cloud Foundations",
        issuer: "AWS Academy",
        year: null, // TODO: no se inventa el año.
      },
    ],
  },

  contact: {
    intro: null, // TODO
  },
};

const ca: Content = {
  meta: {
    title: "Shaila Martínez — Sistemes i Suport IT",
    description:
      "Portafolis de Shaila Martínez, tècnica en Administració de Sistemes i Suport IT cursant ASIX, amb experiència en suport informàtic en entorns educatius i hospitalaris.",
    keywords: [
      "Shaila Martínez",
      "ASIX",
      "sistemes",
      "xarxes",
      "suport IT",
      "suport tècnic",
      "Linux",
      "Windows Server",
      "Active Directory",
      "Docker",
      "AWS Academy",
      "Cloud Foundations",
    ],
  },

  hero: {
    greeting: "Hola, sóc",
    roles: ["Sistemes i Suport IT", "Administració de sistemes", "Suport a usuaris"],
    intro: null,
  },

  about: {
    paragraphs: [
      "Tècnica en Administració de Sistemes i Suport IT, cursant el Grau Superior en Administració de Sistemes Informàtics en Xarxa (ASIX). Tinc formació prèvia en Sistemes Microinformàtics i Xarxes (SMX) i experiència en suport informàtic en entorns educatius i hospitalaris, duent a terme tasques de resolució d'incidències, manteniment d'equips i suport de xarxes i sistemes. M'interessa continuar aprenent i desenvolupant-me professionalment en l'àmbit de l'administració de sistemes i les tecnologies IT.",
    ],
    facts: [
      { label: "Enfocament", value: "Sistemes i Suport IT" },
      { label: "Idiomes", value: "Espanyol natiu · Català natiu · Anglès B1" },
      { label: "Carnet de conduir", value: "B" },
    ],
  },

  skills: {
    intro: null,
    groups: [
      {
        id: "os",
        title: l("Sistemas operativos", "Sistemes operatius", "Operating systems"),
        items: ["Linux", "Windows Server", "Windows 10/11", "Ubuntu", "Debian"],
      },
      {
        id: "networking",
        title: l("Redes y conectividad", "Xarxes i connectivitat", "Networking and connectivity"),
        items: ["DNS", "BIND9", "DHCP", "Kea", "VLAN", "Subnetting", "Wireshark", "Proxy"],
      },
      {
        id: "identity",
        title: l("Identidad y directorios", "Identitat i directoris", "Identity and directories"),
        items: ["Active Directory", "LDAP", "GPO"],
      },
      {
        id: "containers",
        title: l("Contenedores", "Contenidors", "Containers"),
        items: ["Docker", "Docker Compose"],
      },
      {
        id: "automation",
        title: l("Automatización y monitorización", "Automatització i monitoratge", "Automation and monitoring"),
        items: ["PowerShell", "Shell / Bash", "Prometheus", "Grafana"],
      },
      {
        id: "web",
        title: l("Desarrollo y bases de datos", "Desenvolupament i bases de dades", "Development and databases"),
        items: [
          "PHP",
          "Python",
          "HTML",
          "CSS",
          "XML",
          "JSON",
          "Apache",
          "MySQL / MariaDB",
          "PostgreSQL",
          "PL/pgSQL",
          "CustomTkinter",
          "Git",
        ],
      },
      {
        id: "security",
        title: l("Seguridad informática", "Seguretat informàtica", "IT security"),
        items: ["DNSSEC", "bcrypt", "Firewalls", "Còpies de seguretat", "Hardening"],
      },
      {
        id: "data",
        title: l("Datos, ofimática y cloud", "Dades, ofimàtica i cloud", "Data, office and cloud"),
        items: ["Power BI", "Microsoft 365", "AWS (fonaments)"],
      },
      {
        id: "soft-skills",
        title: l("Competencias", "Competències", "Soft skills"),
        items: [
          "Treball en equip",
          "Organització i puntualitat",
          "Responsabilitat",
          "Autoaprenentatge",
          "Resolució de problemes",
        ],
      },
    ],
  },

  projects: {
    intro: "Selecció de pràctiques i projectes acadèmics d'ASIX. Cada fitxa enllaça al seu repositori públic, on pots consultar el codi i la documentació.",
    items: [
      {
        slug: "servicios-red-internet",
        kind: "practica",
        title: l(
          "Servicios de red e Internet",
          "Serveis de xarxa i Internet",
          "Network and Internet Services",
        ),
        summary: l(
          "Colección de prácticas académicas de ASIR dedicadas a servicios de red e Internet. Reúne el despliegue de un servicio DHCP con Kea, su monitorización con Prometheus y Grafana, la configuración de alta disponibilidad con Kea Hot-Standby, un servidor DNS con BIND9 y la implementación de DNS dinámico con DNSSEC.",
          "Col·lecció de pràctiques acadèmiques d'ASIX dedicades a serveis de xarxa i Internet. Reuneix el desplegament d'un servei DHCP amb Kea, la seva monitorització amb Prometheus i Grafana, la configuració d'alta disponibilitat amb Kea Hot-Standby, un servidor DNS amb BIND9 i la implementació de DNS dinàmic amb DNSSEC.",
          "A collection of ASIR academic practices on network and Internet services. It covers the deployment of a DHCP service with Kea, its monitoring with Prometheus and Grafana, high availability with Kea Hot-Standby, a DNS server with BIND9, and dynamic DNS with DNSSEC.",
        ),
        highlights: l(
          [
            "Servicio DHCP con Kea",
            "Monitorización DHCP con Prometheus y Grafana",
            "Alta disponibilidad DHCP con Kea Hot-Standby",
            "Servidor DNS con BIND9",
            "DNS dinámico y DNSSEC",
          ],
          [
            "Servei DHCP amb Kea",
            "Monitoratge DHCP amb Prometheus i Grafana",
            "Alta disponibilitat DHCP amb Kea Hot-Standby",
            "Servidor DNS amb BIND9",
            "DNS dinàmic i DNSSEC",
          ],
          [
            "DHCP service with Kea",
            "DHCP monitoring with Prometheus and Grafana",
            "DHCP high availability with Kea Hot-Standby",
            "DNS server with BIND9",
            "Dynamic DNS and DNSSEC",
          ],
        ),
        stack: [
          "Kea",
          "BIND9",
          "DNS",
          "DHCP",
          "Prometheus",
          "Grafana",
          "Docker",
          "Python",
          "DNSSEC",
        ],
        status: null, // Pendiente: confirmar "finalizado" o "documentado".
        links: {
          demo: null,
          repo: "https://github.com/shailamgm/Network-and-Internet-services",
        },
        image: null,
      },
      {
        slug: "hospivibe",
        kind: "proyecto",
        title: l("HospiVibe", "HospiVibe", "HospiVibe"),
        summary: l(
          "Proyecto académico intermodular de ASIR consistente en una aplicación de gestión hospitalaria para administrar información de pacientes, personal médico y servicios del centro. El repositorio incluye la planificación, el diseño de la base de datos relacional, la conectividad y la autenticación, la seguridad, el mantenimiento, la alta disponibilidad, las consultas y la exportación de datos.",
          "Projecte acadèmic intermodular d'ASIX consistent en una aplicació de gestió hospitalària per administrar informació de pacients, personal mèdic i serveis del centre. El repositori inclou la planificació, el disseny de la base de dades relacional, la connectivitat i l'autenticació, la seguretat, el manteniment, l'alta disponibilitat, les consultes i l'exportació de dades.",
          "An ASIR cross-module academic project consisting of a hospital management application for handling patient, medical staff and hospital service information. The repository covers project planning, relational database design, database connectivity and authentication, security, maintenance, high availability, queries and data export.",
        ),
        highlights: l(
          [
            "Planificación del proyecto",
            "Diseño de la base de datos relacional",
            "Conectividad y autenticación",
            "Seguridad y control de acceso",
            "Mantenimiento de la base de datos",
            "Alta disponibilidad con replicación",
            "Consultas a la base de datos",
            "Exportación de datos",
          ],
          [
            "Planificació del projecte",
            "Disseny de la base de dades relacional",
            "Connectivitat i autenticació",
            "Seguretat i control d'accés",
            "Manteniment de la base de dades",
            "Alta disponibilitat amb replicació",
            "Consultes a la base de dades",
            "Exportació de dades",
          ],
          [
            "Project planning",
            "Relational database design",
            "Database connectivity and authentication",
            "Security and access control",
            "Database maintenance",
            "High availability with replication",
            "Database queries",
            "Data export",
          ],
        ),
        stack: [
          "Python",
          "PostgreSQL",
          "CustomTkinter",
          "bcrypt",
          "PL/pgSQL",
          "Power BI",
          "Shell",
          "Linux",
        ],
        status: null, // Pendiente: confirmar "finalizado" o "documentado".
        links: {
          demo: null,
          repo: "https://github.com/shailamgm/Projecte_intermodular_ASIX_HOSPITAL",
        },
        image: null,
      },
    ],
  },

  experience: {
    intro: null,
    practice: [
      {
        id: "hospital-blanes",
        organization: l("Hospital Comarcal de Blanes", "Hospital Comarcal de Blanes", "Hospital Comarcal de Blanes"),
        role: l(
          "Sistemas y Soporte IT",
          "Sistemes i Suport IT",
          "Systems and IT Support",
        ),
        period: l(
          "Del 25/02/2026 a la actualidad",
          "Del 25/02/2026 a l'actualitat",
          "From 25 Feb 2026 to present",
        ),
        status: null,
        description: null,
        tasks: l(
          [
            "Atención y resolución de incidencias técnicas a usuarios",
            "Gestión y mantenimiento de equipos informáticos",
            "Soporte en redes y sistemas",
            "Instalación, configuración y actualización de software",
          ],
          [
            "Atenció i resolució d'incidències tècniques als usuaris",
            "Gestió i manteniment d'equips informàtics",
            "Suport en xarxes i sistemes",
            "Instal·lació, configuració i actualització de programari",
          ],
          [
            "Handling and resolving technical incidents for users",
            "IT equipment management and maintenance",
            "Network and systems support",
            "Software installation, configuration and updates",
          ],
        ),
      },
      {
        id: "escola-joaquim-ruyra",
        organization: l(
          "Escola Joaquim Ruyra",
          "Escola Joaquim Ruyra",
          "Escola Joaquim Ruyra",
        ),
        role: l(
          "Soporte técnico",
          "Suport tècnic",
          "Technical support",
        ),
        period: l(
          "Del 01/10/2024 al 10/03/2025",
          "Del 01/10/2024 al 10/03/2025",
          "From 1 Oct 2024 to 10 Mar 2025",
        ),
        status: "finalizado",
        description: null,
        tasks: l(
          [
            "Soporte técnico a alumnos y profesores",
            "Mantenimiento de equipos",
            "Resolución de incidencias mediante herramientas digitales",
          ],
          [
            "Suport tècnic a alumnes i professors",
            "Manteniment d'equips",
            "Resolució d'incidències mitjançant eines digitals",
          ],
          [
            "Technical support for students and teachers",
            "Equipment maintenance",
            "Troubleshooting incidents using digital tools",
          ],
        ),
      },
    ],
    education: [
      {
        id: "asix",
        title: l(
          "Administración de Sistemas Informáticos en Red (ASIR)",
          "Administració de Sistemes Informàtics en Xarxa (ASIX)",
          "Network Computer Systems Administration (ASIR)",
        ),
        center: "Sa Palomera, Blanes",
        period: l("Desde el 12/09/2025", "Des del 12/09/2025", "Since 12 Sep 2025"),
        status: "en-curso",
      },
      {
        id: "smx",
        title: l(
          "Sistemas Microinformáticos y Redes (SMX)",
          "Sistemes Microinformàtics i Xarxes (SMX)",
          "Microcomputer Systems and Networks (SMX)",
        ),
        center: "Sa Palomera, Blanes",
        period: l(
          "Del 07/09/2023 al 30/05/2025",
          "Del 07/09/2023 al 30/05/2025",
          "From 7 Sep 2023 to 30 May 2025",
        ),
        status: "finalizado",
      },
    ],
    certifications: [
      {
        id: "word-specialist",
        name: "Microsoft Office Word Specialist",
        issuer: "Certiport",
        year: null,
      },
      {
        id: "aws-cloud-foundations",
        name: "AWS Academy Graduate – Cloud Foundations",
        issuer: "AWS Academy",
        year: null,
      },
    ],
  },

  contact: {
    intro: null,
  },
};

const en: Content = {
  meta: {
    title: "Shaila Martínez — Systems and IT Support",
    description:
      "Portfolio of Shaila Martínez, a Systems Administration and IT Support technician currently studying ASIR, with IT support experience in educational and hospital environments.",
    keywords: [
      "Shaila Martínez",
      "ASIR",
      "systems",
      "networking",
      "IT support",
      "technical support",
      "Linux",
      "Windows Server",
      "Active Directory",
      "Docker",
      "AWS Academy",
      "Cloud Foundations",
    ],
  },

  hero: {
    greeting: "Hi, I'm",
    roles: ["Systems and IT Support", "Systems administration", "User support"],
    intro: null,
  },

  about: {
    paragraphs: [
      "I'm a Systems Administration and IT Support technician, currently studying the Advanced Vocational Degree in Network Computer Systems Administration (ASIR). I have previous training in Microcomputer Systems and Networks (SMX) and experience in IT support in educational and hospital environments, handling incident resolution, equipment maintenance and network and systems support. I'm eager to continue learning and growing professionally in systems administration and IT.",
    ],
    facts: [
      { label: "Focus", value: "Systems and IT Support" },
      { label: "Languages", value: "Spanish (native) · Catalan (native) · English B1" },
      { label: "Driving licence", value: "B" },
    ],
  },

  skills: {
    intro: null,
    groups: [
      {
        id: "os",
        title: l("Sistemas operativos", "Sistemes operatius", "Operating systems"),
        items: ["Linux", "Windows Server", "Windows 10/11", "Ubuntu", "Debian"],
      },
      {
        id: "networking",
        title: l("Redes y conectividad", "Xarxes i connectivitat", "Networking and connectivity"),
        items: ["DNS", "BIND9", "DHCP", "Kea", "VLAN", "Subnetting", "Wireshark", "Proxy"],
      },
      {
        id: "identity",
        title: l("Identidad y directorios", "Identitat i directoris", "Identity and directories"),
        items: ["Active Directory", "LDAP", "GPO"],
      },
      {
        id: "containers",
        title: l("Contenedores", "Contenidors", "Containers"),
        items: ["Docker", "Docker Compose"],
      },
      {
        id: "automation",
        title: l("Automatización y monitorización", "Automatització i monitoratge", "Automation and monitoring"),
        items: ["PowerShell", "Shell / Bash", "Prometheus", "Grafana"],
      },
      {
        id: "web",
        title: l("Desarrollo y bases de datos", "Desenvolupament i bases de dades", "Development and databases"),
        items: [
          "PHP",
          "Python",
          "HTML",
          "CSS",
          "XML",
          "JSON",
          "Apache",
          "MySQL / MariaDB",
          "PostgreSQL",
          "PL/pgSQL",
          "CustomTkinter",
          "Git",
        ],
      },
      {
        id: "security",
        title: l("Seguridad informática", "Seguretat informàtica", "IT security"),
        items: ["DNSSEC", "bcrypt", "Firewalls", "Backups", "Hardening"],
      },
      {
        id: "data",
        title: l("Datos, ofimática y cloud", "Dades, ofimàtica i cloud", "Data, office and cloud"),
        items: ["Power BI", "Microsoft 365", "AWS (fundamentals)"],
      },
      {
        id: "soft-skills",
        title: l("Competencias", "Competències", "Soft skills"),
        items: [
          "Teamwork",
          "Organization and punctuality",
          "Responsibility",
          "Self-learning",
          "Problem solving",
        ],
      },
    ],
  },

  projects: {
    intro: "A selection of ASIR academic practices and projects. Each entry links to its public repository, where you can browse the code and documentation.",
    items: [
      {
        slug: "servicios-red-internet",
        kind: "practica",
        title: l(
          "Servicios de red e Internet",
          "Serveis de xarxa i Internet",
          "Network and Internet Services",
        ),
        summary: l(
          "Colección de prácticas académicas de ASIR dedicadas a servicios de red e Internet. Reúne el despliegue de un servicio DHCP con Kea, su monitorización con Prometheus y Grafana, la configuración de alta disponibilidad con Kea Hot-Standby, un servidor DNS con BIND9 y la implementación de DNS dinámico con DNSSEC.",
          "Col·lecció de pràctiques acadèmiques d'ASIX dedicades a serveis de xarxa i Internet. Reuneix el desplegament d'un servei DHCP amb Kea, la seva monitorització amb Prometheus i Grafana, la configuració d'alta disponibilitat amb Kea Hot-Standby, un servidor DNS amb BIND9 i la implementació de DNS dinàmic amb DNSSEC.",
          "A collection of ASIR academic practices on network and Internet services. It covers the deployment of a DHCP service with Kea, its monitoring with Prometheus and Grafana, high availability with Kea Hot-Standby, a DNS server with BIND9, and dynamic DNS with DNSSEC.",
        ),
        highlights: l(
          [
            "Servicio DHCP con Kea",
            "Monitorización DHCP con Prometheus y Grafana",
            "Alta disponibilidad DHCP con Kea Hot-Standby",
            "Servidor DNS con BIND9",
            "DNS dinámico y DNSSEC",
          ],
          [
            "Servei DHCP amb Kea",
            "Monitoratge DHCP amb Prometheus i Grafana",
            "Alta disponibilitat DHCP amb Kea Hot-Standby",
            "Servidor DNS amb BIND9",
            "DNS dinàmic i DNSSEC",
          ],
          [
            "DHCP service with Kea",
            "DHCP monitoring with Prometheus and Grafana",
            "DHCP high availability with Kea Hot-Standby",
            "DNS server with BIND9",
            "Dynamic DNS and DNSSEC",
          ],
        ),
        stack: [
          "Kea",
          "BIND9",
          "DNS",
          "DHCP",
          "Prometheus",
          "Grafana",
          "Docker",
          "Python",
          "DNSSEC",
        ],
        status: null, // Pendiente: confirmar "finalizado" o "documentado".
        links: {
          demo: null,
          repo: "https://github.com/shailamgm/Network-and-Internet-services",
        },
        image: null,
      },
      {
        slug: "hospivibe",
        kind: "proyecto",
        title: l("HospiVibe", "HospiVibe", "HospiVibe"),
        summary: l(
          "Proyecto académico intermodular de ASIR consistente en una aplicación de gestión hospitalaria para administrar información de pacientes, personal médico y servicios del centro. El repositorio incluye la planificación, el diseño de la base de datos relacional, la conectividad y la autenticación, la seguridad, el mantenimiento, la alta disponibilidad, las consultas y la exportación de datos.",
          "Projecte acadèmic intermodular d'ASIX consistent en una aplicació de gestió hospitalària per administrar informació de pacients, personal mèdic i serveis del centre. El repositori inclou la planificació, el disseny de la base de dades relacional, la connectivitat i l'autenticació, la seguretat, el manteniment, l'alta disponibilitat, les consultes i l'exportació de dades.",
          "An ASIR cross-module academic project consisting of a hospital management application for handling patient, medical staff and hospital service information. The repository covers project planning, relational database design, database connectivity and authentication, security, maintenance, high availability, queries and data export.",
        ),
        highlights: l(
          [
            "Planificación del proyecto",
            "Diseño de la base de datos relacional",
            "Conectividad y autenticación",
            "Seguridad y control de acceso",
            "Mantenimiento de la base de datos",
            "Alta disponibilidad con replicación",
            "Consultas a la base de datos",
            "Exportación de datos",
          ],
          [
            "Planificació del projecte",
            "Disseny de la base de dades relacional",
            "Connectivitat i autenticació",
            "Seguretat i control d'accés",
            "Manteniment de la base de dades",
            "Alta disponibilitat amb replicació",
            "Consultes a la base de dades",
            "Exportació de dades",
          ],
          [
            "Project planning",
            "Relational database design",
            "Database connectivity and authentication",
            "Security and access control",
            "Database maintenance",
            "High availability with replication",
            "Database queries",
            "Data export",
          ],
        ),
        stack: [
          "Python",
          "PostgreSQL",
          "CustomTkinter",
          "bcrypt",
          "PL/pgSQL",
          "Power BI",
          "Shell",
          "Linux",
        ],
        status: null, // Pendiente: confirmar "finalizado" o "documentado".
        links: {
          demo: null,
          repo: "https://github.com/shailamgm/Projecte_intermodular_ASIX_HOSPITAL",
        },
        image: null,
      },
    ],
  },

  experience: {
    intro: null,
    practice: [
      {
        id: "hospital-blanes",
        organization: l("Hospital Comarcal de Blanes", "Hospital Comarcal de Blanes", "Hospital Comarcal de Blanes"),
        role: l(
          "Sistemas y Soporte IT",
          "Sistemes i Suport IT",
          "Systems and IT Support",
        ),
        period: l(
          "Del 25/02/2026 a la actualidad",
          "Del 25/02/2026 a l'actualitat",
          "From 25 Feb 2026 to present",
        ),
        status: null,
        description: null,
        tasks: l(
          [
            "Atención y resolución de incidencias técnicas a usuarios",
            "Gestión y mantenimiento de equipos informáticos",
            "Soporte en redes y sistemas",
            "Instalación, configuración y actualización de software",
          ],
          [
            "Atenció i resolució d'incidències tècniques als usuaris",
            "Gestió i manteniment d'equips informàtics",
            "Suport en xarxes i sistemes",
            "Instal·lació, configuració i actualització de programari",
          ],
          [
            "Handling and resolving technical incidents for users",
            "IT equipment management and maintenance",
            "Network and systems support",
            "Software installation, configuration and updates",
          ],
        ),
      },
      {
        id: "escola-joaquim-ruyra",
        organization: l(
          "Escola Joaquim Ruyra",
          "Escola Joaquim Ruyra",
          "Escola Joaquim Ruyra",
        ),
        role: l(
          "Soporte técnico",
          "Suport tècnic",
          "Technical support",
        ),
        period: l(
          "Del 01/10/2024 al 10/03/2025",
          "Del 01/10/2024 al 10/03/2025",
          "From 1 Oct 2024 to 10 Mar 2025",
        ),
        status: "finalizado",
        description: null,
        tasks: l(
          [
            "Soporte técnico a alumnos y profesores",
            "Mantenimiento de equipos",
            "Resolución de incidencias mediante herramientas digitales",
          ],
          [
            "Suport tècnic a alumnes i professors",
            "Manteniment d'equips",
            "Resolució d'incidències mitjançant eines digitals",
          ],
          [
            "Technical support for students and teachers",
            "Equipment maintenance",
            "Troubleshooting incidents using digital tools",
          ],
        ),
      },
    ],
    education: [
      {
        id: "asix",
        title: l(
          "Administración de Sistemas Informáticos en Red (ASIR)",
          "Administració de Sistemes Informàtics en Xarxa (ASIX)",
          "Network Computer Systems Administration (ASIR)",
        ),
        center: "Sa Palomera, Blanes",
        period: l("Desde el 12/09/2025", "Des del 12/09/2025", "Since 12 Sep 2025"),
        status: "en-curso",
      },
      {
        id: "smx",
        title: l(
          "Sistemas Microinformáticos y Redes (SMX)",
          "Sistemes Microinformàtics i Xarxes (SMX)",
          "Microcomputer Systems and Networks (SMX)",
        ),
        center: "Sa Palomera, Blanes",
        period: l(
          "Del 07/09/2023 al 30/05/2025",
          "Del 07/09/2023 al 30/05/2025",
          "From 7 Sep 2023 to 30 May 2025",
        ),
        status: "finalizado",
      },
    ],
    certifications: [
      {
        id: "word-specialist",
        name: "Microsoft Office Word Specialist",
        issuer: "Certiport",
        year: null,
      },
      {
        id: "aws-cloud-foundations",
        name: "AWS Academy Graduate – Cloud Foundations",
        issuer: "AWS Academy",
        year: null,
      },
    ],
  },

  contact: {
    intro: null,
  },
};

export const content: Record<Locale, Content> = { es, ca, en };

export const getContent = (locale: Locale): Content => content[locale];
