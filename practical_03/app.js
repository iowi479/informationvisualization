"use strict";

// array of bars
let BARS = [];
// height per bar
let HEIGHTS = [];

// number of bars
const barCount = 24;
// gap between bars in pixels
const barGap = 10;
// index of the deviant bar
let deviantBar = 0;
// height deviation in pixels
let deviation = 50;

// maximum allowed bar height
let barMaxHeight, barWidth;

// for how long to show the blank distractor
const blankTime = 200;
// for how long to show the bar chart scene
const barTime = 2000;

function getTutorialInfo() {
    return {
        exerciseNum: 3,  // make sure that this is the right number of the current exercise
        groupNames: "Simon Schindler", // provide the names of each team member
        isAnimated: true  // if set to true, shapes will be rendered continously
    };
}

/**
 * Generate a random integer in the specified range.
 * @param {Number} min - the minimum value
 * @param {Number} maxExclusive - the maximum value (not included)
 * @returns an integer
 */
function randomInt(min, maxExclusive) {
    const range = maxExclusive - min;
    return Math.floor(Math.random() * range) + min;
}

/**
 * Generate an array of length "len" filled with random integers
 * in the specified range of values.
 * @param {Number} len - array size
 * @param {Number} min - the minimum value
 * @param {Number} maxExclusive - the maximum value (not included)
 * @returns an array
 */
function randomArray(len, min, maxExclusive) {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(randomInt(min, maxExclusive));
    }
    return arr;
}

/**
 * Called once on startup. Populates the *BARS* array with Two.js rectangle
 * instances and fills the *HEIGHTS* array with a height value for each bar.
 * It also binds a callback to the *update* function of the Two.js instance,
 * which switches between drawing the blank scene, drawing the bars (normally),
 * drawing the bars with one height changed and then drawing the blank scene again.
 *
 *
 * @param {Two} two - Two.js instance
 * @param {Number} width - drawing area width
 * @param {Number} height - drawing area height
 */
function draw(two, width, height) {
    barWidth = (width - (barCount - 1) * barGap) / barCount;
    const colors = getColorScale(barCount);

    for (let i = 0; i < barCount; i++) {
        const randomHeight = randomInt(10, height);
        const bar = two.makeRectangle(
            i * (barWidth + barGap) + barWidth / 2,
            height - randomHeight / 2,
            barWidth,
            randomHeight
        );
        bar.fill = colors[i];
        bar.noStroke();

        BARS.push(bar);
        HEIGHTS.push(randomHeight);
    }

    let timeElapsed = 0; // Elapsed time since switch to showing bars
    let original = true; // Show original or deviant

    deviantBar = randomInt(0, barCount);

    two.bind("update", function(frameCount, timeDelta) {
        timeElapsed += timeDelta;

        // Check if we exceeded a phase duration
        if (timeElapsed >= barTime + blankTime) {
            timeElapsed = timeElapsed % (barTime + blankTime);
            original = !original;
        }



        if (timeElapsed < barTime) {
            // Show bars
            for (let i = 0; i < barCount; i++) {
                let targetHeight = HEIGHTS[i];
                if (!original && i === deviantBar) {
                    targetHeight = deviation;
                }
                BARS[i].height = targetHeight;
                BARS[i].translation.y = height - targetHeight / 2;
                BARS[i].opacity = 1;
            }
        } else if (timeElapsed < barTime + blankTime) {
            // Show blank
            for (let i = 0; i < barCount; i++) {
                BARS[i].opacity = 0;
                if (i === deviantBar) {
                    // pretranslate height of deviant bar for smooth transition
                    let targetHeight;
                    if (original) {
                        targetHeight = deviation;
                    } else {
                        targetHeight = BARS[i].height;
                    }
                    BARS[i].height = targetHeight;
                    BARS[i].translation.y = height - targetHeight / 2;
                }
            }
        }
        else {
            console.error("This should never happen!");
        }
    });
}
