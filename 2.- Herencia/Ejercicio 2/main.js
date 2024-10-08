// Super clase
class Dispositivo{
    // Constructor
    constructor(marca, modelo, año){
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.capacidad_bateria = parseInt(prompt("Digite la capacidad de la bateria en mAh: ")); // Se utiliza pompt para pedir al usuario la capacidad de la bateria en mAh
    }

    // Metodo publico
    registrar(){
        document.write(`
                        <h1 class='bg-primary text-white text-center p-3'>Dispositivos</h1>
                        <hr>
                        <div class='alert alert-primary' role='alert'>Dispositivo Registrado</div>
                        <hr>
                        Marca: ${this.marca}<br>
                        Modelo: ${this.modelo}<br>
                        Año: ${this.año}<br>
                        Capacidad de bateria: ${this.capacidad_bateria} mAh<br>
                       `);
    }
}
// Subclase Smartphone
class Smartphone extends Dispositivo{
    // Constructor
    constructor(marca, modelo, año, sistema_operativo){
        super(marca, modelo, año); //Hereda de Dispositivo
        this.sistema_operativo = sistema_operativo
        this.conectividad = prompt("Digite que tipo de conectividad tiene este dispositivo: ")
    }

    // Metodo para enceder
    encender(){
        document.write(`La conectividad del dispositivo ${this.modelo} es: ${this.conectividad}<hr>`);

        
        document.write(`<div class='alert alert-primary' role='alert'>El smartphone ${this.marca} con ${this.sistema_operativo} y conectividad ${this.conectividad} esta encendido</div><hr>`)
        
    }
}

// Instanciar un objeto de la clase Smartphone
let mi_smartphone = new Smartphone('Apple', 'iPhone 14', 2023, 'iOS');
mi_smartphone.registrar();
mi_smartphone.encender();
