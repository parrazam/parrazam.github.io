# parrazam.github.io

Página personal de proyectos servida en **[proyectos.parravidales.es](https://proyectos.parravidales.es)** vía GitHub Pages.

Una pequeña vitrina con los proyectos personales que tengo activos. La selección cambia con el tiempo.

## Stack

Sitio estático sin build: HTML + CSS + un puñado de líneas de JS para el toggle de tema.

```
.
├── CNAME             # dominio personalizado
├── index.html        # landing
└── assets/
    ├── logo.png      # marca / favicon
    ├── style.css     # tema Snorkel Blue + claro/oscuro
    └── script.js     # toggle de tema (con persistencia y respeto a prefers-color-scheme)
```

## Diseño

- Paleta basada en **Pantone 19-4049 Snorkel Blue** (`#034F84`)
- Modo claro y oscuro con toggle manual y respeto al sistema
- Tipografía: [Inter](https://rsms.me/inter/) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

## Editar la lista de proyectos

Cada proyecto es un bloque `<article class="project-card">` en `index.html`. Para añadir o quitar uno:

1. Duplica un `<article>` existente
2. Cambia el `<h3>`, la descripción y los enlaces del `<footer>`
3. Personaliza el icono cambiando el SVG y la variable `--card-accent` del `.card-icon`

## Despliegue

Cualquier push a la rama por defecto se publica automáticamente vía GitHub Pages.
El dominio personalizado se configura mediante el archivo [`CNAME`](./CNAME).
