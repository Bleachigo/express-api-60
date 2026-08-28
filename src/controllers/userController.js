export const userController = {
  getUsers(req, res) {
    res.send('Get users route');
  },
  postUsers(req, res) {
    res.send('Post users route');
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
