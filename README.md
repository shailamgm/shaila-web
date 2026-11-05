# Portfolio personal — Shaila Martínez

Portfolio web personal desarrollado para presentar mi perfil profesional, formación, experiencia, conocimientos técnicos y proyectos.

El proyecto está diseñado como una web moderna, responsive y accesible, con soporte para varios idiomas y modo claro y oscuro.

## Tecnologías utilizadas

- **Next.js** — Framework de React.
- **React** — Desarrollo de la interfaz.
- **TypeScript** — Tipado estático.
- **Tailwind CSS** — Estilos y diseño responsive.
- **CSS** — Personalización visual y animaciones.
- **Formspree** — Gestión del formulario de contacto.

## Características

- Diseño responsive adaptado a escritorio, tablet y móvil.
- Interfaz disponible en español, catalán e inglés.
- Modo claro y oscuro.
- Secciones de presentación, sobre mí, habilidades, proyectos y experiencia.
- Formulario de contacto funcional.
- Enlaces a GitHub y LinkedIn.
- Visualización y descarga del currículum en PDF.
- Animaciones sutiles y soporte para preferencias de movimiento reducido.
- Buenas prácticas de accesibilidad y posicionamiento SEO.

## Instalación y ejecución local

### Requisitos

- Node.js
- npm

### 1. Clonar el repositorio

```bash
git clone https://github.com/shailamgm/shaila-web.git
cd shaila-web
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:3000
```

## Estructura del proyecto

```text
shaila-web/
├── public/              # Recursos estáticos y currículum PDF
├── src/
│   ├── app/             # Rutas y configuración de Next.js
│   ├── components/      # Componentes de la interfaz
│   ├── dictionaries/    # Traducciones ES, CA y EN
│   └── lib/             # Funciones y utilidades
├── package.json
└── README.md
```

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión de producción |
| `npm run start` | Inicia la aplicación en producción |
| `npm run lint` | Ejecuta ESLint |

## Autoría

**Shaila Martínez**

- GitHub: [@shailamgm](https://github.com/shailamgm)
- LinkedIn: [Perfil profesional](https://www.linkedin.com/in/shaila-martinez-gonzalez-de-molina)

---

<p align="center">
  Desarrollado con Next.js, TypeScript y Tailwind CSS.
</p>
