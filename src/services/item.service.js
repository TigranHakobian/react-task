import firebase from "../firebase";

const db = firebase.ref("/tutorials");

class ItemlDataService {
  getAll() {
    return db;
  }

  create(item) {
    console.log(item)
    return db.push(item);
  }

  update(key, value) {
    console.log(value)
    return db.child(key).update(value);
  }

  delete(key) {
    console.log(key)
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new ItemlDataService();
