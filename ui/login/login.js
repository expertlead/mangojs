
exports.open_url = async(str_url, str_confim, fn) => {
    try {
        let driver = global.driver;
        let utils = global.utils;
        await driver.get(str_url);
        await utils.ui.wait_for(str_confim);
        await utils.generic.sleep(2);
        await (elem = utils.ui.get_element(str_confim));
        if (!elem) {
            console.log("Element '", str_confim, "' not found");
            return(fn(false));
        }
        return(fn(true));
    } catch (error) {
        console.log("OPEN URL EXCEPTION OCCURED", error.toString());
        return(fn(false));
    }
}