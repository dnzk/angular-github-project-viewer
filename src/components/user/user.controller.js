class UserController {
  constructor($state, UserModel) {
    this.repos = [];
    this.$state = $state;
    this.header = `${$state.params.user}'s projects`;

    UserModel.getUser($state.params.user)
      .then(result => {
        this.setRepos(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  setRepos(repos) {
    this.repos = repos;
  }
  goToRepo(repo) {
    this.$state.go('project', {
      user: this.$state.params.user,
      project: repo
    });
  }
}

export default UserController;