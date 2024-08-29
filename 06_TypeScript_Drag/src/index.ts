interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
  dragOverHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
}

let dragTarget = -1;

class DraggableNode implements Draggable {
  constructor(private liElement: HTMLLIElement) {
    this.configure();
  }

  private configure() {
    this.liElement.addEventListener(
      "dragstart",
      this.dragStartHandler.bind(this)
    );
    this.liElement.addEventListener("dragend", this.dragEndHandler.bind(this));
    this.liElement.addEventListener(
      "dragover",
      this.dragOverHandler.bind(this)
    );
    this.liElement.addEventListener("drop", this.dropHandler.bind(this));
  }

  dragStartHandler(event: DragEvent): void {
    console.log(this.liElement.innerText);
    this.liElement.classList.add("dragging");
  }

  dragEndHandler(event: DragEvent): void {
    console.log(this.liElement.innerText);
    this.liElement.classList.remove("dragging");
  }

  dragOverHandler(event: DragEvent): void {
    console.log(this.liElement.innerText);
    // drop 허용하기 위하여?
    event.preventDefault();
    // dragTarget =;
  }

  dragLeaveHandler(event: DragEvent): void {}

  dropHandler(event: DragEvent): void {
    event.preventDefault();
  }
}

const draggableLiElList = document.querySelectorAll(
  "#draggable-list li"
) as NodeListOf<HTMLLIElement>;

draggableLiElList.forEach((node) => {
  new DraggableNode(node);
});
