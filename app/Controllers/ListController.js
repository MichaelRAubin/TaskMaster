import ListService from "../Services/ListService.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let lists = store.State.lists;
  let template = "";
  lists.forEach(list => {
    template += list.Template;
  });
  document.querySelector("#lists").innerHTML = template;
}
_drawLists();

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  makeList(event) {
    event.preventDefault();
    let formData = event.target;
    let newList = {
      title: formData.title.value
    };
    ListService.makeList(newList);
    _drawLists();
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems
  deleteList(id) {
    ListService.deleteList(id);
    _drawLists();
  }

}
