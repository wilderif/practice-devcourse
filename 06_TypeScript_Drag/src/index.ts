interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
  dragOverHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
}

class DraggableNode implements Draggable {
  private static dragSrc: HTMLLIElement | null = null;
  private static dragDest: HTMLLIElement | null = null;

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
    // console.log(this.liElement.innerText);
    this.liElement.classList.add("dragging");
    DraggableNode.dragSrc = this.liElement;
  }

  dragEndHandler(event: DragEvent): void {
    // console.log(this.liElement.innerText);
    this.liElement.classList.remove("dragging");
    DraggableNode.dragSrc = null;
  }

  dragOverHandler(event: DragEvent): void {
    // console.log(this.liElement.innerText);
    // drop 허용하기 위하여?
    event.preventDefault();
    DraggableNode.dragDest = this.liElement;
  }

  dragLeaveHandler(event: DragEvent): void {
    DraggableNode.dragDest = null;
  }

  // 드래그 로직 다시 수정할 것
  // 교환할 것인지, 밀어낼 것인지
  dropHandler(event: DragEvent): void {
    event.preventDefault();
    console.log(DraggableNode.dragSrc?.innerHTML);
    console.log(DraggableNode.dragDest?.innerText);
    if (
      DraggableNode.dragSrc &&
      DraggableNode.dragDest &&
      DraggableNode.dragSrc !== DraggableNode.dragDest
    ) {
      draggableListEl.insertBefore(
        DraggableNode.dragSrc,
        DraggableNode.dragDest
      );

      draggableListEl.insertBefore(
        DraggableNode.dragDest,
        DraggableNode.dragSrc
      );
    }
  }
}

const draggableListEl = document.getElementById(
  "draggable-list"
)! as HTMLUListElement;

const draggableLiElList = document.querySelectorAll(
  "#draggable-list li"
)! as NodeListOf<HTMLLIElement>;

// 생성자 함수를 통해 instance에 eventListener만 달아주는데,
// counfigure method에서 addEventListener할 때,
// this binding을 해야하는지
draggableLiElList.forEach((node) => {
  new DraggableNode(node);
});
