let two, data, dots;

const radius = 15
const params = {
    width: 800,
    height: 800,
    type: Two.Types.canvas
};

function init() {

    const drawingArea = document.createElement("div");
    drawingArea.id = "mainCanvas";
    drawingArea.style.width = params.width+"px";
    drawingArea.style.height = params.height+"px";
    drawingArea.style.margin = "4rem auto";
    drawingArea.style.border = "1px solid lightgrey";
    main.appendChild(drawingArea);

    two = new Two(params);
    two.appendTo(drawingArea);

    dots = []
    data = []

    for (let i = 0; i < 200; ++i) {
        dots.push(two.makeCircle(
            radius + Math.random() * (params.width - 2 * radius),
            radius + Math.random() * (params.height - 2 * radius),
            radius
        ))
        data.push({ x: 0.5-Math.random(), y: 0.5-Math.random(), bump: 0 })
    }

    two.on("update", (_, delta) => perFrame(delta))

    two.play()
}

function perFrame(delta) {
    const threshold = 2000
    const now = Date.now()

    // for each data point (direction in x, direction in y, last bump time)
    data.forEach((d, i) => {
        // get the Two.js circle element
        const c = dots[i]

        // update the circles position
        c.position.addSelf(new Two.Vector(d.x*delta*0.1, d.y*delta*0.1))

        // check if the circle is out of bounds in x
        if (c.position.x <= radius || c.position.x >= params.width - radius) {
            d.x = -d.x
            d.bump = now
        }

        // check if the circle is out of bounds in y
        if (c.position.y <= radius || c.position.y >= params.height - radius) {
            d.y = -d.y
            d.bump = now
        }

        const diff = now - d.bump
        // if we recently bumped into the wall, change the color to red
        // otherwise set the color back to white
        if (diff < threshold) {
            const val = 255 * (now - d.bump) / threshold
            c.fill = `rgb(255,${val},${val})`
        } else if (diff < threshold + 15) {
            c.fill = "#fff"
        }
    })
}


window.addEventListener("load", init)