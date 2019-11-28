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

  addListItems(event, id) {
    event.preventDefault();
    let listItems = event.target.listItems.value;
    ListService.addListItems(id, listItems);
    _drawLists();
  }

  deleteListItems(listId, listIndex) {
    ListService.deleteListItem(listId, listIndex);
    _drawLists();
  }

  // deleteListConfirm(id) {
  //   var r = confirm("Are You Sure!");
  //   if (r == true) {
  //     ListService.deleteList(id);
  //     _drawLists();
  //   } else {
  //     return
  //   }
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
          'Your file has been deleted.',
          'success'
        )
      } else return
    })

  }

  // deleteListItemConfirm(listId, listIndex) {
  //   var r = confirm("Are You Sure!");
  //   if (r == true) {
  //     ListService.deleteListItem(listId, listIndex);
  //     _drawLists();
  //   } else {
  //     return
  //   }
  // }

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
          'Your file has been deleted.',
          'success'
        )
      } else return
    })

  }
}
