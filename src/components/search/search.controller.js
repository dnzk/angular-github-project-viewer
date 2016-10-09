class SearchController {
  constructor(UserModel, $state) {
    this.UserModel = UserModel;
    this.$state = $state;
  }
  search(username) {
    this.$state.go('user', {
      user: username
    });
    // let $state = this.$state;
    // if (username) {
    //   this.UserModel.getRepo(username)
    //     .then(function (result) {
    //       $state.go('project');
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
  }
}

export default SearchController;