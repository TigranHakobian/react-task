import React, { Component } from "react";
import ItemlDataService from "../services/item.service";
import Items from "./items.component";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveItem = this.setActiveItem.bind(this);
    this.removeAllItems = this.removeAllItems.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      items: [],
      currentTutorial: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    ItemlDataService.getAll().on("value", this.onDataChange);
  }

  componentWillUnmount() {
    ItemlDataService.getAll().off("value", this.onDataChange);
  }

  onDataChange(list) {

    let items = [];

    list.forEach((item) => {
      let key = item.key;
      let data = item.val();
      items.push({
        key: key,
        title: data.title,
        published: data.published,
      });
    });
    this.setState({
      items: items,
    });
  }

  refreshList() {
    this.setState({
      currentItem: null,
      currentIndex: -1,
    });
  }

  setActiveItem(tutorial, index) {
    this.setState({
      currentItem: tutorial,
      currentIndex: index,
    });
  }

  removeAllItems() {
    ItemlDataService.deleteAll()
      .then(() => {
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { items, currentItem, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>items List</h4>

          <ul className="list-group">
            {items &&
              items.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveItem(tutorial, index)}
                  key={index}
                >
                  {tutorial.title}
                </li>
              ))}
          </ul>
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllItems}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentItem ? (
            <Items
              tutorial={currentItem}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>Please click on a item...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ItemList