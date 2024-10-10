
class TareaEmpleado {
    realizar_tarea() {
        throw new Error("Este método debe ser implementado");
    }
}

class Ingeniero extends TareaEmpleado {
    realizar_tarea() {
        return "Ingeniero está diseñando un puente.";
    }
}

class Doctor extends TareaEmpleado {
    realizar_tarea() {
        return "Doctor está realizando una cirugía.";
    }
}

function realizarTareaIngeniero() {
    const ingeniero = new Ingeniero();
    document.getElementById('resultadoIngeniero').innerHTML = ingeniero.realizar_tarea();
}

function realizarTareaDoctor() {
    const doctor = new Doctor();
    document.getElementById('resultadoDoctor').innerHTML = doctor.realizar_tarea();
}
