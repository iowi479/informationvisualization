"use strict";

function getTutorialInfo() {
    return {
        exerciseNum: 1,
        groupNames: "Simon Schindler",
    };
}

// Array that stores the rectangle instances used to draw the bar chart
let BARS = [];


/**
 * Draws the numbers in the data array as a bar chart.
 * Fills the *BARS* array with Two.js rectangle instances.
 *
 * @param {Two} two - Two.js instance
 * @param {Array} data - Array of numbers
 */
function drawStatic(two, data) {
    let posX = 155;
    const posY = 400;
    const barGap = 5;

    // width of 400px for each bar. Then minus the gap between the bars to get the actual width of each bar
    let width = (400 / data.length) - barGap;

    for (let i = 0; i < data.length; i++) {
        const num = data[i];
        const height = yScale(num);

        // Calculate the x and y position(center) of the rectangle
        const x = posX + i * (width + barGap) + (width / 2);
        const y = posY - (height / 2);

        const rect = two.makeRectangle(x, y, width, height);
        rect.fill = "blue";

        BARS.push(rect);
    }
}

/**
 * Draws the objects in the data array as a bar chart and fills the *BARS*
 * array with arrays of Two.js rectangle instances.
 * Each item in the data array is an array itself, which contains objects
 * with the following structure:
 * {
 *   category: <number>,
 *   value: <number>
 * }
 *
 * @param {Two} two - Two.js instance
 * @param {Array} data - Array of arrays of objects
 */
function drawStaticStacked(two, data) {

    let posX = 155;
    const posY = 400;
    const barGap = 5;

    // width of 400px for each bar. Then minus the gap between the bars to get the actual width of each bar
    let width = (400 / data.length) - barGap;

    for (let i = 0; i < data.length; i++) {
        let yOffset = 0;
        const bars = [];
        const barData = data[i];

        const x = posX + i * (width + barGap) + (width / 2);

        for (let j = 0; j < barData.length; j++) {
            const num = barData[j].value;
            const height = yScale(num);
            const color = getColor(barData[j].category);


            // Calculate the y position(center) of the rectangle including the offset for stacking
            const y = posY - yOffset - (height / 2);
            yOffset += height;

            const rect = two.makeRectangle(x, y, width, height);
            rect.fill = color;
            rect.linewidth = 0;

            bars.push(rect);
        }

        BARS.push(bars);
    }
}

//-----------------------------------------------------------------------------
// Bonus Task Functions
//-----------------------------------------------------------------------------

/**
 * Draws the numbers in data as a bar chart by updating the
 * respective bars in the *BARS* array.
 * This function is called each iteration of the sorting algorithm
 * until the data is sorted.
 *
 * @param {Array} data - Array of numbers
 * @param {Array} changes - Array of indices where the algorithm changed sth
 * @param {Array} highlights - Array of indices where the algorithm looked
 */
function drawSorting(data, changes, highlights) {

    let posX = 155;
    const posY = 400;
    const barGap = 5;

    for (let i = 0; i < BARS.length; i++) {
        let num = data[i];
        let height = yScale(num);

        // calculate the new y position(center) of the rectangle
        let y = posY - (height / 2);

        let bar = BARS[i];

        let pos = bar.position;
        // x position stays the same
        pos.y = y;
        bar.pos = pos;
        bar.height = height;

        bar.opacity = 1.0; // Reset opacity
        bar.fill = "blue"; // Reset color

        if (changes.includes(i)) {
            bar.fill = "red"; // Color for changed bars
        }

        if (highlights.length > 0 || changes.length > 0) {
            if (highlights.includes(i)) {
                bar.opacity = 0.25; // Opacity for highlighted bars
            }
        }
    }
}

/**
 * Draws the objects in data as a bar chart by updating the
 * respective bars in the *BARS* array.
 * Each item in the data array is an array itself, which contains objects
 * with the following structure:
 * {
 *   category: <number>,
 *   value: <number>
 * }
 *
 * This function is called each iteration of the sorting algorithm
 * until the data is sorted.
 *
 * @param {Array} data - Array of arrays of objects
 * @param {Array} changes - Array of indices where the algorithm changed sth
 * @param {Array} highlights - Array of indices where the algorithm looked
 */
function drawSortingStacked(data, changes, highlights) {

    let posX = 155;
    const posY = 400;
    const barGap = 5;

    for (let i = 0; i < BARS.length; i++) {
        const barData = data[i];
        let bars = BARS[i];
        let yOffset = 0;

        for (let j = 0; j < bars.length; j++) {
            let num = barData[j].value;
            let height = yScale(num);
            // color can stay the same

            // calculate the new y position(center) of the rectangle
            let y = posY - yOffset - (height / 2);
            yOffset += height;

            let bar = bars[j];

            let pos = bar.position;
            // x position stays the same
            pos.y = y;
            bar.pos = pos;
            bar.height = height;
            bar.opacity = 1.0; // Reset opacity
            bar.stroke = "black";
            bar.linewidth = 0; // Reset strokewidth

            if (changes.includes(i)) {
                bar.linewidth = 2; // Strokewidth for changed bars
            }

            if (highlights.length > 0 || changes.length > 0) {
                if (highlights.includes(i)) {
                    bar.opacity = 0.25; // Opacity for highlighted bars
                }
            }
        }
    }
}
