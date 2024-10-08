// Selecciona el contenedor donde se mostrara la salida
const output = document.getElementById("output");

// Clase base Profesiones
class Profesiones {
    constructor(nombre, especialidad) {
        this.nombre = nombre;
        this.especialidad = especialidad;
    }

    trabajar() {
        output.innerHTML += "Este profesional esta trabajando.<br>";
    }
}

// Clase Medico que hereda de Profesiones
class Medico extends Profesiones {
    constructor(nombre, especialidad, hospital) {
        super(nombre, especialidad);
        this.hospital = hospital;
    }

    trabajar() {
        output.innerHTML += `Dr(a). ${this.nombre}, especialista en ${this.especialidad}, trabaja en el hospital ${this.hospital}, atendiendo a sus pacientes.<br><br><hr>`;
    }
}

// Clase Ingeniero que hereda de Profesiones
class Ingeniero extends Profesiones {
    constructor(nombre, especialidad, proyecto) {
        super(nombre, especialidad);
        this.proyecto = proyecto;
    }

    trabajar() {
        output.innerHTML += `${this.nombre}, ingeniero especializado en ${this.especialidad}, esta trabajando en el proyecto ${this.proyecto}.<br><br><hr>`;
    }
}

// Clase Docente que hereda de Profesiones
class Docente extends Profesiones {
    constructor(nombre, especialidad, instituto) {
        super(nombre, especialidad);
        this.instituto = instituto;
    }

    trabajar() {
        output.innerHTML += `${this.nombre}, docente de ${this.especialidad}, imparte clases en el instituto ${this.instituto}.<br><br>`;
    }
}

// Funcion que recibe cualquier tipo de profesion y muestra su trabajo
function mostrarTrabajo(profesional) {
    profesional.trabajar();
}

// Creacion de objetos
const medico = new Medico("Ana Gomez", "Cardiologia", "Hospital Central");
const ingeniero = new Ingeniero("Luis Perez", "Ingenieria Civil", "Construccion del puente");
const docente = new Docente("Marta Ruiz", "Matematicas", "Universidad Nacional");

// Llamado a la funcion para cada objeto
mostrarTrabajo(medico);
mostrarTrabajo(ingeniero);
mostrarTrabajo(docente);
