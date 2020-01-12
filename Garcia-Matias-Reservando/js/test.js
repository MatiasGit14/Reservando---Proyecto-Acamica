var expect = chai.expect;

// Testeo Restaurant
describe("Restaurant", () => {
    // Testeo Reservar Horario
    describe("Reservar Horario", () => {
        //Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.
        var restaurant = new Restaurant(27, "Tito", "Desayuno", "Nueva York", ["12:00", "13:00", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);

        it("Eliminar horario elegido del array", () => {
                expect(restaurant.reservarHorario("13:00")).to.be.eql(restaurant.horarios["12:00", "15:00"]);
            })
            //Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.
        it("Horario que no se posee, no modifica array", () => {
                expect(restaurant.reservarHorario("17:00")).to.be.eql(restaurant.horarios["12:00", "13:00", "15:00"]);
            })
            //Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.
        it("Reservar sin parametro no modifica array", () => {
            expect(restaurant.reservarHorario()).to.be.eql(restaurant.horarios["12:00", "13:00", "15:00"]);
        })

    })

    // Testeo ObtenerPuntuacion
    describe("Obtener Puntuacion", () => {
        // Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.
        it("Calcular promedio puntuacion", () => {
                var restaurant = new Restaurant(28, "Pato", "Cena", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
                expect(restaurant.obtenerPuntuacion()).to.be.eql(6.8);
            })
            //Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.
        it("Restaurant sin calificar es cero", () => {
            var restaurant = new Restaurant(28, "Pato", "Cena", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", []);
            expect(restaurant.obtenerPuntuacion()).to.be.eql(0);
        })
    });
    describe("Calificar", () => {
        //Elegir pruebas
        let restaurant = new Restaurant(28, "Pato", "Cena", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
        it("La nueva calificacion se agrega al array", () => {
            restaurant.calificar(8);
            expect(restaurant.calificaciones).to.have.lengthOf(6);
        })
        it("La nueva clasificacion es mayor que 0", () => {
            restaurant.calificar(-5);
            expect(restaurant.calificaciones).to.have.lengthOf(6);

        })
        it("La nueva clasificacion es menor que 10", () => {
            restaurant.calificar(10);
            expect(restaurant.calificaciones).to.have.lengthOf(6);

        })
    });
});

//Testeo Listado
describe("Listado", () => {
    // Testeo Buscar Restaurant
    describe("Buscar Restaurant", () => {
            //ELegir pruebas
            it("Buscar el Restaurant correcto por ID", () => {
                expect(listado.buscarRestaurante(20).nombre).to.be.eql("Pappelli");
            })
        })
        // Testeo Obtener Restaurant
    describe("Obtener Restaurant", () => {
        //ELegir pruebas
        it("Obtener Restaurant segun la ciudad", () => {
            expect(listado.obtenerRestaurantes(null, "Berlín", null)).to.have.lengthOf(5);
        })
        it("Obtener Restaurant segun el rubro", () => {
            expect(listado.obtenerRestaurantes("Pasta", null, null)).to.have.lengthOf(5);
        })
        it("Obtener Restaurant segun horario", () => {
            expect(listado.obtenerRestaurantes(null, null, "17:30")).to.have.lengthOf(7);
        })
    })
});

describe("Reserva", () => {
    let reserva1 = new Reserva(new Date(2018, 7, 24, 21, 00), 8, 350, "DES1");

    let reserva2 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")
    describe("Precio Base", () => {
        it("Calcular precio base", () => {
            expect(reserva2.precioBase()).to.be.eql(300);
        })
    })
    describe("Precio Total", () => {
        it("Calcular precio total", () => {
            expect(reserva2.precioTotal()).to.be.eql(100);
        })
        it("Calcular descuentos por cantidad", () => {
            expect(reserva2.descuentosGrupo()).to.be.eql(0);
        })
        it("Calcular descuentos por codigo", () => {
            expect(reserva2.descuentosCodigo()).to.be.eql(200);

        })
        it("Calcular adicionales por horario", () => {
            expect(reserva2.adicionalesHorario()).to.be.eql(0)
        })
        it("Calcular adicionales por fin de semana ", () => {
            expect(reserva2.adicionalFinDeSemana()).to.be.eql(0);
        })
    })
});