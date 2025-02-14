function status (request, response){
  response.status(200).json({"frase":"Hello, World"})
}

export default status;