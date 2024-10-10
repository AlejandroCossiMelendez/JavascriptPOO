
class Empleado {
    calcular_salario() {
        throw new Error("Este método debe ser implementado");
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(salarioMensual) {
        super();
        this.salarioMensual = salarioMensual;
    }

    calcular_salario() {
        return this.salarioMensual;
    }
}

class EmpleadoPorHoras extends Empleado {
    constructor(tarifaHora, horasTrabajadas) {
        super();
        this.tarifaHora = tarifaHora;
        this.horasTrabajadas = horasTrabajadas;
    }

    calcular_salario() {
        return this.tarifaHora * this.horasTrabajadas;
    }
}

function calcularSalarioTiempoCompleto() {
    const salario = document.getElementById('salarioMensual').value;
    const empleado = new EmpleadoTiempoCompleto(parseFloat(salario));
    document.getElementById('resultadoTiempoCompleto').innerHTML = `Salario: <strong>$${empleado.calcular_salario().toFixed(2)}</strong>`;
}

function calcularSalarioPorHoras() {
    const tarifa = document.getElementById('tarifaHora').value;
    const horas = document.getElementById('horasTrabajadas').value;
    const empleado = new EmpleadoPorHoras(parseFloat(tarifa), parseFloat(horas));
    document.getElementById('resultadoPorHoras').innerHTML = `Salario: <strong>$${empleado.calcular_salario().toFixed(2)}</strong>`;
}
