export interface Usuario {
    idUsuario: number;
    nome: string;
    email: string;
    cpf: string;
    senha: string;
    cargo: Cargo;
    registrosDeHoras: RegistroDeHoras[];
    relatoriosDeHoras: RelatorioDeHoras[];
}

export interface Cargo {
    idCargo: number;
    tipo: string;
    usuarios: Usuario[];
}

export interface RegistroDeHoras {
    id: number;
    usuario: Usuario;
    dataHoraEntrada: string;
    dataHoraSaida: string;
}

export interface RelatorioDeHoras {
    id: number;
    usuario: Usuario;
    data: string;
    minutosTrabalhados: string;
}