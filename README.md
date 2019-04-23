# Desafio RocketSeat - BackEnd em NodeJS

Esse é um guia básico de instalação do BackEnd

1. Clone o repositório
2. No diretório da aplicação rode: adonis migration:run
3. No diretório da aplicação rode: adonis serve
4. Rode o script SQL disponibilizado em assets/sql/INITIAL_SQL para inicialização de valores no Banco de dados da aplicação (Mysql)
5. Processo finalizado

## Serviços disponíveis

### UserSubscription

POST -> http://localhost:3333/usersubscriptions -> Cria uma inscrição no banco de dados  

```
{
	"user_id": 2,
	"meetup_id": 1
}

```

GET -> http://localhost:3333/usersubscriptions/:id -> Retorna quantos inscritos tem no meetup informado por parametro  

### UserPreference

POST -> http://localhost:3333/user_preferences -> Cria as preferencias do usuário (1 ou mais preferencias)  

```
{
	"preferences": [
		{
			"user_id": 1,
			"pref_id": 2
		},
		{
			"user_id": 1,
			"pref_id": 1
		}
	]
}

```

### File

POST Multipart -> http://localhost:3333/files/file -> Grava o arquivo em uma pasta do sistema e gera um registro no banco de dados  
GET -> http://localhost:3333/files/:id -> Mostra a imagem de acordo com o ID  

### Preference

POST -> http://localhost:3333/preference -> Cria as preferencias padrão no banco de dados  

```
{
	"preferences": [
		{
			"description": "Front-End"
		},
		{
			"description": "Back-End"
		},
		{
			"description": "Mobile"
		},
		{
			"description": "DevOps"
		},
		{
			"description": "Gestão e Marketing"
		}
	]

}

```

### MeetUps

POST -> http://localhost:3333/meetups -> Cria o meetUp no banco de dados  

```
{
	"user_id": 1,
	"id_category": 1,
	"file_id": 2,
	"date_event": "2019-04-20 08:00:00",
	"location": "Avenida das Araucárias, 5400, Araucária - PR",
	"title": "Evento Front-End",
	"description": "Esse evento abordará CSS3 e será muito top de linha"
}

```

GET -> http://localhost:3333/meetupsbytitle/Evento%20Front-End -> Pesquisa o MeetUp pelo titulo  
GET -> http://localhost:3333/meetupsrecomended -> Mostra os MeetUps recomendados para o usuário de acordo com suas preferências  
GET -> http://localhost:3333/meetupssubscript -> Mostra os MeetUps que o usuário está inscrito  
GET -> http://localhost:3333/meetupsnotsubscript -> Mostra os MeetUps que o usuário não está inscrito  
GET -> http://localhost:3333/meetups -> Mostra todos os MeetUps  
GET -> http://localhost:3333/meetups/:id -> Pesquisa o MeetUp pelo id  

### ForgotPassword

POST -> http://localhost:3333/passwords -> Cria uma solicitação para redefinir a senha  

```
{
	"email": "ebner.suporte@hotmail.com",
	"redirect_url": "http://www.meusistema.com.br/resetar_senha"
}

```

PUT -> http://localhost:3333/passwords -> Redefini a senha no banco de dados  

```
{
	"token": "d717fce480b647e1a442",
	"password": "12341234"
}

```

### Sessions

POST -> http://localhost:3333/sessions -> Cria uma nova sessão no sistema gerando um token JWT  

```
{
	"email": "jenifer.dso@hotmail.com",
	"password": "123456"
}

```

### Users

POST -> http://localhost:3333/users -> Cria o usuário no banco de dados  

```
{
	"username":"emersoncaetano",
	"email": "emerson.c@hotmail.com",
	"password": "123456"
}

```

PUT -> http://localhost:3333/users:id -> Atualiza o usuário no banco de dados  

```
{
	"username":"ebnerdeath",
	"email": "ebner.suporte@hotmail.com",
	"password": "123456",
	"preferences": [
		{
			"user_id": 1,
			"pref_id": 2
		},
		{
			"user_id": 1,
			"pref_id": 3
		}
	]
}

```

GET -> http://localhost:3333/users -> Pesquisa todos os usuários no sistema  
