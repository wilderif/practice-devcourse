"use strict";
let dragTarget = -1;
class DraggableNode {
    constructor(liElement) {
        this.liElement = liElement;
        this.configure();
    }
    configure() {
        this.liElement.addEventListener("dragstart", this.dragStartHandler.bind(this));
        this.liElement.addEventListener("dragend", this.dragEndHandler.bind(this));
        this.liElement.addEventListener("dragover", this.dragOverHandler.bind(this));
        this.liElement.addEventListener("drop", this.dropHandler.bind(this));
    }
    dragStartHandler(event) {
        console.log(this.liElement.innerText);
        this.liElement.classList.add("dragging");
    }
    dragEndHandler(event) {
        console.log(this.liElement.innerText);
        this.liElement.classList.remove("dragging");
    }
    dragOverHandler(event) {
        console.log(this.liElement.innerText);
        // drop 허용하기 위하여?
        event.preventDefault();
        // dragTarget =;
    }
    dragLeaveHandler(event) { }
    dropHandler(event) {
        event.preventDefault();
    }
}
const draggableLiElList = document.querySelectorAll("#draggable-list li");
draggableLiElList.forEach((node) => {
    new DraggableNode(node);
});
