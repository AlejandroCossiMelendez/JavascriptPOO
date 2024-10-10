class FormaGeometrica {
    calcular_area() {
        throw new Error("Este método debe ser implementado");
    }
}

class Cuadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcular_area() {
        return this.lado ** 2;
    }
}

class Circulo extends FormaGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcular_area() {
        return Math.PI * (this.radio ** 2);
    }
}

function calcularAreaCuadrado() {
    const lado = document.getElementById('ladoCuadrado').value;
    const cuadrado = new Cuadrado(parseFloat(lado));
    document.getElementById('resultadoCuadrado').innerHTML = `Área del cuadrado: <strong>${cuadrado.calcular_area().toFixed(2)} unidades<sup>2</sup></strong>`;
}

function calcularAreaCirculo() {
    const radio = document.getElementById('radioCirculo').value;
    const circulo = new Circulo(parseFloat(radio));
    document.getElementById('resultadoCirculo').innerHTML = `Área del círculo: <strong>${circulo.calcular_area().toFixed(2)} unidades<sup>2</sup></strong>`;
}
