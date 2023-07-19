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
 <br>

 <h4>:heavy_check_mark: Typescript</h4>
 <h4>:heavy_check_mark: nodeJS</h4>
<h4>:heavy_check_mark: express</h4>
<h4>:heavy_check_mark: nodemon</h4>
<h4>:heavy_check_mark: dotenv</h4>

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
	  <li>  <h4 align="justify"><span class="bolded">CARPETA 1:</span>  API-BACK-END (construcción con typescript): desarrollo backend número 1; documentada y funcionando para pruebas :white_check_mark: </h4></li>
	  <li>  <h4 align="justify"><span class="bolded">CARPETA 2:</span>  Client/medical-app: desarrollo frontend número 1; documentada y funcionando :white_check_mark:</h4></li>
	 <li>  <h4 align="justify"><span class="bolded">CARPETA 3:</span>  frontAngular/apiSalud: desarrollo frontend número 2; documentada y funcionando :white_check_mark:</h4></li>
	 <li>  <h4 align="justify"><span class="bolded">CARPETA 4:</span>  server: desarrollo backend número 2; en construcción:hammer_and_wrench: </h4></li>
	  <li>  <h4 align="justify"><span class="bolded">CARPETA 5:</span>  serverSpring/apiSalud: desarrollo backend número 3; documentada y funcionando :white_check_mark:</h4></li>
 </ul>
 <br>
 <br>
 

