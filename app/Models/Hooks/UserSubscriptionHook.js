'use strict'

const Kue = use('Kue')
const Job = use('App/Jobs/NewTaskMail')

const UserSubscriptionHook = (exports = module.exports = {})

UserSubscriptionHook.sendNewSubscriptionMail = async userSubscriptionInstance => {
  const { email, username } = await userSubscriptionInstance.user().fetch()
  const { id } = userSubscriptionInstance

  Kue.dispatch(Job.key, { email, username, id }, { attempts: 3 })
}
