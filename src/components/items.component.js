import React, { Component } from "react";
import ItemlDataService from "../services/item.service";

class Items extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = {
      currentItems: {
        key: null,
        title: "",

      },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { tutorial } = nextProps;
    if (prevState.currentItems.key !== tutorial.key) {
      return {
        currentItems: tutorial,
        message: ""
      };
    }

    return prevState.currentItem;
  }

  componentDidMount() {
    this.setState({
      currentItems: this.props.tutorial,
    });
  }

  onChangeTitle(e) {

    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItems: {
          ...prevState.currentItems,
          title: title,
        },
      };
    });
  }

  updateItem() {
    const data = {
      title: this.state.currentItems.title,
    };

    ItemlDataService.update(this.state.currentItems.key, data)
      .then(() => {
        this.setState({
          message: "The item was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteItem() {
    ItemlDataService.delete(this.state.currentItems.key)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    const { currentItems } = this.state;

    return (
      <div>
        <h4>Item</h4>
        {currentItems ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentItems.title}
                  onChange={this.onChangeTitle}
                />
              </div>
            </form>
            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteItem}>
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateItem}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a item...</p>
          </div>
        )}
      </div>
    );
  }
}

export default Items