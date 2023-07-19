export class Paciente {
  namePaciente: string;
  lastNamePaciente: string;
  cc: number;
  cumple: string; // Cambiar de Date a string
  age: number;
  phonePaciente: string;

  constructor(name: string, lastName: string, cc: number, cumple: string, age:number, phonePaciente: string) {
    this.namePaciente = name;
    this.lastNamePaciente = lastName;
    this.cc = cc;
    this.cumple = cumple; // Asignar directamente la cadena en formato ISO
    this.age = age;
    this.phonePaciente = phonePaciente;
  }
}
