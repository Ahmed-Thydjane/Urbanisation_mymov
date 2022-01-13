const auth = require("./auth");
const {sendError, sendMessage}= require("./message");

async function checklogin(req, res){
    const isAuth = await auth.authenticate(req,res);
    console.log(isAuth);
    if(isAuth){
        return sendMessage(res,isAuth)
    }else{
        return sendError(res,'Login ou Password incorrecte');
    }
}
module.exports.checklogin = checklogin;
