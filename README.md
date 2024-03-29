# ANGULAR_GRUPO-5 

### PASO 1: CREAR PROYECTO ANGULAR CON ENRUTADO

ng new angular --skip-git --style=css --routing=true --ssr=false

### PASO 2: ENTRAR AL PROYECTO

cd angular-006-servicios

### PASO 3: INSTALAR BOOTSTRAP

ng add @ng-bootstrap/ng-bootstrap

## PASO 4: INSTALAR BOOTSTRAP-ICONS

npm i bootstrap-icons

En angular.json hay que agregar el bootstrap-icons.min.css a styles:

 "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/bootstrap-icons/font/bootstrap-icons.min.css",
              "src/styles.css"
            ],

## PASO 5: LEVANTAR EL BACKEND

En otra terminal
json-server --watch db.json

## PASO 6: CREAR COMPONENTES

ng g c nombre del componente

## PASO 7: HACER EL ENRUTADO

Empezar con el list y luego detalle
Se pueden ir enrutando a medida que crece el proyecto, 
no hace falta hacerlos todos de golpe.

## PASO 8: CREAR LA INTERFACES
1. Crear una carpeta dentro de app
2. Crear las rutas en el app.component.htm en el navbar

## PASO 9: HACER FORMULARIOS

en el ts del componente en imports
ReactiveFormsModule

## ACTUALIZAR ANGULAR

1. Desinstalar Angular:
  npm uninstall -g @angular/cli

2. Instalar la version:
  npm install -g @angular/cli@17.2.0

3. Crear proyecto:
ng new angular-009-forms-bootstrap --skip-git --style=css --routing=true --ssr=false

4. Boostrap:
  ng add @ng-bootstrap/ng-bootstrap

## HACER UN FORMULARIO

## CONECTAR FORMULARIOS

angular-009-forms-bootstrap:

* product-list
* product-detail
* product-form: creación y actualización

Objetivo: tener desarrollado un CRUD completo sobre productos.

## PASOS

1. ng generate component product-list

2. ng generate component product-detail

3. Enrutado en app.routes.ts

4. router-outlet en app.component.html

5. Copiar código: product-list.component.ts y product-list.component.html
    * agregar botones para llegar a product-form para crear (POST) y actualizar (PUT)

6. Copiar código: product-detail.component.ts y product-detail.component.html
    * agregar botón para llegar a product-form para actualizar (PUT)


## FUNCIONALIDAD ACTUALIZAR PRODUCTO (PUT)

1. Capturar el id (1,2,3 ...) de la URL utilizando activatedRoute de forma igual al product-detail.

2. Una vez capturado el id, si existe, entonces hacer un GET con httpClient para traer el producto por id, por ejemplo el producto 1.

3. Cargar los valores del producto en el formulario de productForm. De esta forma el formulario aparecerá con los valores del producto ya cargados para editarlos.

4. En el método save, distinguir si existe id entonces hacer un update PUT, si no existe id entonces hacer un create POST.


## CREAT BACKEND

# DESCARGAR E INSTALAR POSTMAN
Descargar e instalar POSTMAN

https://www.postman.com/

Postman permite probar el backend.

## COMANDOS 

1. Crear proyecto backend:

nest new nest-BACKEND --skip-git --package-manager npm

2. Creat un controlador:
nest generate controller Book

3. Levantar el servidor:
nest start --watch

## CREAR CONTROLADORES

Crear interface book.model.ts

nest generate controller Book

Recuperar datos:

* Métodos @Get()
* Métodos @Get() con parámetros
* Métodos @Get() con parámetro y pipe ParseIntPipe
* Devolver string
* Devolver un objeto
* Devolver un array de
* Crear nuevos datos:

Método @Post()
@Body() para recibir un objeto en método @Post()
Actualizar datos existentes:

Borrar datos existentes

## EJEMPLO:

## AUTHOR

nest generate controller Author

Crear author.model.ts dentro de la carpeta author

* @Get() findAll
* @Get() findById
* @Post create
* @Put update
* @Delete deleteById

## CREAR FRONTEND Y BACKEND

* Crear carpeta fullstack-001

* Crear backend:
1. nest new backend --skip-git --package-manager npm
2. cd backend
3. npm install --save @nestjs/typeorm typeorm mysql2 @nestjs/swagger

* Crear frontend:
1. ng new frontend --skip-git --style=css --routing=true --ssr=false
2. cd frontend
3. ng add @ng-bootstrap/ng-bootstrap

## FRONTEND

* interfaces con todos los model.ts

* Crear componentes: home, navbar, footer, book-list, book-detail, book-form

* Enrutado app.routers.ts

* Desarrollar los componentes:

  * book-list conectado a backend nestjs
  * book-detail conectado a backend nestjs
  * book-form conectado a backend nestjs