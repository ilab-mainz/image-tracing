import Drawing from './drawing.js';

export function randomImage() {
    
    const width = Drawing.width;
    const height = Drawing.height;

    const r = 30; // diameter
    const d = 40; // border
    const n = 10; // shape count

    const xmin = d;
    const xmax = width - d;
    const ymin = d;
    const ymax = height - d;
    
    // white background
    Drawing.fill('white');
    Drawing.rect(0, 0, width, height);
    
    // draw a couple of black rectangles and circles
    Drawing.fill('black');
    drawShapes(getTransforms(n), (r) => Drawing.rect(-r, -r, 2*r, 2*r));
    drawShapes(getTransforms(n), (r) => Drawing.disk(0, 0, r));
    
    // binarize the result     
    Drawing.binarize(127);
 
    // create a list of random transforms
    function getTransforms(n) {
        return Array.from(new Array(n), () => ({
            x: random(xmin, xmax),
            y: random(ymin, ymax),
            angle: random(0, Math.PI)
        }));  
    }
    
    // apply transforms and apply drawing function fn(r);
    function drawShapes(transforms, fn) {
        transforms.forEach(
            (p) => {
                let {x, y, angle} = p;
                Drawing.push();
                Drawing.translate(x, y);
                Drawing.rotate(angle);
                fn(r);
                Drawing.pop();
            }
        )
    }

}

function random(min, max) {  
    return Math.floor(Math.random() * (max - min + 1)) + min;
};