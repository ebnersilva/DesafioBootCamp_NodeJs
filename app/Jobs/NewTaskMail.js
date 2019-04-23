'use strict'

const Mail = use('Mail')
const Helpers = use('Helpers')

class NewTaskMail {
  // Quantos jobs quero lidar paralelamente (1, 2, 5, 10, 1000, etc...) por vez
  static get concurrency () {
    return 1
  }

  // Chave Unica gerada para cada job da nossa aplicação
  static get key () {
    return 'NewTaskMail-job'
  }

  // Lógica para envio do e-mail
  async handle ({ email, username, id }) {
    console.log(`Job: ${NewTaskMail.key}`)

    await Mail.send(
      ['emails.new_subscription'],
      { username, title: id },
      message => {
        message
          .to(email)
          .from('ebner.suporte@hotmail.com', 'Ebner | CiffraBuy')
          .subject('Nova inscrição')
      }
    )
  }
}

module.exports = NewTaskMail
