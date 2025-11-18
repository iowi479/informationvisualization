"use strict";

function getTutorialInfo() {
    return {
        exerciseNum: 5,
        name: "Simon Schindler",
        isAnimated: true,
    };
}

function draw(two) {
    // get graph data
    let graph = getData().dataEx5;
    // This is where the outermost for-loop of the algorithm is implicitly implemented.
    two.bind("update", (frameCount) => {
        const iteration = frameCount % totalIterations;
        // reset the graph
        if (iteration === 0) {
            graph = getData().dataEx5;
        }

        fdl(graph, iteration);

        // Removes the current graph from the instance's scene
        two.clear();

        // draws the graph
        makeGraph(two, graph);
    });
}

// - drawingArea.width – represents the width of the space made available to the algorithm
// – drawingArea.height – represents the height of the space made available to the algorithm
// – cool(iteration) – the cooling function used to reduce the force applied to the nodes
// – fr(d) – the repulsive force function used in the Fruchterman-Reingold algorithm
// – fa(d) – the attractive force function used in the Fruchterman-Reingold algorithm

function fdl(graph, iteration) {
    for (const node of graph.nodes) {
        node.displacement = { x: 0, y: 0 };

        for (const otherNode of graph.nodes) {

            if (node !== otherNode) {
                const deltaX = node.position.x - otherNode.position.x;
                const deltaY = node.position.y - otherNode.position.y;
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY) || 0.01; // prevent division by zero
                const repulsiveForce = fr(distance);

                const x = node.displacement.x + (deltaX / distance) * repulsiveForce;
                const y = node.displacement.y + (deltaY / distance) * repulsiveForce;
                node.displacement = { x, y };
            }
        }
    }

    for (const node of graph.nodes) {
        for (const neighbor of node.adjacentNodes) {
            const deltaX = node.position.x - neighbor.position.x;
            const deltaY = node.position.y - neighbor.position.y;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY) || 0.01; // prevent division by zero
            const attractiveForce = fa(distance);

            let x = node.displacement.x - ((deltaX / distance) * attractiveForce);
            let y = node.displacement.y - ((deltaY / distance) * attractiveForce);
            node.displacement = { x, y };

            x = neighbor.displacement.x + ((deltaX / distance) * attractiveForce);
            y = neighbor.displacement.y + ((deltaY / distance) * attractiveForce);
            neighbor.displacement = { x, y };
        }
    }

    for (const node of graph.nodes) {
        const displacementX = node.displacement.x;
        const displacementY = node.displacement.y;
        const displacementLength = Math.sqrt(displacementX * displacementX + displacementY * displacementY) || 0.01; // prevent division by zero
        const cooledDisplacement = cool(iteration);

        let x = node.position.x + (displacementX / displacementLength) * Math.min(displacementLength, cooledDisplacement);
        let y = node.position.y + (displacementY / displacementLength) * Math.min(displacementLength, cooledDisplacement);

        // Keep nodes within the drawing area
        x = Math.min(drawingArea.width, Math.max(0, x));
        y = Math.min(drawingArea.height, Math.max(0, y));

        node.position = { x, y };
    }
}
