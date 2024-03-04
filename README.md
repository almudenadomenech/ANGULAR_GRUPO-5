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


## PASO 5: CREAR COMPONENTES

ng g c nombre del componente

## PASO 6: CREAR INTERFACES

1. Crear una carpeta dentro de app, llamada interfaces
2. Crear las interfaces

## PASO 7: HACER EL ENRUTADO

Empezar con el list y luego detalle
Se pueden ir enrutando a medida que crece el proyecto, 
no hace falta hacerlos todos de golpe.

## PASO 8: HACER EL JSON

Se crea debajo de Angular.json

## PASO 9: LEVANTAR FRONTEND

ng serve -o

## PASO 10: LEVANTAR BACKEND

json-server db.json

## PASO 9: HACER FORMULARIOS

en el ts del componente en imports
ReactiveFormsModule

## CREAR UN FORMULARIO (Ejemplo)

1. Crear interfaces:

* Manufacturer
* Category
* Product

2. product-form.component.ts crear el FormGroup con sus FormControl

3. product-form.component.html creado el <form> de HTML con Bootstrap

4. product-form.component.ts método save extraer los campos del formulario y crear un objeto Product y enviarlo a backend con HttpClient método POST

5. db.json con productos para recibir la petición POST de HttpClient


## CONECTAR FORMULARIOS

angular-009-forms-bootstrap:

* product-list
* product-detail
* product-form: creación y actualización

Objetivo: tener desarrollado un CRUD completo sobre productos.

## FUNCIONALIDAD ACTUALIZAR PRODUCTO (PUT)

1. Capturar el id (1,2,3 ...) de la URL utilizando activatedRoute de forma igual al product-detail.

2. Una vez capturado el id, si existe, entonces hacer un GET con httpClient para traer el producto por id, por ejemplo el producto 1.

3. Cargar los valores del producto en el formulario de productForm. De esta forma el formulario aparecerá con los valores del producto ya cargados para editarlos.

4. En el método save, distinguir si existe id entonces hacer un update PUT, si no existe id entonces hacer un create POST.

## FUNCIONALIDAD ACTUALIZAR PRODUCTO (PUT)

1. Capturar el id (1,2,3 ...) de la URL utilizando activatedRoute de forma igual al product-detail.

2. Una vez capturado el id, si existe, entonces hacer un GET con httpClient para traer el producto por id, por ejemplo el producto 1.

3. Cargar los valores del producto en el formulario de productForm. De esta forma el formulario aparecerá con los valores del producto ya cargados para editarlos.

4. En el método save, distinguir si existe id entonces hacer un update PUT, si no existe id entonces hacer un create POST.

