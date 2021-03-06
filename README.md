# Introducción a REACT
Curso de iniciación a REACT
## Presentación
Se puede encontrar en el siguiente enlace: [Introducción a REACT con TypeScript!](https://prezi.com/7oa2frl1vls0/?token=2cd8063434a922f09fdd1482108d2c43eadebe3023bf510be4a47753af6b4520&utm_campaign=share&utm_medium=copy&rc=ex0share)
## Instalaciones previas
- [NodeJs](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/) u otro editor de texto/entorno de desarrollo
## Comprobar que todo está listo
```shell
npm -v
```
## Instalar una nueva app-react
```shell
npx create-react-app <nombre> --typescript
```
## Arrancar el proyecto
Nos situamos en la carpeta raíz del proyecto
```shell
npm run start
```
## Instalar BOOTSTRAP
```shell
npm install --save react-bootstrap
npm install @types/react-bootstrap -D
```

En la página principal (index.htm) añadimos

```html
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
  integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
  crossorigin="anonymous"
/>
[Opcional]
<link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" crossorigin="anonymous"/>
```
## Pasar los test
Nos situamos en la carpeta raíz del proyecto
```shell
npm run test
```
##Añadir routing
Tenemos un ejemplo en 
https://facebook.github.io/create-react-app/docs/adding-a-router
```shell
npm install --save react-router-dom
```
## Para publicar
Nos situamos en la carpeta raíz del proyecto
```shell
npm run build
```