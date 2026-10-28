# Museo Virtual Deportivo Cali

Museo virtual del Deportivo Cali, hecho como proyecto de grado. Es una sala 3D que se recorre en primera persona desde el navegador, sin instalar nada. Las vitrinas muestran 14 piezas: trece títulos de liga (equipo masculino y femenino) y el subcampeonato de la Copa Libertadores Femenina 2025. Al acercarse a cada vitrina se abre la ficha con la historia de ese título, y la copa se puede girar en 3D o ver en realidad aumentada desde el celular.

## Cómo verlo

- **En línea:** si el repositorio tiene GitHub Pages activado, el museo está en `https://<usuario>.github.io/museo-virtual-deportivo-cali/`.
- **En el computador:** pulsa "Iniciar recorrido". Muévete con WASD o las flechas, mira con el mouse y pulsa E junto a una vitrina para ver la pieza. Esc suelta el mouse.
- **En el celular:** pulsa "Iniciar recorrido". Muévete con el joystick de la pantalla, arrastra con un dedo para mirar y toca el botón que aparece junto a cada vitrina.
- **Sin 3D:** si el navegador no tiene WebGL, se abre solo `recorrido-simple.html`, que muestra las mismas piezas una a la vez.

El avance se guarda en el navegador. Al visitar todas las piezas aparece una pantalla final con un código de **ejemplo** (`DEMO-MUSEO`): es una demostración, no un beneficio real.

## Ejecutarlo en local

Los módulos y los modelos no cargan abriendo `index.html` con doble clic; hace falta un servidor local. Con [Node.js](https://nodejs.org/) instalado, en la carpeta del proyecto:

```
npx serve
```

y abre http://localhost:3000. La realidad aumentada en el celular necesita HTTPS, así que para probarla conviene usar la versión publicada.

## Estructura

- `index.html`: sala 3D (experiencia principal)
- `recorrido-simple.html`: recorrido de una pieza a la vez, sin 3D en la sala
- `piezas.js`: contenido del museo (títulos, textos y modelo de cada vitrina, título de la sala, fotos e imagen de la bienvenida)
- `modelos/`: modelos 3D de las copas (`.glb`, comprimidos con Draco)
- `assets/`: imagen de la pantalla de bienvenida

## Tecnologías

- [three.js](https://threejs.org/) r160 para la sala 3D
- [model-viewer](https://modelviewer.dev/) 4.4.0 para ver cada copa de cerca y en realidad aumentada
- HTML y JavaScript, sin compilación ni servidor propio; se puede publicar en GitHub Pages

## Sobre los modelos 3D

Los modelos de las copas son **reconstrucciones aproximadas hechas a partir de fotografías, no escaneos** de los trofeos originales. Sus proporciones, medidas y detalles pueden diferir de las piezas reales.

## Créditos

- Las marcas y logos que aparecen en los trofeos (BetPlay, DIMAYOR y similares) pertenecen a sus titulares y se muestran solo porque forman parte de los trofeos originales.
- Librerías: three.js (licencia MIT) y model-viewer (licencia Apache 2.0).
- Más detalles en [CREDITS.md](CREDITS.md).
