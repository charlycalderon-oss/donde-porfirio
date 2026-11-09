# Donde Porfirio · Tienda Café

Sitio informativo estático (HTML + CSS + JS), sin dependencias ni instalación.

## Correrlo
- Opción rápida: abrir `index.html` con doble clic (el mapa necesita internet).
- Con servidor local: en esta carpeta ejecutar `python3 -m http.server 8000` y abrir http://localhost:8000

## Archivos
- `index.html`: estructura y textos.
- `styles.css`: colores (variables en `:root`), tipografías y diseño responsive.
- `script.js`: solo la carta (objeto `M`, editable) con sus pestañas.
- `img/`: logo, fachada y atardecer. Para cambiar fotos, reemplazar los archivos con el mismo nombre.

## Mapa
Está en la sección `#ubicacion` de `index.html` y apunta a Hoyorrico, Santa Rosa de Osos. Para fijarlo en el local exacto: en Google Maps buscar el sitio, Compartir > Insertar un mapa, y pegar el `src` del iframe en lugar del actual. Actualizar también el enlace del botón “Abrir en Google Maps”.

## Pendiente por definir con el negocio
Dirección exacta, horarios, teléfono, redes sociales y más fotos.

## Publicar
Subir la carpeta tal cual a Netlify, Vercel, GitHub Pages o cualquier hosting estático.
