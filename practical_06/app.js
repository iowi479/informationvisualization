"use strict";

function getTutorialInfo() {
    return {
        exerciseNum: 6,
        groupNames: "Simon Schindler",
        isAnimated: true
    }
}

function draw(two) {
    // get data set
    const dataTable = getData().data;
    const dataLabels = getData().labels;
    const n = dataTable.length;
    // calculate pairwise dissimilarities between data items
    const dissimilarities = calcDissimilarityMatrix(dataTable);
    // get 2D points and show them
    let points = getInitialPoints(n);
    assignPointAppearance(n, dissimilarities, points, dataLabels);
    drawPoints(two, points, 0);
    drawStressText(two, stressAll(n, dissimilarities, points));

    // This is where the outermost for-loop of the algorithm is implicitly implemented.
    two.bind('update',
        frameCount => {
            if (frameCount > totalIterations) {
                two.pause();
                return;
            }
            const iteration = frameCount;

            // reset the points
            if (iteration === 0) {
                points = getInitialPoints(n);
            }
            // calculate gradients and update points
            mdsStep(n, dissimilarities, points);
            // assign colors to points
            assignPointAppearance(n, dissimilarities, points, dataLabels);

            // Removes the current drawing from the instance's scene
            two.clear();

            // draws the points
            drawPoints(two, points, iteration)
            drawStressText(two, stressAll(n, dissimilarities, points));
        });
}

/**
 * Calculates the dissimilarities between data items in dataTable.
 * The resulting matrix contains the distance between dataTable[i] and dataTable[j]
 * at entry matrix[i][j].
 * @param dataTable array of arrays where dataTable[i] is a data point of several dimensions
 * @return dissimilarity matrix
 */
function calcDissimilarityMatrix(dataTable) {
    const n = dataTable.length;
    const matrix = new Array(n);

    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n).fill(0);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = euclideanDistance(dataTable[i], dataTable[j]);
        }
    }

    return matrix;
}

/**
 * Calculates the euclidean distance between two high-dimensional vectors
 * @param a array of numbers
 * @param b other array of numbers
 * @returns distance ||a-b||
 */
function euclideanDistance(a, b) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += (a[i] - b[i]) ** 2
    }
    return Math.sqrt(sum);
}

/**
 * Computes the pairwise stress for points i and j.
 * @param i index of point
 * @param j index of other point
 * @param dissimilarities dissimilarity matrix D[i][j]
 * @param points array of points (Two.Vector[])
 * @returns pairwise stress (squared difference between dissimilarity and point distance)
 */
function stress(i, j, dissimilarities, points) {
    const dij = dissimilarities[i][j];
    const pi = points[i].position;
    const pj = points[j].position;
    const distance = pi.distanceTo(pj);

    const sij = (dij - distance) ** 2;

    return sij;
}

/**
 * Computes the overall stress
 * @param n number of points
 * @param dissimilarities dissimilarity matrix D[i][j]
 * @param points array of points (Two.Vector[])
 * @returns sum of all pairwise stresses
 */
function stressAll(n, dissimilarities, points) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            sum += stress(i, j, dissimilarities, points);
        }
    }

    return sum;
}

/**
 * Computes the gradient of point i.
 * @param i index of the gradient to be calculated
 * @param n number of points
 * @param dissimilarities dissimilarity matrix D[i][j]
 * @param points array of points (Two.Vector[])
 * @returns the gradient
 */
function gradient(i, n, dissimilarities, points) {
    const eps = 1e-8;
    let delta = new Two.Vector(0, 0);

    for (let j = 0; j < n; j++) {
        if (i === j) continue;

        const dij = dissimilarities[i][j];
        const pi = points[i].position;
        const pj = points[j].position;

        const dist = pi.distanceTo(pj) + eps;
        const mult = 1 - (dij / dist);

        let val = Two.Vector.sub(pi, pj);
        val.multiplyScalar(mult);
        delta.add(val);
    }

    delta.multiplyScalar(2);
    return delta;
}


/**
 * Computes the gradient (according to the MDS stress) for each point
 * and updates the position of each point (in gradient descent fashion).
 * @param n number of points
 * @param dissimilarities dissimilarity matrix D[i][j]
 * @param points array of points
 */
function mdsStep(n, dissimilarities, points) {
    const alpha = 0.001;

    const gradients = new Array(n);
    for (let i = 0; i < n; i++) {
        gradients[i] = gradient(i, n, dissimilarities, points);
    }

    for (let i = 0; i < n; i++) {
        const p = points[i];
        p.position.sub(gradients[i].multiplyScalar(alpha));
    }
}

/**
 * Assigns a color (and line width) to each point
 * @param n number of points
 * @param dissimilarities dissimilarity matrix D[i][j]
 * @param points array of points
 * @param labels the (class) labels corresponding to the points
 */
function assignPointAppearance(n, dissimilarities, points, labels) {
    // TODO: insert code here
    for (let i = 0; i < n; i++) {
        switch (labels[i]) {
            case 'setosa':
                points[i].color = '#e41a1c';
                break;
            case 'virginica':
                points[i].color = '#377eb8';
                break;
            default:
                points[i].color = '#984ea3';
        }
    }
}





