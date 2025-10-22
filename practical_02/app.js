"use strict";

function getTutorialInfo() {
    return {
        exerciseNum: 2,
        groupNames: "Simon Schindler",
    };
}

const circleDiameter = 30;
const circleGap = 5;
const labelGap = 2;
const labelWidth = 40;
const labelHeight = 20;

function draw(two) {
    // get data
    const pokemons_per_type = getData();
    // WARN: uncommented
    // logging the data to console (you can remove this code or comment it out)
    //
    const pokemon_types = Object.keys(pokemons_per_type);
    // const colors = getColorMap()
    //
    // console.log('NUMBER OF TYPES: ' + pokemon_types.length);
    //
    // for (const type of pokemon_types) {
    //   console.log('TYPE 1: ' + type + ' [color: ' + colors[type] + ']');
    //   const mons = pokemons_per_type[type];
    //   mons.forEach(mon => console.log('   ' + mon.type2 + ' : ' + mon.name + ' (' + mon.id + ')'))
    // }

    // draw a background grid (not neccesarily needed)
    makeBGDots(two);

    // TODO: put code for part e) here, you can also call and test your functions here

    const originX = 5;
    const originY = 5;

    const rectWidth = (6 * circleDiameter) + (7 * circleGap);
    const rectHeight = rectWidth + labelHeight + (2 * labelGap);

    const offsetX = rectWidth + circleGap;
    const offsetY = rectHeight + circleGap;

    let row = 0;
    let col = 0;
    const maxRows = 4;
    const maxCols = 5;


    for (const type of pokemon_types) {
        let rect = makeRectForType(two, type);

        const mons = pokemons_per_type[type];

        const grp = makeCirclesForMons(two, mons);

        grp.add(rect);

        let x = originX + col * offsetX;
        let y = originY + row * offsetY;

        grp.translation.set(x, y);
        col++;
        if (col >= maxCols) {
            col = 0;
            row++;
        }
    }
}

/**
 * Creates a group that contains a Rectangle and a label in the lower right corner that tells the type.
 * @param {Two} two
 *    the two.js object to create shapes with
 * @param {String} type
 *    the pokemon type
 * @returns a group containing the shapes created by this method
 */
function makeRectForType(two, type) {
    const width = (6 * circleDiameter) + (7 * circleGap);
    const height = width + labelHeight + (2 * labelGap);
    const labelCenterX = width - (labelWidth / 2) - labelGap;
    const labelCenterY = height - (labelHeight / 2) - labelGap;

    const rect = two.makeRectangle(width / 2, height / 2, width, height);
    // make rect not filled, just an outline
    rect.fill = 'none';


    const abbrv = getTypeAbbrv()[type];
    const label = two.makeText(abbrv, labelCenterX, labelCenterY);
    label.size = 14;

    const typeRect = two.makeRectangle(labelCenterX, labelCenterY, labelWidth, labelHeight);
    typeRect.fill = getColorMap()[type];
    typeRect.noStroke();

    const grp = two.makeGroup();

    grp.add(rect);
    grp.add(typeRect);
    grp.add(label);

    return grp;
}

/**
 * Creates a group that contains a circle for each pokemon in the array.
 * The circles are arranged in a 6x6 grid and colored according to the
 * type2 of the corresponding pokemon.
 * @param {Two} two
 *    the two.js object to create shapes with
 * @param {Array.<{name: String, id: int, type2: String}>} mons
 *    the array of pokemons to create circles for
 * @returns a group containing the shapes created by this method
 */
function makeCirclesForMons(two, mons) {
    // TODO: put code for part c) here

    const originX = circleGap + (circleDiameter / 2);
    const originY = circleGap + (circleDiameter / 2);

    let offset = circleDiameter + circleGap;

    let row = 0;
    let col = 0;
    const maxRows = 6;
    const maxCols = 6;

    let circles = [];

    for (let i = 0; i < mons.length; i++) {
        const mon = mons[i];

        const circ = makeCircleForMon(two, mon);

        let x = originX + col * offset;
        let y = originY + row * offset;

        circ.translation.set(x, y)
        circles.push(circ);

        col++;
        if (col >= maxCols) {
            col = 0;
            row++;
        }
    }

    const grp = two.makeGroup(circles);
    return grp;
}

/**
 * Creates a group containing a circle that is colored according to the type2 of the pokemon.
 * @param {Two} two
 *    the two.js object to create shapes with
 * @param {{name: String, id: int, type2: String}} mon
 *    the pokemon for which a circle is generated
 * @returns a group containing the shapes created by this method
 */
function makeCircleForMon(two, mon) {
    // TODO: put code for part b) here
    const colorMap = getColorMap()
    const radius = circleDiameter / 2;
    const resolution = 32;

    const circ = two.makeCircle(0, 0, radius, resolution);
    circ.fill = colorMap[mon.type2];
    return circ;
}

/**
 * Creates a grid consisting of small dots.
 * @param {Two} two
 *    the two.js object to create shapes with
 * @returns a group containing the shapes created by this method
 */
function makeBGDots(two) {
    const group = two.makeGroup();
    for (let row = 0; row < 50; row++) {
        for (let col = 0; col < 50; col++) {
            const rect = two.makeRectangle(col * 22, row * 22, 1, 1);
            rect.stroke = rect.fill = '#778899'
            group.add(rect);
        }
    }
    group.translation.set(13, 13);
    return group;
}


