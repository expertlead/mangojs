
const superagent = require('superagent');
const api = require('../../utils/api_util');
const services = require('../info/description');

exports.get_subscriptions = async(fn) => {
    try {
        const obj_res = await api.run_service(services.users.get_user_subscriptions);
        if (!obj_res) {
            console.log("response not received/valid");
            return(fn(false));
        }
        console.log(obj_res.body.result);
        return(fn(true));
    } catch(ex) {
        console.log('get subscription EXCEPTION OCCURED:', ex.toString());
        return(fn(false));
    }
}