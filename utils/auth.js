/* If user is not logged in, they will be directed to the login page
if they are logged in the will be moved to the next page
*/
const withAuth = (req, res, next) => {
    if(!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
   }};

module.exports = withAuth