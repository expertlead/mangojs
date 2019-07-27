
const sel = global.sel;
// const q_builder = sel.buildTab.q_builder;
const utils = require('../../utils');
exports.add_question = async(str_ques_title, fn) => {
    try {
        await utils.generic.sleep(2);
        await utils.ui_utils.click_element(q_builder.add_ques);
        // await global.page.click('div.vz-proj-backbtn');
        await (str_loc_ques = utils.generic.substitute(q_builder.ques_select,{"title": str_ques_title}))
        await utils.ui_utils.click_element(str_loc_ques);
        await utils.generic.sleep(3);
        return(fn(true));
    } catch(ex) {
        console.log('add_question EXCEPTION OCCURED \n', ex.toString());
        return(fn(false));
    }
}