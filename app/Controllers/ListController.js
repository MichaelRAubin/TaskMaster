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
    let form = event.target;
    let newList = {
      title: form.title.value
    };
    ListService.makeList(newList);
    _drawLists();
    this.launch_toast();
    this.formReset();
  }

  formReset() {
    // @ts-ignore
    document.getElementById("newForm").reset();
  }
  launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
  }

  addListItems(event, id) {
    event.preventDefault();
    let listItems = event.target.listItems.value;
    ListService.addListItems(id, listItems);
    _drawLists();
  }

  deleteListConfirm(id) {
    // @ts-ignore
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#BA55D3',
      cancelButtonColor: '#808080',
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
      confirmButtonColor: '#BA55D3',
      cancelButtonColor: '#808080',
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
