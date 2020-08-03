declare class mxObjectCodec {
  static allowEval: boolean;
}

declare class mxUtils {
  static load(config: any): any;

  static makeDraggable(element, graphF, funct, dragElement?, dx?, dy?, autoscroll?, scalePreview?, highlightDropTargets?, getDropTarget?): any;
}

declare class mxEditor {
  constructor(node: any);
  graph;
  defaultEdge;
  addListener(name, funct);
  installChangeHandler(graph: mxGraph);
  setStatus(status);
  isModified(): boolean;
  setModified(value: boolean);
  setMode(value: string);
}

declare class mxPanningManager {
  constructor(node: any);

  border;
}
