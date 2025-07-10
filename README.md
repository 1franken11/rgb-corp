# RGB Corporation - Astro Multilingual Website

Este proyecto es un sitio web multilingüe construido con [Astro](https://astro.build/), soportando español, inglés y portugués. Incluye internacionalización, componentes reutilizables, integración con Cloudinary, y un diseño moderno y responsivo.

## 🚀 Estructura del Proyecto

```
src/
  components/         # Componentes reutilizables (Navbar, Footer, etc.)
  context/            # Contextos de React/Astro (i18n, idioma)
  i18n/               # Utilidades y archivos de traducción JSON
  layouts/            # Layouts globales (MainLayout.astro)
  pages/              # Páginas por idioma y rutas principales
  styles/             # CSS global y módulos de estilos
  scripts/            # Scripts JS personalizados
  assets/             # Imágenes y recursos estáticos
```

## 🌐 Internacionalización (i18n)
- Traducciones en `/src/i18n/languages/` para `es`, `en`, `pt`.
- Utiliza hooks y utilidades para detectar idioma y traducir contenido dinámicamente.

## 🧩 Componentes Clave
- Navbar, Footer, TopBar, LanguageSelector, ProjectSection, ReviewsCarousel, ContactForm, etc.
- Todos los componentes usan i18n y estilos modernos.

## 📄 Páginas
- `index.astro` en cada idioma
- `about.astro`, `projects.astro`, `privacy.astro`, `404.astro`

## ⚙️ Scripts útiles
- `npm install` — Instala dependencias
- `npm run dev` — Inicia el servidor de desarrollo
- `npm run build` — Genera el sitio para producción
- `npm run preview` — Previsualiza el build

## 🛠️ Cómo contribuir
1. Haz un fork del repositorio
2. Crea una rama nueva: `git checkout -b feature/nueva-funcionalidad`
3. Haz tus cambios y commitea: `git commit -am 'Agrega nueva funcionalidad'`
4. Haz push a tu fork y abre un Pull Request

## 📝 Notas
- Asegúrate de que todas las traducciones estén completas antes de hacer deploy.
- El sitio es responsivo y accesible.
- Para imágenes y videos, se usa Cloudinary.

---

Hecho con ❤️ por RGB Corporation

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
