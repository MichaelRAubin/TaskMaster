import List from "../Models/List.js";
import store from "../store.js";

//Public
class ListService {
  deleteList(id) {
    let index = store.State.lists.findIndex(list => list.id == id);
    store.State.lists.splice(index, 1);
    store.saveState();
  }
  makeList(rawList) {
    store.State.lists.push(new List(rawList));
    store.saveState();
    //TODO  Here is where we handle all of our business logic,
    //given the information you need in the controller,
    //what methods will you need to do when this class is first 'constructed'?
    //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  }
}
let service = new ListService();
export default service;
