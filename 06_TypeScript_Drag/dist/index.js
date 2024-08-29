"use strict";
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
        // console.log(this.liElement.innerText);
        this.liElement.classList.add("dragging");
        DraggableNode.dragSrc = this.liElement;
    }
    dragEndHandler(event) {
        // console.log(this.liElement.innerText);
        this.liElement.classList.remove("dragging");
        DraggableNode.dragSrc = null;
    }
    dragOverHandler(event) {
        // console.log(this.liElement.innerText);
        // drop 허용하기 위하여?
        event.preventDefault();
        DraggableNode.dragDest = this.liElement;
    }
    dragLeaveHandler(event) {
        DraggableNode.dragDest = null;
    }
    // 드래그 로직 다시 수정할 것
    // 교환할 것인지, 밀어낼 것인지
    dropHandler(event) {
        var _a, _b;
        event.preventDefault();
        console.log((_a = DraggableNode.dragSrc) === null || _a === void 0 ? void 0 : _a.innerHTML);
        console.log((_b = DraggableNode.dragDest) === null || _b === void 0 ? void 0 : _b.innerText);
        if (DraggableNode.dragSrc &&
            DraggableNode.dragDest &&
            DraggableNode.dragSrc !== DraggableNode.dragDest) {
            draggableListEl.insertBefore(DraggableNode.dragSrc, DraggableNode.dragDest);
            draggableListEl.insertBefore(DraggableNode.dragDest, DraggableNode.dragSrc);
        }
    }
}
DraggableNode.dragSrc = null;
DraggableNode.dragDest = null;
const draggableListEl = document.getElementById("draggable-list");
const draggableLiElList = document.querySelectorAll("#draggable-list li");
draggableLiElList.forEach((node) => {
    new DraggableNode(node);
});
