// node --inspect-brk testterminal.js

const delay = require('delay');

const apiClass = require('./hm-cloud-api.js');
const api = new apiClass(process.arg[0]);

console.log("------ test start --------");

(async () => {
    try {
        console.log("getHomematicHosts:");
        await api.getHomematicHosts();
        console.log("1st:");
        await api.auth1connectionRequest();
        console.log("2nd:");
        while (!await api.auth2isRequestAcknowledged()) {
            console.log("press blue button...");
            await delay(2000);
        }
        console.log("3rd:");
        await api.auth3requestAuthToken();
        
        console.log("config :")
        console.log(api.getSaveData());
    } catch (e) {
        console.error(e);
    }
})();
