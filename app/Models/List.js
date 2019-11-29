import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.id = data.id || generateId();
    this.title = data.title;
    this.listItems = data.listItems || [];

  }
  get Template() {
    return `
    <div class="col-12 col-lg-3">
    <div class="card mt-3 card-background card-border">
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
      <button class="btn btn-secondary" type="submit">Add</button>
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

}
