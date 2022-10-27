# GIFPls

![GitHub Status](https://img.shields.io/badge/Status-En%20desarrollo-brightgreen)

Explora y descubre divertidos Gif y Stickers animados mediante este sitio web donde podrás conocer las tendencias diarias, realizar búsquedas con sugerencias, agregar a favoritos y más.

## Tabla de contenidos

- [Características del proyecto](#caracteristicas-del-proyecto)
- [Flujo del sistema](#flujo-del-sistema)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
  - [Diseño del prototipo](#diseño-del-prototipo)
  - [Entorno de configuración](#entorno-de-configuración)
  - [Tecnologías](#tecnologías)
  - [API](#api)
  - [Biblioteca](#biblioteca)
- [Despliegue](#despliegue)
- [Documentación](#documentación)

## 📋 Caracteristicas del proyecto <a name="caracteristicas-del-proyecto"></a>

<img src="https://user-images.githubusercontent.com/44626985/197085733-5f6e30d3-ef8c-4cc8-9802-155b398650a3.gif" width="180" align="left" />

### ⠀⠀Encuentra GIF y Stickers

⠀⠀Realiza búsquedas de gif y stickers por separado.

### ⠀⠀Búsqueda de gif aleatorio

⠀⠀¿No sabes que buscar? Prueba la opción de generar un gif aleatorio y diviertete! <br>
⠀⠀Además, podrás agregar la imagen a la sección de favoritos, copiar el enlace o descargarlo.

<img src="https://user-images.githubusercontent.com/44626985/197076433-0857c2e7-8bb3-4304-85f2-6b00279bd36c.gif" width="200" align="right" />

### Sugerencia de búsqueda

ㅤㅤㅤㅤㅤGIFPls trae un motor de búsqueda en base a las búsquedas populares que realizan las personas y que guardan relación con las palabras que introduces.

<img src="https://user-images.githubusercontent.com/44626985/197077078-0cbd1217-102b-4a34-b2d7-eabcb8876fbd.gif" width="300" align="left"/>

### ‍‍‍‍‍⠀⠀ㅤSección de tendencias

⠀ㅤEncuentra los términos de búsqueda más populares del día.

<img src="https://user-images.githubusercontent.com/44626985/197085343-f36b9441-6d1a-485c-811a-8cb7c5109953.gif" width="200" align="right"/>

### Temas claro/oscuro

GIFPls permite que puedas cambiar entre el modo claro y oscuro para que puedas buscar tus gifs favoritos con mayor comodidad. Además, cuenta con cambio predeterminado en base a la preferencia del navegador.

### Guardado en favoritos

Agrega, elimina y comparte los gifs y stickers que te gustaron para poder encontrarlos más fácilmente en el futuro. <br>
**_Nota: La lista de favoritos se almacenan en el navegador sin necesidad de crearse una cuenta._**

## ↪️ Flujo del sistema <a name="flujo-del-sistema"></a>

**Diagrama de flujo** [Abrir en Figma](https://www.figma.com/file/Yx6gfpIu7ybjEW1VqQdeZ6/Diagrama-de-flujo---GifPls?node-id=0%3A1)
![flowchart](https://user-images.githubusercontent.com/44626985/197268815-8bd07801-76fe-49d6-815b-38068b2c23d2.jpg)

## 🔧 Tecnologías utilizadas <a name="tecnologías-utilizadas"></a>

Estas son las tecnologías, API, bundler y biblioteca que he utilizado para desarrollar el proyecto desde el diagrama de flujo, diseño del prototipo, programación y despliegue.

### 📐 Diseño del prototipo <a name="diseño-del-prototipo"></a>

- <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="Figma" width="25" height="25" /> FIGMA </a> - para desarrollar el diagrama de flujo y el prototipo del sitio web. <br>
  [Abrir en Figma]()

### ⚙️ Entorno de configuración <a name="entorno-de-configuración"></a>

- <a href="https://vitejs.dev/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/vitejs.svg" alt="ViteJS" width="25" height="25"/> ViteJS </a> - para crear un entorno de desarrollo de manera rápida y personalizable.

### Inicio rápido

Si quieres ejecutar este proyecto de manera local, sigue estos pasos:

#### Pre requisitos

Para ejecutar el proyecto necesitaras instalar nodeJS y npm.

```
npm install npm@latest -g
```

#### Instalación

Una vez cumplido los requisitos, necesitamos clonar el repositorio e instalar las dependencias del proyecto.

1. Clonar el repositorio
   ```
   git clone https://github.com/JairoAtoche/GifPls.git
   ```
2. Instalar paquetes NPM
   ```
   npm install
   ```
3. Ejecutar el proyecto en modo desarrollo
   ```
   npm run dev
   ```

- <a href="https://prettier.io/" target="_blank" rel="noreferrer"> <img src="https://prettier.io/icon.png" alt="Prettier" width="25" height="25" /> Prettier </a> <br>
  Se implemento en el proyecto para formatear el código y tener un estilo consistente al momento de programar.<br>
  Para ejecutar Prettier use el siguiente comando.

  ```
  npm run format
  ```

- <a href="https://eslint.org/" target="_blank" rel="noreferrer"> <img src="https://camo.githubusercontent.com/a5e575e94f48ea666506fe28bf0eaf475ef28b2ed8e5b829e48a21f9c6390d49/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f65736c696e742e737667" alt="ESLint" width="25" height="25" /> ESLint </a><br>
  El linter de código javascript se implemento para analizar el código del proyecto y detectar problemas por medio de patrones.
  Para ejecutar Lint use el siguiente comando.
  ```
  npm run lint
  ```

### 💻 Tecnologías <a name="tecnologías"></a>

Stack de tecnologías base para construir el sitio web.

- <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML" width="25" height="25"/> HTML </a>
- <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS" width="25" height="25"/> CSS </a>
- <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="SASS" width="25" height="25"/> SASS </a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="25" height="25"/> JavaScript </a>
- <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="ReactJS" width="25" height="25"/> ReactJS </a>
- <a href="https://reactrouter.com/" target="_blank" rel="noreferrer"> <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--vtI2NHvd--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q0lj87mz6whntv2zbxdm.png" alt="React Router" width="40" height="25"/> React Router </a>

### ☁️ API <a name="api"></a>

- <a href="https://developers.giphy.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/giphy-logo-1.svg" alt="GIPHY" width="25" height="25"/> GIPHY SDK </a>

### 📚 Biblioteca <a name="biblioteca"></a>

- <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noreferrer"> <img src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667" alt="React Icons" width="25" height="25"/> React Icons </a> - para agregar iconos en el proyecto.

- <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer"> <img src="https://user-images.githubusercontent.com/44626985/197283954-87da4751-ab77-42b6-a70d-e9e08ab541b6.png" alt="Framer Motion" width="25" height="25"/> Framer Motion </a> - para crear animaciones.

- <a href="https://sweetalert2.github.io/" target="_blank" rel="noreferrer"> <img src="https://avatars.githubusercontent.com/u/35137722?s=200&v=4" alt="Sweet Alert 2" width="25" height="25"/> Sweet Alert 2 </a> - para crear las ventanas emergentes.

- <a href="https://animate.style/" target="_blank" rel="noreferrer"> Animate.css </a> - para las animaciones de la libreria SweetAlert2.

- <a href="https://www.npmjs.com/package/uuid/" target="_blank" rel="noreferrer"> UUID </a> - para generar claves únicas a los elementos renderizados en listas.

- <a href="https://www.npmjs.com/package/file-saver/" target="_blank" rel="noreferrer"> File Saver </a> - para generar las descargas de los gifs y stickers.

## 🚀 Despliegue <a name="despliegue"></a>

- <a href="https://vercel.com/" target="_blank" rel="noreferrer"> <img src="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67" alt="Vercel" width="25" height="25"/> Vercel </a> - para el despliegue del proyecto.<br>

  [🌎 **Sitio web**](https://gifpls.vercel.app)

## 📄 Documentación <a name="documentación"></a>

- <a href="https://storybook.js.org/" target="_blank" rel="noreferrer"> <img src="https://avatars.githubusercontent.com/u/22632046?s=200&v=4" alt="Storybook" width="25" height="25"/> Storybook </a> - para documentar los componentes.<br>

  [📄 **Sitio web de la documentación**]()

- <a href="https://jsdoc.app/" target="_blank" rel="noreferrer"> JSDoc </a> - para generar la documentación de las funciones y custom hook.<br>

  [📄 **Sitio web de la documentación**](https://jairoatoche.github.io/GifPls/)
