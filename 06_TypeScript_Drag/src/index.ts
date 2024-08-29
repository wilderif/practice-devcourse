interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

class DraggableList implements Draggable {
  constructor(private liElement: HTMLLIElement) {
    this.configure();
  }

  private configure() {
    this.liElement.addEventListener(
      "dragstart",
      this.dragStartHandler.bind(this)
    );

    this.liElement.addEventListener("dragend", this.dragEndHandler.bind(this));
  }

  dragStartHandler(event: DragEvent): void {}

  dragEndHandler(event: DragEvent): void {}
}

// const draggableLiElArray = Array.from(
//   document.querySelectorAll("#draggable-list li")
// ) as HTMLLIElement[];

const draggableLiElList = document.querySelectorAll(
  "#draggable-list li"
) as NodeListOf<HTMLLIElement>;

draggableLiElList.forEach((node) => {
  console.log(node);
});
