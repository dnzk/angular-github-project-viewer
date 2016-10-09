import MarkdownIt from 'markdown-it';

class ReadmeController {
  constructor($state, UserModel) {
    this.md = new MarkdownIt();
    UserModel.getRepo($state.params.user, $state.params.project)
      .then((response) => {
        console.log(response);
        console.log(atob(response.data.content));
        // let raw = atob(resonse.data.content);
        // console.log(this.md.render(raw));
      })
  }
}

export default ReadmeController;