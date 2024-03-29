import List from "../Models/List.js";
import store from "../store.js";

//Public
class ListService {
  deleteListItem(listId, listIndex) {
    let listToDeleteListItem = store.State.lists.find(
      list => list.id == listId
    );
    listToDeleteListItem.listItem.splice(listIndex, 1);
    store.saveState();
  }

  addListItems(id, listItems) {
    let listToAddListItem = store.State.lists.find(list => list.id == id);
    listToAddListItem.listItem.push(listItems);
    store.saveState();
  }

  deleteList(id) {
    let index = store.State.lists.findIndex(list => list.id == id);
    store.State.lists.splice(index, 1);
    store.saveState();
  }

  makeList(rawList) {
    store.State.lists.push(new List(rawList));
    store.saveState();
  }
}
let service = new ListService();
export default service;