*[ESTADO DEL PROYECTO](#ESTADO-DEL-PROYECTO)

 <br>
 <h4 align="center" align="justify">:construction: Proyecto continúa en construcción :construction:</h4>
  <ul>
	  <li>  <h4>Logramos codificar las DOS APIS que solicita el curso, cumpliendo con los requerimiento establecidos, usando como lenguajes, para estos backend: CARPETA 1 typescript  Y CARPETA 5 springboot. :white_check_mark: </h4></li>
	  <li>  <h4>De forma ambiciosa nos arriesgamos a realizar DOS FRONTEND usando angular como framework para cada una de las APIS DESARROLLADAS: se pueden visualizar en CARPETA 2 Y CARPETA 3 :white_check_mark:</h4></li>
	 <li>  <h4>En la búsqueda de poner en uso todos los conocimientos, decidimos dejar el desarrollo de la CARPETA 4 en construcción, usando como base de datos mongo db y javascript construcción:hammer_and_wrench:</h4></li>
  	<li>  <h4>Se logró crear el cors de la mayoría de funcionalidades entre el backend de la CARPETA 1 y el frontend de la CARPETA 3:white_check_mark:</h4></li>
	  	<li>  <h4>Se logró integrar el cors para todas las funcionalidades de pacientes del backend de la CARPETA 5 con el frontend de la CARPETA 2:hammer_and_wrench:</h4></li>

 </ul>

 <br>

*[CARACTERÍSTICAS DE LA APLICACIÓN Y DEMOSTRACIÓN](#CARACTERISTICAS-DE-LA-APLICACIÓN-Y-DEMOSTRACION)

<br>

<h2>CARPETA 1: API-BACK-END CON TYPESCRIPT - BASE DE DATOS: MYSQL</h2>
<br>
<h3>:stethoscope:DOCTORES</h3>

- :crayon: Funcionalidad 1: Guardar datos de los doctores en un formulario
  ![Imagen 1](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/apiSalud/gif/crearDoctor.gif)

- :crayon: Funcionalidad 2: Listar datos de los doctores
  ![Imagen 2](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/apiSalud/gif/frontGetDocPac.gif)

- :crayon: Funcionalidad 3: Actualizar datos de los doctores
  ![Imagen 3](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/apiSalud/gif/updateDoctor.gif)

- :crayon: Funcionalidad 4: Eliminar datos de los doctores
  ![Imagen 4](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/apiSalud/gif/deleteDoctor.gif)



<h3>:link:ENDPOINTS PARA PRUEBAS</h3>
 <ul>
	<li>  <h4> :link: PARA CREAR DOCTOR: http://127.0.0.1:3000/doctor  </h4></li>
  	<li>  <h4> :link: PARA LISTAR DOCTORES: http://127.0.0.1:3000/doctor  </h4></li>
	<li>  <h4> :link: PARA ACTUALIZAR DOCTOR: http://127.0.0.1:3000/doctor/id_doctor  </h4></li>
  	<li>  <h4> :link: PARA ELIMINAR DOCTOR: http://127.0.0.1:3000/doctor/id  </h4></li>
 </ul>
<br>

<h2>:adhesive_bandage:PACIENTES</h2>

- :crayon: Funcionalidad 1: Guardar datos de los pacientes en un formulario
  ![Imagen 1](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/apiSalud/gif/crearPaciente.gif)

- :crayon: Funcionalidad 2: Listar datos de los pacientes
  ![Imagen 2](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/apiSalud/gif/frontGetDocPac.gif)

- :crayon: Funcionalidad 3: Actualizar datos de los pacientes
  ![Imagen 3](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/apiSalud/gif/updatePaciente.gif)

- :crayon: Funcionalidad 4: Eliminar datos de los pacientes
  ![Imagen 4](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/apiSalud/gif/deletePaciente.gif)



<h2>:link:ENDPOINTS PARA PRUEBAS</h2>
 <ul>
	<li>  <h4> :link: PARA CREAR PACIENTE: http://127.0.0.1:3000/paciente  </h4></li>
  	<li>  <h4> :link: PARA LISTAR PACIENTE: http://127.0.0.1:3000/paciente   </h4></li>
	<li>  <h4> :link: PARA ACTUALIZAR PACIENTE: http://127.0.0.1:3000/paciente/id_paciente  </h4></li>
  	<li>  <h4> :link: PARA ELIMINAR PACIENTE: http://127.0.0.1:3000/paciente/id  </h4></li>
 </ul>
<br>
<h2>:syringe:CITAS</h2>

- :crayon: Funcionalidad 1: Crear citas
  ![Imagen 1](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/apiSalud/gif/crearCita.gif)

- :crayon: Funcionalidad 2: actualizar citas 
  ![Imagen 2](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/apiSalud/gif/updateCita.gif)

- :crayon: Funcionalidad 3: eliminar citas 
  ![Imagen 2](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/apiSalud/gif/deleteCita.gif)



<h2>:link:ENDPOINTS PARA PRUEBAS</h2>
 <ul>
	<li>  <h4> :link: PARA CREAR CITA: http://127.0.0.1:3000/cita  </h4></li>
  	<li>  <h4> :link: PARA LISTAR CITA: http://127.0.0.1:3000/cita  </h4></li>
	<li>  <h4> :link: PARA ACTUALIZAR CITA: http://127.0.0.1:3000/cita  </h4></li>
	<li>  <h4> :link: PARA ELIMINAR CITA: http://127.0.0.1:3000/cita/id </h4></li>
 </ul>

<br>
<br>

<h2>CARPETA 5: serverSpring/apiSalud CON SPRINGBOOT - BASE DE DATOS: MYSQL</h2>
<br>
<h3>:stethoscope:DOCTORES</h3>

- :crayon: Funcionalidad 1: Guardar datos de los doctores en un formulario
  ![Imagen 1](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/medical-app/crear_doc.gif)

- :crayon: Funcionalidad 2: Listar datos de los doctores
  ![Imagen 2](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/medical-app/listar_todos_doc.gif)

- :crayon: Funcionalidad 3: Validaciones de registro de doctor si ya existe, no puede realizar nuevo registro
  ![Imagen 3](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/medical-app/erro_doc_repetido.gif)

- :crayon: Funcionalidad 4: Listar doctores por id
  ![Imagen 4](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/medical-app/buscar__doc_id.gif)




<h3>:link:ENDPOINTS PARA PRUEBAS</h3>
 <ul>
	<li>  <h4> :link: PARA CREAR DOCTOR: http://localhost:8080/home/created </h4></li>
  	<li>  <h4> :link: PARA LISTAR DOCTORES:  http://localhost:8080/home/doctores </h4> </li>
   	<li>  <h4> :link: PARA LISTAR DOCTORES POR ID:   </h4> http://localhost:8080/home/doctores/{id}</li>
 </ul>
<br>
<h3>:adhesive_bandage:PACIENTES</h3>

- :crayon: Funcionalidad 1: Guardar datos de los pacientes en un formulario
  ![Imagen 1](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/medical-app/crear_pac.gif)

- :crayon: Funcionalidad 2: Listar datos de los pacientes
  ![Imagen 2](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/medical-app/listar_pac.gif)

- :crayon: Funcionalidad 3: Validaciones de registro de paciente si ya existe, no puede realizar nuevo registro
  ![Imagen 3](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/medical-app/erro_pas_repetido.gif)

  - :crayon: Funcionalidad 3: Validaciones de registro de paciente por id
  ![Imagen 3](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/medical-app/buscar_pac_id.gif)

<h2>:link:ENDPOINTS PARA PRUEBAS</h2>
 <ul>
	<li>  <h4> :link: PARA CREAR PACIENTE: http://localhost:8080/paciente/created </h4></li>
  	<li>  <h4> :link: PARA LISTAR TODOS LOS PACIENTES: http://localhost:8080/paciente/search  </h4></li>
	<li>  <h4> :link: PARA LISTAR PACIENTE POR ID: http://localhost:8080/paciente/pacientes/{id}</h4></li>
 </ul>
<br>
<h3>:syringe:CITAS</h3>

- :crayon: Crear citas
  ![Imagen 1](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/medical-app/crear_cita.gif)

- :crayon: Funcionalidad 2: Listar citas con paciente y doctor por especialidad
  ![Imagen 2](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/medical-app/traer_cita.gif)


<h2>:link:ENDPOINTS PARA PRUEBAS</h2>
 <ul>
	<li>  <h4> :link: PARA CREAR CITA: http://localhost:8080/citas/created  </h4></li>
  	<li>  <h4> :link: PARA BUSCAR CITA POR ESPECIALIDAD (reemplazar medicina_interna por cualquier especialidad con guión bajo y mayúscula): http://localhost:8080/citas/especialidad?especialidad=MEDICINA_INTERNA</h4></li>
 </ul>

<br>
<br>
<h2>CARPETA 2: client/medical-app FRONTEND CON ANGULAR</h2>
https://www.youtube.com/watch?v=1ejb-blHjGE
<br>
<br>
<h2>CARPETA 3: frontAngular/apiSalud FRONTEND CON ANGULAR</h2>

![Imagen 1](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/apiSalud/gif/frontCrearDoctor.gif)

![Imagen 2](https://github.com/Cks726/ATENEA_JS/blob/main/recursos/apiSalud/gif/frontCrearPaciente.gif)

*[DESARROLLADORES DEL PROYECTO](#DESARROLLADORES-DEL-PROYECTO)


<h3>:computer:Wilson Serrato Garzón</h3>
<h3>:computer:Cristian Camilo Soto</h3>
<h3>:computer:Natalia Mayorquin Duran</h3>



 







