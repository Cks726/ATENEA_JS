export class Paciente {
  namePaciente: string;
  lastNamePaciente: string;
  cc: number;
  cumple: string; // Cambiar de Date a string
  phonePaciente: string;

  constructor(name: string, lastName: string, cc: number, cumple: string, phone: string) {
    this.namePaciente = name;
    this.lastNamePaciente = lastName;
    this.cc = cc;
    this.cumple = cumple; // Asignar directamente la cadena en formato ISO
    this.phonePaciente = phone;
  }
}
