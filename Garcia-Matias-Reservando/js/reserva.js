var Reserva = function(horario, cantidad, precio, descuento) {
    this.horario = horario;
    this.cantidad = cantidad;
    this.precio = precio;
    this.descuento = descuento;
}

Reserva.prototype.precioBase = function() {
    return this.cantidad * this.precio;

}

Reserva.prototype.descuentosGrupo = function() {
    if (this.cantidad >= 4 && this.cantidad <= 6) {
        return this.precioBase() * 5 / 100;
    } else if (this.cantidad >= 7 && this.cantidad <= 8) {
        return this.precioBase() * 10 / 100;
    } else if (this.cantidad > 8) {
        return this.precioBase() * 15 / 100;
    }
    return 0;
}

Reserva.prototype.descuentosCodigo = function() {
    switch (this.descuento) {
        case "DES15":
            return this.precioBase() * (15 / 100);
            break;
        case "DES200":
            return 200;
            break;
        case "DES1":
            return this.precio;
            break;
        default:
            return 0;
    }
}

Reserva.prototype.adicionalesHorario = function() {
    if (this.horario.getHours() >= 13 && this.horario.getHours() <= 14 || this.horario.getHours() >= 20 && this.horario.getHours() <= 21) {
        return this.precioBase() * (5 / 100);
    }
    return 0;
}
Reserva.prototype.adicionalFinDeSemana = function() {
    if (this.horario.getDay() === 0 || this.horario.getDay() === 5 || this.horario.getDay() === 6) {
        return this.precioBase() * (10 / 100);
    }
    return 0;
}

Reserva.prototype.precioTotal = function() {
    return this.precioBase() + this.adicionalesHorario() + this.adicionalFinDeSemana() - this.descuentosGrupo() - this.descuentosCodigo();

}