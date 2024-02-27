function status(request, response) {
  response.status(200).json({
    chave: "retorno de status ok",
  });
}

export default status;
