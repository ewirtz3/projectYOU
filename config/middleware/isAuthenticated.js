// This function ensures that the user is logged in to view their data. 
module.exports = (req, res, next) =>{
    if(req.user) {
        return next()
    }
// If a user isn't logged in correctly it redirects them to the home/login page.
    return res.redirect('/')
}