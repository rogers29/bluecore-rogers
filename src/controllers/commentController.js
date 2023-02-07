const CommentService = require('../service/commentService')

module.exports = class CommentController {
  // TODO: Criar metodo que retorna a lista de comentarios no banco de dados
  static listByPostId (request, response, next) {
    CommentService.listByPostId(request.params.id)
      .then((unities) => response.status(200).send(unities))
      .catch(next)
  }

  static saveComment (request, response, next) {
    CommentService.saveComment(request)
      .then((unities) => response.status(200).send(unities))
      .catch(next)
  }
}
