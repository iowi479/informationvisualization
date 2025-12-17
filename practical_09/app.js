"use strict";

function getTutorialInfo() {
    return {
        exerciseNum: 9,
        groupNames: "Simon Schindler",
        isAnimated: false
    };
}

function draw(two) {
    //TODO (b): Play around with different values of k
    const k = 5;
    //-------------
    const colors = getTenDistinctColors();
    const data = getData().dataEx9;
    const clusters = getClustering(k, data);
    drawUnitSquareScatterPlotAxes(two);
    for (let i = 0; i < clusters.length; i++) {
        drawToUnitSquareScatterPlot(two, clusters[i], colors[i]);
    }
}

function getClustering(k, data) {
    if (k <= 1)
        return [data];

    let centroids = [];
    for (let i = 0; i < k; i++) {
        const centroidIndex = getRandomNumber(0, data.length - 1);
        centroids.push(data[centroidIndex]);
    }


    //TODO (a): Perform k-Means clustering

    let clusters = Array.from({ length: k }, () => []);
    let changed = true;

    while (changed) {

        // assign points to nearest centroid
        let newClusters = Array.from({ length: k }, () => []);
        for (let p of data) {
            let best = 0;
            let bestDist = squaredEuclideanDistance(p, centroids[0]);
            for (let i = 1; i < centroids.length; i++) {
                let d = squaredEuclideanDistance(p, centroids[i]);
                if (d < bestDist) {
                    bestDist = d;
                    best = i;
                }
            }
            newClusters[best].push(p);
        }

        // recompute centroids
        let newCentroids = centroids.map((c, i) => {
            if (newClusters[i].length === 0) {
                // empty cluster: reinitialize to a random point to avoid collapse
                const r = getRandomNumber(0, data.length);
                return data[r];
            } else {
                return meanOfPoints(newClusters[i]);
            }
        });

        // check if clusters changed (by membership)
        changed = false;
        for (let i = 0; i < k; i++) {
            const oldx = centroids[i][0];
            const oldy = centroids[i][1];
            const newx = newCentroids[i][0];
            const newy = newCentroids[i][1];
            if (oldx !== newx || oldy !== newy) {
                changed = true;
                break;
            }
        }

        clusters = newClusters;
        centroids = newCentroids;
    }

    return clusters;
}

function meanOfPoints(points) {
    if (!points || points.length === 0) return null;
    let sumX = 0, sumY = 0;
    for (let p of points) {
        sumX += p[0];
        sumY += p[1];
    }

    const x = sumX / points.length;
    const y = sumY / points.length;
    return [x, y];
}


function squaredEuclideanDistance(a, b) {
    const dx = a[0] - b[0];
    const dy = a[1] - b[1];
    const d2 = dx * dx + dy * dy;
    return d2;
}
