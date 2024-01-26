function status(request, response) {
  response.status(200).json({ chave: "aluno curso .dev" });
}

export default status;
