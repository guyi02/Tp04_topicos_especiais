export type Course = {
  period: string;
  subjects: {
    sigla: string;
    titulo: string;
    status: string;
    nf: number;
    freq: number;
    dia_aula: string;
    hora: string;
  };
};
