// Super clase
class Vehiculo{
    // Constructor
    constructor(marca, color, modelo){
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.numero_llantas = parseInt(prompt("No. de Llantas: ")); // Se utiliza pompt para pedir al usuario el numero de llantas
    }

    // Metodo publico
    registrar(){
        document.write(`
                        <h1 class='bg-primary text-white text-center p-3'>Vehiculos</h1>
                        <hr>
                        <div class='alert alert-primary' role='alert'>Carro Registrado</div>
                        <hr>
                        Marca: ${this.marca}<br>
                        Color: ${this.color}<br>
                        Modelo: ${this.modelo}<br>
                        No. de Llantas: ${this.numero_llantas}<br>
                       `);
    }
}
// Subclase Carro
class Carro extends Vehiculo{
    // Constructor
    constructor(marca, color, modelo, placa){
        super(marca, color, modelo); //Hereda de Vehiculo
        this.placa = placa;
        this.gasolina = parseInt(prompt("No. de Galones de Gasolina: ")); // Se utiliza prompt nuevamente para pedir el No. de galones de combustible
    }

    // Metodo para enceder el carro
    encender(){
        document.write(`Placa: ${this.placa} <br>`);
        
        if(this.gasolina > 0){
            document.write(`
                             <hr>
                             <div class='alert alert-success' role='alert'>
                                El carro ${this.marca}, con placa ${this.placa} de color ${this.color} enciende !!
                             </div>
                            `);
        }else{
            document.write(`
                             <hr>
                             <div class='alert alert-danger' role='alert'>
                                El carro ${this.marca}, con placa ${this.placa} de color ${this.color} no enciende !!
                             </div>
                            `);
        }
    }
}

// Instanciando la subclase Carro
let objeto_carro = new Carro('SUZUKI', 'Rojo', '2022', 'PPC 54C');
objeto_carro.registrar();
objeto_carro.encender();