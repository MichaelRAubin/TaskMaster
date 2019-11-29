import ListService from "../Services/ListService.js";
import store from "../store.js";

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
  // deleteList(id) {
  //   ListService.deleteList(id);
  //   _drawLists();
  // }

  addListItems(event, id) {
    event.preventDefault();
    let listItems = event.target.listItems.value;
    ListService.addListItems(id, listItems);
    _drawLists();
  }

  // deleteListItems(listId, listIndex) {
  //   ListService.deleteListItem(listId, listIndex);
  //   _drawLists();
  // }

  deleteListConfirm(id) {
    // @ts-ignore
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        ListService.deleteList(id);
        _drawLists();
        // @ts-ignore
        Swal.fire(
          'Deleted!',
          'Your list has been deleted.',
          'success'
        )
      } else return
    })

  }

  deleteListItemConfirm(listId, listIndex) {
    // @ts-ignore
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        ListService.deleteListItem(listId, listIndex);
        _drawLists();
        // @ts-ignore
        Swal.fire(
          'Deleted!',
          'Your list item has been deleted.',
          'success'
        )
      } else return
    })

  }
}
