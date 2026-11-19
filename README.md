# Prácticas Amelita

Portal de práctica para Amelia. Es un sitio estático (HTML, CSS y JavaScript, sin compilación). GitHub Pages puede publicarlo desde la raíz de la rama `main`.

Cuando Pages esté activo, el sitio queda en:

https://robertoayalad.github.io/Escuela-Amelia/

En la tablet Android: Chrome → menú → **Añadir a pantalla de inicio**. El nombre de la app es «Prácticas Amelita».

## Cómo agregar una actividad

1. Crea el archivo HTML dentro de la carpeta de la materia:

   - Ciencias / Science → `ciencias/`
   - Matemáticas → `matematicas/`
   - Inglés → `ingles/`
   - Lenguaje → `lenguaje/`
   - Estudios Sociales → `estudios-sociales/`

2. Abre `activities.js` y agrega **una línea** en `activities` de esa materia:

   ```js
   { title: "Nombre visible", href: "ciencias/mi-actividad.html" },
   ```

   `href` es la ruta del archivo desde el inicio. Si quieres un subtítulo, añade `detail`:

   ```js
   { title: "Nombre visible", href: "ciencias/mi-actividad.html", detail: "Una frase corta" },
   ```

3. Para volver al inicio desde una actividad que está en una carpeta, enlaza a `../index.html`. Puedes copiar la barra de «← Volver al inicio» de `ciencias/estados-de-la-materia.html` (usa `actividad.css`).

4. Sube los cambios a `main`. En un momento la actividad aparece en la tarjeta de la materia. Si `activities` está vacío, el inicio muestra «Próximamente».

## Publicar en GitHub Pages

Settings → Pages → Build and deployment → Deploy from a branch → rama `main`, carpeta `/` (root).

El archivo `.nojekyll` hace que Pages publique los archivos tal cual, sin pasarlos por Jekyll.
