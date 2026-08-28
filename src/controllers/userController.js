export const userController = {
  getRoot(req, res) {
    res.send('Get root route');
  },
  getUser(req, res) {
    res.send('Get user route');
  },
  postUser(req, res) {
    res.send('Post root route');
  },
  getUserById(req, res) {
    res.send(`Get user by Id route: ${req.params.userId}`);
  },
  putUserById(req, res) {
    res.send(`Put user by Id route: ${req.params.userId}`);
  },
  deleteUserById(req, res) {
    res.send(`Delete user by Id route: ${req.params.userId}`);
  },
};
