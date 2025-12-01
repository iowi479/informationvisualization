"use strict";

function getTutorialInfo() {
  return {
    exerciseNum: 7,
  };
}

// feel free to tweak this DURING TESTING
const quadtreeMaxDepth = 10;

class Node {
  constructor(x0, x1, y0, y1, depth = 0) {
    this.x0 = x0;
    this.x1 = x1;
    this.y0 = y0;
    this.y1 = y1;
    this.depth = depth;
    this.circles = [];
    this.children = [];
  }

  split(maxDepth) {
    if (this.depth >= maxDepth) {
      return;
    }

    if (this.children.length > 0) {
      // Already split
      return;
    }

    if (this.circles.length <= 1) {
      // No need to split further
      return;
    }

    const midX = (this.x0 + this.x1) / 2;
    const midY = (this.y0 + this.y1) / 2;

    const circles = this.circles;
    this.circles = [];

    this.children = [
      new Node(this.x0, midX, this.y0, midY, this.depth + 1), // Top-left
      new Node(midX, this.x1, this.y0, midY, this.depth + 1), // Top-right
      new Node(this.x0, midX, midY, this.y1, this.depth + 1), // Bottom-left
      new Node(midX, this.x1, midY, this.y1, this.depth + 1), // Bottom-right
    ];

    for (const circle of circles) {
      const x = circle.position.x;
      const y = circle.position.y;

      for (const child of this.children) {
        if (x >= child.x0 && x < child.x1 && y >= child.y0 && y < child.y1) {
          child.circles.push(circle);
          break;
        }
      }
    }

    // Recursively split children
    for (const child of this.children) {
      child.split(maxDepth);
    }
  }
}

/**
 * Initialize the quadtree.
 *
 * @param circles: Array<Two.Circle>: The array of data to add to the quadtree.
 *                                    Each datum is a `Two.Circle` object. Its
 *                                    position is stored in its `position`
 *                                    property, which is a `Two.Vector` with an
 *                                    `x` and `y` value.
 * @param x0: number:                 left boundary
 * @param x1: number:                 right boundary
 * @param y0: number:                 upper boundary
 * @param y1: number:                 lower boundary
 *
 * @return: any:                      The quadtree root node. The shape of this
 *                                    object is up to you. This is the same
 *                                    object that will be passed to
 *                                    `getQuadtreeAreas` and
 *                                    `getClosestCircles`.
 */
function initTree(circles, x0, x1, y0, y1) {
  let root = new Node(x0, x1, y0, y1);
  root.circles = circles;
  root.split(quadtreeMaxDepth);
  return root;
}

/**
 * Get all quadtree boundary squares.
 *
 * @param quadtreeRoot: any:  The root of the quadtree, as returned by
 *                            `initQuadtree`
 *
 * @return: Array<{ x0: number, x1: number, y0: number, y1: number }>:
 *                            An array of objects with the minimal and maximal
 *                            x and y values for each node of the quadtree (not
 *                            only the leaves!). The return value will be used
 *                            to draw the squares.
 */
function getTreeAreas(quadtreeRoot) {
  let areas = [];

  areas.push({
    x0: quadtreeRoot.x0,
    x1: quadtreeRoot.x1,
    y0: quadtreeRoot.y0,
    y1: quadtreeRoot.y1,
  });

  // Recursively get areas from children
  for (const child of quadtreeRoot.children) {
    areas = areas.concat(getTreeAreas(child));
  }

  return areas;
}

/**
 * Find candidates for data (`Two.Circle` objects) within `radius` of (`x`,`y`).
 *
 * @param quadtreeRoot: any:    The root of the quadtree, as returned by
 *                              `initQuadtree`
 * @param x: number:            The x coordinate component
 * @param y: number:            The y coordinate component
 * @param radius: number:       The radius within which to return results.
 *
 * @return: Array<Two.Circle>:  An array of the data which *could be* within that
 *                              radius. Specifically, all data from all
 *                              quadtree leaves that at least partially lie
 *                              within the radius.
 */
function treeSearchAround(quadtreeRoot, x, y, radius) {
  const candidates = [];

  for (const child of quadtreeRoot.children) {
    let collision = checkCollision(
      child.x0,
      child.y0,
      child.x1 - child.x0,
      child.y1 - child.y0,
      x,
      y,
      radius,
    );

    if (collision) {
      if (child.children.length > 0) {
        // Recurse into children
        const childCandidates = treeSearchAround(child, x, y, radius);
        candidates.push(...childCandidates);
      } else {
        // Leaf node, add all circles
        candidates.push(...child.circles);
      }
    }
  }

  return candidates;
}

// Check if a rectangle and circle collide
// Rectangle defined by (x, y, width, height)
// Circle defined by (cx, cy, radius)
function checkCollision(x, y, width, height, cx, cy, radius) {
  const dx = Math.abs(cx - (x + width / 2));
  const dy = Math.abs(cy - (y + height / 2));

  // Farther away than half width/height plus radius
  if (dx > width / 2 + radius) {
    return false;
  }
  if (dy > height / 2 + radius) {
    return false;
  }

  // Within half width/height
  if (dx <= width / 2) {
    return true;
  }
  if (dy <= height / 2) {
    return true;
  }

  // Check corner distance with pythagorean theorem
  let cornerDistanceSq = (dx - width / 2) ** 2 + (dy - height / 2) ** 2;

  return cornerDistanceSq <= radius ** 2;
}
