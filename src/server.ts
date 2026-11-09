import express from "express";

const app = express();
const porta = 3000;

const estados = [
  { sigla: "AC", capital: "Rio Branco" },
  { sigla: "AL", capital: "Maceió" },
  { sigla: "AP", capital: "Macapá" },
  { sigla: "AM", capital: "Manaus" },
  { sigla: "BA", capital: "Salvador" },
  { sigla: "CE", capital: "Fortaleza" },
  { sigla: "DF", capital: "Brasília" },
  { sigla: "ES", capital: "Vitória" },
  { sigla: "GO", capital: "Goiânia" },
  { sigla: "MA", capital: "São Luís" },
  { sigla: "MT", capital: "Cuiabá" },
  { sigla: "MS", capital: "Campo Grande" },
  { sigla: "MG", capital: "Belo Horizonte" },
  { sigla: "PA", capital: "Belém" },
  { sigla: "PB", capital: "João Pessoa" },
  { sigla: "PR", capital: "Curitiba" },
  { sigla: "PE", capital: "Recife" },
  { sigla: "PI", capital: "Teresina" },
  { sigla: "RJ", capital: "Rio de Janeiro" },
  { sigla: "RN", capital: "Natal" },
  { sigla: "RS", capital: "Porto Alegre" },
  { sigla: "RO", capital: "Porto Velho" },
  { sigla: "RR", capital: "Boa Vista" },
  { sigla: "SC", capital: "Florianópolis" },
  { sigla: "SP", capital: "São Paulo" },
  { sigla: "SE", capital: "Aracaju" },
  { sigla: "TO", capital: "Palmas" },
];

app.get("/estados/:sigla", (req, res) => {
  const sigla = req.params.sigla.toUpperCase();
  const estado = estados.find((e) => e.sigla === sigla);

  if (estado) {
    res.status(200).json({ sigla: estado.sigla, capital: estado.capital });
  } else {
    res.status(404).json({ erro: "Estado não encontrado." });
  }
});

app.listen(porta, () => {
  console.log("Servidor rodando na porta " + porta);
});
