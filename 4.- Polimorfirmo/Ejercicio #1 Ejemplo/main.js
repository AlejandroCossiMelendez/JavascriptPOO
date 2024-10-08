// Selecciona el contenedor donde se mostrara la salida
const output = document.getElementById("output");

// Clase Aprendiz
class Aprendiz {
    constructor(nombres, apellidos, cedula, sexo) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.sexo = sexo;
        this.formacion = prompt("Programa de formacion: ");
        this.regional = prompt("Regional: ");
    }

    mostrarInfo() {
        output.innerHTML += "Hola, soy un aprendiz SENA<br>";
        output.innerHTML += `${this.nombres} ${this.apellidos}<br>`;
        output.innerHTML += `CC: ${this.cedula}<br>`;
        output.innerHTML += `Sexo: ${this.sexo}<br>`;
        output.innerHTML += `Estudiante del programa: ${this.formacion} de la Regional ${this.regional}<br><br>`;
    }
}

// Clase Instructor
class Instructor {
    constructor(nombres, apellidos, cedula, area) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.area = area;
    }

    mostrarInfo() {
        output.innerHTML += "<hr>";
        output.innerHTML += "Hola, soy un instructor del SENA<br>";
        output.innerHTML += `${this.nombres} ${this.apellidos}<br>`;
        output.innerHTML += `CC: ${this.cedula}<br>`;
        output.innerHTML += `area de instruccion: ${this.area}<br><br>`;
    }
}

// Clase Coordinador
class Coordinador {
    constructor(nombres, apellidos, cedula, departamento) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.departamento = departamento;
    }

    mostrarInfo() {
        output.innerHTML += "<hr>";
        output.innerHTML += "Hola, soy un coordinador del SENA<br>";
        output.innerHTML += `${this.nombres} ${this.apellidos}<br>`;
        output.innerHTML += `CC: ${this.cedula}<br>`;
        output.innerHTML += `Departamento: ${this.departamento}<br><br>`;
    }
}

// Funcion que muestra la informacion de cualquier tipo de objeto
function mostrarInformacion(persona) {
    persona.mostrarInfo();
}

// Instancias de cada clase
const objetoAprendiz = new Aprendiz("Samuel Elias", "Vega Barrios", 1231338164, "Masculino");
const objetoInstructor = new Instructor("Laura", "Rodriguez", 987654321, "Programacion");
const objetoCoordinador = new Coordinador("Carlos", "Martinez", 123456789, "Recursos Humanos");

// Llamado al metodo mostrarInfo para cada objeto
mostrarInformacion(objetoAprendiz);
mostrarInformacion(objetoInstructor);
mostrarInformacion(objetoCoordinador);
