
const Service = require('../../utils/constructor').Service

module.exports = {
  "auth" : {
    "create_token": new Service('/api/auth/token','POST'),
    "get_refresh_token": new Service('/api/auth/token/refresh','GET'),
    "get_token_zapier": new Service('/api/auth/token/zapier','POST'),
    "register_user": new Service('/api/users','POST', {payload:'register_user'}),
    "verify_registration_token": new Service('api/users/verify','GET', {needparams:true}),
    "complete_partial_registration": new Service('api/users/~{id}','GET'),
    "get_token_capi_user": new Service('api/auth/capiusertoken','GET'),
    "get_project_token": new Service('api/auth/projectToken/~{pid}','GET'),
    "get_token_from_registration_token": new Service('api/auth/token/regitoken','GET'),
    "get_dashboard_token": new Service('api/subscription/~{id1}/dashboards/dashboard/~{id2}','GET'),
    "verify_registration_token": new Service('api/auth/dashboardUserAuth','POST')
  },
  "users": {
    "get_user_subscriptions": new Service('/api/subscriptions', 'GET')
  }
}

