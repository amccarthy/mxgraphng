
/******************      View          **************/

declare class mxCellState {

    cell: any;

}

declare var mxEdgeStyle: {

    /** Implements an entity relation style for edges (as used in database schema diagrams).  At the time
    * the function is called, the result array contains a placeholder (null) for the first absolute point,
    * that is, the point where the edge and source terminal are connected.  The implementation of the style
    * then adds all intermediate waypoints except for the last point, that is, the connection point between
    * the edge and the target terminal.  The first ant the last point in the result array are then replaced
    * with mxPoints that take into account the terminal’s perimeter and next point on the edge.
    */
    EntityRelation(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

    /** Implements a self-reference, aka. loop. */
    Loop(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

    /** Uses either SideToSide or TopToBottom depending on the horizontal flag in the cell style.
    * SideToSide is used if horizontal is true or unspecified.  See EntityRelation for a description of the parameters.
    */
    ElbowConnector(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

    /** Implements a vertical elbow edge.  See EntityRelation for a description of the parameters. */
    SideToSide(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

    /** Implements a horizontal elbow edge.  See EntityRelation for a description of the parameters */
    TopToBottom(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

    /** Implements an orthogonal edge style.  Use <mxEdgeSegmentHandler> as an interactive handler for this style. */
    SegmentConnector(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

    /** Implements a local orthogonal router between the given cells. */
    OrthConnector(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;
}


/******************      View end      **************/

declare class mxGraphLayout {
    constructor(graph: mxGraph);

    useBoundingBox: boolean;
    parent: mxCell;

    moveCell(cell: mxCell, x: number, y: number);
    resizeCell(cell: mxCell, bounds: mxRectangle);
    execute(parent: mxCell);

    getGraph(): mxGraph;

    getConstraint(key: string, cell: mxCell, edge?: mxCell, source?: boolean);
    
    traverse(vertex: mxCell, directed?: boolean, func?, edge?: mxCell, visited?);
    isAncestor(parent: mxCell, child: mxCell, traverseAncestors: boolean);
    isVertexMovable(cell: mxCell): boolean;
    isVertexIgnored(vertex: mxCell): boolean;
    isEdgeIgnored(edge: mxCell): boolean;
    setEdgeStyleEnabled(edge: mxCell, value: string);
    setOrthogonalEdge(edge: mxCell, value: string);
    getParentOffset(parent: mxCell): mxPoint;
    setEdgePoints(edge: mxCell, points: mxPoint[]);
    setVertexLocation(cell: mxCell, x: number, y: number): mxRectangle;
    getVertexBounds(cell: mxCell): mxRectangle;
    arrangeGroups(cells: mxCell[], border, topBorder, rightBorder, bottomBorder, leftBorder): any;
}

declare class mxHierarchicalLayout extends mxGraphLayout {
    parentBorder: number;
    forceConstant: any;
    interRankCellSpacing: number;
    resizeParent: boolean;
    disableEdgeStyle: boolean;

    constructor(graph: mxGraph);
}

declare class mxFastOrganicLayout extends mxGraphLayout {
}

declare class mxCompactTreeLayout extends mxGraphLayout {
    constructor(graph: mxGraph, horizontal?: boolean, invert?: boolean);
}

