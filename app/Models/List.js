import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.title = data.title;
    this.listItems = data.listItems || [];

  }
  get Template() {
    return `
    <div class="col-12 col-lg-3">
    <div class="card mt-3 card-background border-primary">
      <div class="card-body">
        <h5 class="card-title">${this.title}
         <span onclick="app.listController.deleteListConfirm('${
      this.id
      }')"><i class="far fa-trash-alt"></i></span></h5>
      <form onsubmit="app.listController.addListItems(event, '${this.id}')">
      <input
      type="text"
      name="listItems"
      placeholder="List Item..."
      required
      />
      <button class="btn btn-success" type="submit">Add</button>
      </form>
      <ul class="card-text mt-3">
            ${this.getListItemTemplate()}
        </ul>
      </div>
    </div>
  </div>
  `;
  }

  getListItemTemplate() {
    let template = "";
    this.listItems.forEach((listItem, index) => {
      template += `<li>${listItem} <span onclick="app.listController.deleteListItemConfirm('${this.id}', ${index})"><i class="far fa-trash-alt"></i></span></li>`;
    });
    return template;
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
