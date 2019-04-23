'use strict'

const UserSubscription = use('App/Models/UserSubscription')

class UserSubscriptionController {
  async index ({ request, response, view }) {}

  async create ({ request, response, view }) {}

  async store ({ request, response }) {
    const data = request.only(['user_id', 'meetup_id'])

    const userSubscription = await UserSubscription.create(data)

    return userSubscription
  }

  async getSubscribed ({ params }) {
    const meetupId = params.id

    const qtdSubscribed = UserSubscription.query()
      .where('meetup_id', meetupId)
      .countDistinct('id as getSubscribed')

    return qtdSubscribed
  }

  async show ({ params, request, response, view }) {}

  async edit ({ params, request, response, view }) {}

  async update ({ params, request, response }) {}

  async destroy ({ params, request, response }) {}
}

module.exports = UserSubscriptionController
