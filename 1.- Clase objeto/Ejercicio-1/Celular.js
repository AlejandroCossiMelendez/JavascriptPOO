// Defino la clase
class Celular {

    // Metodo Constructor
    constructor(marca, modelo, sistemaOperativo, capacidadBateria, memoriaRam, almacenamientoInterno){
        
        // Defino las propiedades para la instancia
        this.marca = marca
        this.modelo = modelo
        this.sistemaOperativo = sistemaOperativo
        this.capacidadBateria = capacidadBateria
        this.memoriaRam = memoriaRam
        this.almacenamientoInterno = almacenamientoInterno
    }

    // Metodo para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`<h1 class='bg-primary text-white text-center p-3'>Celular ${this.marca} ${this.modelo} <i class='bi bi-phone-fill'></i></h1>`)
        document.write("<span class='badge text-bg-success'>Metodo Mostrar Detalles</span><br>")
        document.write("Marca: " + this.marca + "<br>")
        document.write("Modelo: " + this.modelo + "<br>")
        document.write("Sistema Operativo: " + this.sistemaOperativo + "<br>")
        document.write("Capacidad de la Bateria: " + this.capacidadBateria + "<br>")
        document.write("Tamaño de la Memoria Ram: " + this.memoriaRam + "<br>")
        document.write("Almacenamiento Interno: " + this.almacenamientoInterno + "<br>")
        document.write("<hr>")
    }

    // Metodo para hacer llamada
    hacerLlamadas() {
        document.write("<span class='badge text-bg-success'>Metodo Hacer Llamadas</span><br>")
        // Solicita el numero al usuario
        let destino = prompt("Digite el numero al que desea llamar: ")
        
        // Convertir el destino a un numero entero
        let numero = parseInt(destino, 10)
        
        // Verificar si el numero es valido
        if (!isNaN(numero) && numero > 0) {
            document.write(`Llamando al: ${numero} desde tu dispositivo ${this.marca} ${this.modelo}`)
        } else {
            document.write("Numero no valido")
        }
        document.write("<hr>")
    }
    
    // Metodo para enviar mensaje
    enviarMensaje() {
        document.write("<span class='badge text-bg-success'>Metodo Enviar Mensajes</span><br>")
        // Solicita el numero al usuario
        let destino = prompt("Digite el numero al que desea enviar el mensaje: ")
        
        // Convertir el destino a un numero entero
        let numero = parseInt(destino, 10)

        // Solicita el mensaje al usuario
        let mensaje = prompt("Digite el mensaje que desea enviar: ")
        
        // Verificar si el numero es valido y el mensaje no esta vacio
        if (!isNaN(numero) && numero > 0 && mensaje.trim() !== "") {
            document.write(`\nEnviando mensaje a: ${numero}`)
            document.write("<br>")
            document.write(`Mensaje: ${mensaje}`)
            document.write("<br>")
            document.write("<b>Mensaje enviado al destinatario <i class='bi bi-check-all'></i></b>")
        } else {
            document.write("Numero o mensaje no validos")
        }
        document.write("<hr>")
    }
    
}


// Creamos los objetos a partir de instanciar la clase Celular
let objeto_1 = new Celular("Samsung", "Galaxy S21", "Android", "4000mAh", "8 GB", "128 GB")
let objeto_2 = new Celular("Apple", "Iphone XS", "iOS", "3200mAh", "6 GB", "256 GB")
let objeto_3 = new Celular("Xiaomi", "Redmi note 10", "Android", "5000mAh", "4 GB", "64 GB")

// Mostrar los detalle objeto_1
objeto_1.mostrarDetalles()

// Hacer llamada objeto_1
objeto_1.hacerLlamadas()

// Enviar mensaje objeto_1
objeto_1.enviarMensaje()



// Mostrar los detalle objeto_2
objeto_2.mostrarDetalles()

// Hacer llamada objeto_2
objeto_2.hacerLlamadas()

// Enviar mensaje objeto_2
objeto_2.enviarMensaje()



// Mostrar los detalle objeto_3
objeto_3.mostrarDetalles()

// Hacer llamada objeto_3
objeto_3.hacerLlamadas()

// Enviar mensaje objeto_3
objeto_3.enviarMensaje()