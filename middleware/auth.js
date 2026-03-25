const { getUser } = require('../service/auth'); 

async function restrictToLoggedinUserOnly(req, res, next){
    // const userUid = req.cookies?.uid;

    const userUid = req.headers[authorization];

    if(!userUid) return res.redirect('/login');
    const token = userUid.split(" ")[1];  // Bearer ghjkuy488tr88rdvjc876ty -> userUid
    // const user = getUser(userUid);
    const user = getUser(token);

    if(!user) return res.redirect('/login');

    req.user = user;
    next();
}

async function checkAuth(req, res, next){
    // const userUid = req.cookies?.uid;
    const userUid = req.headers[authorization];
    const token = userUid.split(" ")[1];

    // const user = getUser(userUid);

    const user = getUser(token);
    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth,
};