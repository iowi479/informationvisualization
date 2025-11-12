"use strict";

function getTutorialInfo() {
    return {
        exerciseNum: 4,
        groupNames: "Simon Schindler"
    }
}

/**
 * Calculates and assigns the sum of the children's weights (recursively) to this node.
 * @param {{ name: String, weight: Number|undefined, children Array|undefined }} node - tree node
 */
function sum_weights(node) {
    if (node.children && node.children.length > 0) {
        let totalWeight = 0;
        node.children.forEach(child => {
            sum_weights(child);
            totalWeight += child.weight;
        });
        node.weight = totalWeight;
    }
}

/**
 * Returns the maximum depth of the tree node.
 * @param {{ name: String, weight: Number|undefined, children Array|undefined }} node - tree node
 * @returns tree depth
 */
function getTreeDepth(node) {
    let depth = 0;
    node.children?.forEach(child => {
        const tmpDepth = getTreeDepth(child)
        if (tmpDepth > depth) {
            depth = tmpDepth
        }
    });
    return 1 + depth
}

/**
 * Recursively finds the minimum weight of all leaf nodes
 * @param {{ name: String, weight: Number, children Array|undefined }} node - tree node
 * @returns {Number} - The minimum weight of a leaf node in the subtree.
 */
function getMinLeafWeight(node) {
    if (!node.children || node.children.length === 0) {
        return node.weight;
    }

    let minWeight = Infinity;
    node.children.forEach(child => {
        const childMinWeight = getMinLeafWeight(child);
        if (childMinWeight < minWeight) {
            minWeight = childMinWeight;
        }
    });

    return minWeight;
}

/**
 * Calculates the minimum height for the whole chart to ensure the smallest
 * leaf node is tall enough for the text.
 * @param {{ name: String, weight: Number, children Array|undefined }} data - root node of the tree
 * @param {Number} suggestedHeight - The initial or suggested height of the drawing area.
 * @returns {Number} - The optimal height for the chart.
 */
function getOptimalChartHeight(data, suggestedHeight) {
    const minLeafWeight = getMinLeafWeight(data);

    // A minimum height (in pixels) required for the text to fit
    const MIN_NODE_HEIGHT_PX = 20;

    const yStep = MIN_NODE_HEIGHT_PX / minLeafWeight;

    // Weight of the root node determines the total required height
    const requiredHeight = data.weight * yStep;

    // INFO: To get the original result for Task2 (a), simply return suggestedHeight instead of the max(...) here.
    // return suggestedHeight;
    return Math.max(suggestedHeight, requiredHeight);
}

/**
 * Draws a single node of the stacked tree and recursively calls itself
 * for its children to create the full horizontal layout.
 *
 * @param {Two.js} two - Two.js instance used for drawing.
 * @param {{ name: String, weight: Number, children Array|undefined }} node - The current tree node to draw.
 * @param {Number} x - The starting X-coordinate (top-left) for the node's rectangle.
 * @param {Number} y - The starting Y-coordinate (top-left) for the node's rectangle.
 * @param {Number} width - The width of the node's rectangle
 * @param {Number} height - The height of the node's rectangle
 */
function iciclePlot(two, node, x, y, width, height) {
    const yStep = height / node.weight;
    const treeColor = '#adc7ea';
    const leafColor = '#ff8106';

    // Draw rectangle for the current node
    const rectHeight = node.weight * yStep;
    const rect = two.makeRectangle(x + width / 2, y + rectHeight / 2, width - 1, rectHeight - 1);
    rect.fill = node.children && node.children.length > 0 ? treeColor : leafColor;
    rect.stroke = 'black';
    rect.linewidth = 1;

    // Add text label
    const text = two.makeText(node.name, x + width / 2, y + rectHeight / 2);
    text.fill = 'black';
    text.size = 15;

    // Recursive call for children
    let currentY = y;
    node.children?.forEach(child => {
        const childHeight = child.weight * yStep;
        iciclePlot(two, child, x + width, currentY, width, childHeight);
        currentY += childHeight;
    });
}

/**
 * Draws a stacked tree with a cartesian layout.
 *
 * @param {Two.js} two - Two.js instance
 * @param {{ name: String, weight: Number|undefined, children Array|undefined }} data - root node of the tree
 * @param {Number} width - width of the drawing area
 * @param {Number} height - suggested height of the drawing area
 */
function draw(two, data, width, height) {
    // sum up weights
    sum_weights(data);

    //  prints the data object to the console (interactive)
    console.log(data);

    // get depth of the tree
    const levelDepth = getTreeDepth(data);

    // Use the new function to determine the optimal height
    const actualHeight = getOptimalChartHeight(data, height);

    // Set the height of the Two.js instance to the calculated actualHeight
    two.height = actualHeight;

    // actual drawing function, called recursively for child nodes
    iciclePlot(two, data, 0, 0, width / levelDepth, actualHeight);
}

function start(two) {
    // perform drawing instructions
    draw(two, getData(), 900, 600);

    // with second dataset
    // draw(two, getData2(), 900, 600);
}
