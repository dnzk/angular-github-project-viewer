class UserController {
  constructor($state, UserModel) {
    this.repos = [];

    UserModel.getUser($state.params.user)
      .then(result => {
        this.setRepos(result.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  setRepos(repos) {
    this.repos = repos;
  }
}

export default UserController;