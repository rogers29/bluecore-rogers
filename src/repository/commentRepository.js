const database = require('../config/database')

module.exports = class CommentRepository {
  // TODO: Criar aqui o metodo que busca os comentarios no banco de dados
  static async listByPostId (id) {
    const result = await database
      .select(
        'Id',
        'UserName',
        'Comment',
        'PostId',
        'CreatedAt',
        'UpdatedAt'
      )
      .from('Comments')
      .where({ 'Comments.PostId': id })

    return result
  }

  static async saveComment (request) {
    const result = await database
      .insert({
        PostId: request.body.PostId,
        UserName: request.body.UserName,
        Comment: request.body.Comment
      })
      .from('Comments')

    return result
  }
}
