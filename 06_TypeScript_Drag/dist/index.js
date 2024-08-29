"use strict";
class DraggableList {
    constructor(liElement) {
        this.liElement = liElement;
        this.configure();
    }
    configure() {
        this.liElement.addEventListener("dragstart", this.dragStartHandler.bind(this));
        this.liElement.addEventListener("dragend", this.dragEndHandler.bind(this));
    }
    dragStartHandler(event) { }
    dragEndHandler(event) { }
}
// const draggableLiElArray = Array.from(
//   document.querySelectorAll("#draggable-list li")
// ) as HTMLLIElement[];
const draggableLiElList = document.querySelectorAll("#draggable-list li");
draggableLiElList.forEach((node) => {
    console.log(node);
});
