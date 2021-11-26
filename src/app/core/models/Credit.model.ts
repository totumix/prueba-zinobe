export class Credit {
    id: number = Math.random();
    monto: number = null;
    nombre: string = JSON.parse(localStorage.getItem('user')).nombre;
    aprobado: boolean = null;
    fecha: string = null;
}