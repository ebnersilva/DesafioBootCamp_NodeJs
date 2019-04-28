'use strict'

const Route = use('Route')

// Rotas públicas
Route.post('users', 'UserController.store') // Criação do usuário
Route.post('sessions', 'SessionController.store') // Criação da sessão (Login)
Route.post('passwords', 'ForgotPasswordController.store') // Esqueci minha senha (Solicitação)
Route.put('passwords', 'ForgotPasswordController.update') // Auteração da senha nova

// O group abaixo serve para fazer com que somente os usuários autenticados possam utilizar as rotas abaixo
Route.group(() => {
  Route.get('sessions', 'SessionController.show') // Mostra o perfil do usuário logado

  Route.post('preference', 'PreferenceController.store') // Criação da preferência (Categoria dos MeetUps)

  Route.get('users', 'UserController.index') // Listaghem de todos os usuários da aplicação
  Route.put('users/:id', 'UserController.update') // Alteração do perfil do usuário
  Route.post('/user_preferences', 'UserPreferenceController.store') // Criação da preferência do usuário
  Route.post('/usersubscriptions', 'UserSubscriptionController.store') // Rota de criação de inscrição do usuário no evento
  Route.get(
    '/usersubscriptions/:id',
    'UserSubscriptionController.getSubscribed'
  ) // Rota que mostra a quantidade de inscritos no meetup

  Route.get('/files/:id', 'FileController.show') // Mostrar um arquivo criado
  Route.post('/files', 'FileController.store') // Gravação de um arquivo

  Route.get('/meetups', 'MeetUpController.index') // Mostra todos os meetups da tabela
  Route.get('/meetupsnotsubscript', 'MeetUpController.indexNotSubscript') // Mostra todos os meetups da tabela
  Route.get('/meetupssubscript', 'MeetUpController.indexSubscript') // Mostra todos os meetups da tabela
  Route.get('/meetupsrecomended', 'MeetUpController.indexRecommended') // Mostra todos os meetups recomendados para o usuário (Os que o usuário ainda não está inscrito)
  Route.get('/meetups/:id', 'MeetUpController.show') // Mostra o meetup atual de acordo com o id informado por parametro
  Route.get('/meetupsbytitle/:title', 'MeetUpController.showByTitle') // Mostra o meetup atual de acordo com o titulo informado por parametro
  Route.get(
    '/meetupssubscriptbytitle/:title',
    'MeetUpController.showSubscriptByTitle'
  ) // Mostra os meetups que o usuário está inscrito de acordo com o titulo informado por parametro
  Route.get(
    '/meetupsrecommendedbytitle/:title',
    'MeetUpController.showRecommendedByTitle'
  ) // Mostra os meetups recomendados mas que ainda o usuário não está inscrito de acordo com o titulo informado por parametro

  Route.post('/meetups', 'MeetUpController.store') // Rota de criação de um novo MeetUp
}).middleware(['auth']) // Middleware de autenticação que ouve as rotas dentro do group
