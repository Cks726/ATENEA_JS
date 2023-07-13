<h1 align="center">APISALUD</h1>



*[OBJETIVO](#OBJETIVO)
<br>
<h4 align="justify">El objetivo del ejercicio es crear una aplicación web (REST API) que reciba información de pacientes y médicos a través de formularios, la almacene en una base de datos y luego la muestre en una página utilizando el Modelo de Objetos del Documento (DOM). 
Adicional a ello, se pueden crear citas digitando la cédula del paciente y a través de la especialidad o el nombre del doctor, asignarla.
 </h4>

<br>


*[LENGUAJES Y FRAMEWORKS](#LENGUAJES-Y-FRAMEWORKS)
<h3>PARA REALIZACIÓN DE BACKEND:</h3>

 <h4>:heavy_check_mark: Springboot</h4>
 <h4>:heavy_check_mark: Typescript</h4>
 <br>
 <h3>PARA REALIZACIÓN DE FRONTEND:</h3>
 <h4>:heavy_check_mark: Angular</h4>
 <h4>:heavy_check_mark: Bootstrap</h4>
<br>
<h3>MOTOR DE BASE DE DATOS</h3>
 <h4>:heavy_check_mark: MySQl</h4>
<br>

*[ORGANIZACIÓN PROYECTO](#ORGANIZACIÓN-PROYECTO)

<h4>El repositorio se encuentra organizado en varias carpetas, teniendo en cuenta que se van a encontrar: 3 APIS Y 2 FRONTEND CON ÁNGULAR:</h4>

 <ul>
	  <li>  <h4><span class="bolded">CARPETA 1:</span>  API-BACK-END (construcción con typescript): desarrollo backend número 1; documentada y funcionando para pruebas :white_check_mark: </h4></li>
	  <li>  <h4><span class="bolded">CARPETA 2:</span>  Client/medical-app: desarrollo frontend número 1; documentada y funcionando :white_check_mark:</h4></li>
	 <li>  <h4><span class="bolded">CARPETA 3:</span>  frontAngular/apiSalud: desarrollo frontend número 2; documentada y funcionando :white_check_mark:</h4></li>
	 <li>  <h4><span class="bolded">CARPETA 4:</span>  server: desarrollo backend número 2; en construcción:hammer_and_wrench: </h4></li>
	  <li>  <h4><span class="bolded">CARPETA 5:</span>  serverSpring/apiSalud: desarrollo backend número 3; documentada y funcionando :white_check_mark:</h4></li>
 </ul>
 <br>
 <br>
 

*[ESTADO DEL PROYECTO](#ESTADO-DEL-PROYECTO)
 <br>
 <h4 align="center">:construction: Proyecto continúa en construcción :construction:</h4>
  <ul>
	  <li>  <h4>Logramos codificar las DOS APIS que solicita el curso, cumpliendo con los requerimiento establecidos, usando como lenguajes, para estos backend: CARPETA 1 typescript  Y CARPETA 5 springboot. :white_check_mark: </h4></li>
	  <li>  <h4>De forma ambiciosa nos arriesgamos a realizar DOS FRONTEND usando angular como framework para cada una de las APIS DESARROLLADAS: se pueden visualizar en CARPETA 2 Y CARPETA 3 :white_check_mark:</h4></li>
	 <li>  <h4>En la búsqueda de poner en uso todos los conocimientos, decidimos dejar el desarrollo de la CARPETA 4 en construcción, usando como base de datos mongo db y javascript construcción:hammer_and_wrench:</h4></li>
  	<li>  <h4>En este momento faltó la implementación del cors para frontend y backend, sin embargo presentamos todo el trabajo como parte de nuestro compromiso por el aprendizaje de varias herramientas de programación:white_check_mark:</h4></li>

 </ul>


*[CARACTERÍSTICAS DE LA APLICACIÓN Y DEMOSTRACIÓN](#CARACTERISTICAS-DE-LA-APLICACIÓN-Y-DEMOSTRACIÓN)

## :hammer:Funcionalidades del proyecto
<br>
<h2>CARPETA 1: API-BACK-END CON TYPESCRIPT - BASE DE DATOS: MYSQL</h2>
<br>
<h3>:stethoscope:DOCTORES</h3>
- `Funcionalidad 1`: Guardar datos de los doctores en un formulario-
ACÁ COLOCAR IMAGEN O GIF
- `Funcionalidad 2`: Listar datos de los doctores-
ACÁ COLOCAR IMAGEN O GIF
- `Funcionalidad 3`: Actualizar datos de los doctores-
ACÁ COLOCAR IMAGEN O GIF
- `Funcionalidad 4`: Eliminar datos de los doctores-
ACÁ COLOCAR IMAGEN O GIF

<h3>:link:ENDPOINTS PARA PRUEBAS</h3>
 <ul>
	<li>  <h4> :link: PARA CREAR DOCTOR:   </h4></li>
  	<li>  <h4> :link: PARA LISTAR DOCTORES:   </h4></li>
	<li>  <h4> :link: PARA ACTUALIZAR DOCTOR:   </h4></li>
  	<li>  <h4> :link: PARA ELIMINAR DOCTOR:   </h4></li>
 </ul>
<br>

<h2>:adhesive_bandage:PACIENTES</h2>
- `Funcionalidad 1`: Guardar datos de los pacientes en un formulario-
ACÁ COLOCAR IMAGEN O GIF
- `Funcionalidad 2`: Listar datos de los pacientes-
ACÁ COLOCAR IMAGEN O GIF
- `Funcionalidad 3`: Actualizar datos de los pacientes-
ACÁ COLOCAR IMAGEN O GIF
- `Funcionalidad 4`: Eliminar datos de los pacientes-
ACÁ COLOCAR IMAGEN O GIF


<h2>:link:ENDPOINTS PARA PRUEBAS</h2>
 <ul>
	<li>  <h4> :link: PARA CREAR PACIENTE:   </h4></li>
  	<li>  <h4> :link: PARA LISTAR PACIENTE:   </h4></li>
	<li>  <h4> :link: PARA ACTUALIZAR PACIENTE:   </h4></li>
  	<li>  <h4> :link: PARA ELIMINAR PACIENTE:   </h4></li>
 </ul>
<br>
<h2>:syringe:CITAS</h2>
- `Funcionalidad 1`: crear citas -
ACÁ COLOCAR IMAGEN O GIF
- `Funcionalidad 2`: Listar citas con paciente y doctor-
ACÁ COLOCAR IMAGEN O GIF

<h2>:link:ENDPOINTS PARA PRUEBAS</h2>
 <ul>
	<li>  <h4> :link: PARA CREAR CITA:   </h4></li>
  	<li>  <h4> :link: PARA ELIMINAR CITA:   </h4></li>
 </ul>
<br>

<h2>CARPETA 5: serverSpring/apiSalud CON SPRINGBOOT - BASE DE DATOS: MYSQL</h2>
<br>
<h3>:stethoscope:DOCTORES</h3>
- `Funcionalidad 1`: Guardar datos de los doctores en un formulario-
ACÁ COLOCAR IMAGEN O GIF
- `Funcionalidad 2`: Listar datos de los doctores-
ACÁ COLOCAR IMAGEN O GIF
- `Funcionalidad 3`: Validaciones de registro de doctor si ya existe, no puede realizar nuevo registro-
ACÁ COLOCAR IMAGEN O GIF
- `Funcionalidad 4`: Listar doctores por id-
ACÁ COLOCAR IMAGEN O GIF

<h3>:link:ENDPOINTS PARA PRUEBAS</h3>
 <ul>
	<li>  <h4> :link: PARA CREAR DOCTOR: http://localhost:8080/home/created </h4></li>
  	<li>  <h4> :link: PARA LISTAR DOCTORES:  http://localhost:8080/home/doctores </h4> </li>
   	<li>  <h4> :link: PARA LISTAR DOCTORES POR ID:   </h4> http://localhost:8080/home/doctores/{id}</li>
 </ul>

<h3>:adhesive_bandage:PACIENTES</h3>
- `Funcionalidad 1`: Guardar datos de los pacientes en un formulario-
ACÁ COLOCAR IMAGEN O GIF
- `Funcionalidad 2`: Listar datos de los pacientes-
ACÁ COLOCAR IMAGEN O GIF
- `Funcionalidad 3`: Validaciones de registro de paciente si ya existe, no puede realizar nuevo registro-
ACÁ COLOCAR IMAGEN O GIF

<h2>:link:ENDPOINTS PARA PRUEBAS</h2>
 <ul>
	<li>  <h4> :link: PARA CREAR PACIENTE: http://localhost:8080/paciente/created </h4></li>
  	<li>  <h4> :link: PARA LISTAR PACIENTE:   </h4></li>
	<li>  <h4> :link: PARA LISTAR PACIENTE POR ID:   </h4></li>

 </ul>

<h3>:syringe:CITAS</h3>
- `Funcionalidad 1`: crear citas -
ACÁ COLOCAR IMAGEN O GIF
- `Funcionalidad 2`: Listar citas con paciente y doctor por especialidad-
ACÁ COLOCAR IMAGEN O GIF

<h2>:link:ENDPOINTS PARA PRUEBAS</h2>
 <ul>
	<li>  <h4> :link: PARA CREAR CITA:   </h4></li>
  	<li>  <h4> :link: PARA BUSCAR CITA POR ESPECIALIDAD:   </h4></li>
 </ul>




*[DESARROLLADORES DEL PROYECTO](#DESARROLLADORES-DEL-PROYECTO)

<h3>:computer: Juan Camilo Suescún Chaparro</h3>
<h3>:computer:Wilson Serrato Garzón</h3>
<h3>:computer:Cristian Camilo</h3>
<h3>Natalia Mayorquin Duran</h3>



 







