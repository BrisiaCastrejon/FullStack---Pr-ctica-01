## BackEnd
### PACKAGE.JSON
Se agrega nodemon -D a las dependencias y se le genera un script:
npm run dev ---> (nodemon src/index.js)

Se agrega cors, para permitir el envio de peticiones desde diferentes servidores:
$ npm i cors ---> se invoca en el app.js file

## FrontEnd
Se agrega bootswath como sustituto de bootstrap directo en el package json:
### https://bootswatch.com/ (templates de bootstrap)
$ npm i bootswatch
Posterior a la instalación se requiere en el angular.json

### https://materializecss.com/icons.html
Se agrega el CDN de material icons en el index.htl raiz de Angular
## EXTENSI0NES 
Se agrega Rest Clien para las validaciones REST:
el archivo api.rest con la sintaxis generada es requerido para las pruebas a falta de PostMan 

## Comandos necesarios para desarrollar el FRONT
npm run dev
ng serve -o