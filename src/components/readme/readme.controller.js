import showdown from 'showdown';

class ReadmeController {
  constructor($state, UserModel, $sce) {
    this.$sce = $sce;
    this.converter = new showdown.Converter();
    console.log($state.params.project);
    this.header = `${$state.params.user} / ${$state.params.project}`;

    UserModel.getRepo($state.params.user, $state.params.project)
      .then((response) => {
        this.setReadmeContent(atob(response.data.content));
      })
  }
  setReadmeContent(mdContent) {
    let html = this.converter.makeHtml(mdContent);
    this.content = this.$sce.trustAsHtml(html);
  }
}

export default ReadmeController;