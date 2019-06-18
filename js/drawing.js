class Drawing {
    
    constructor(id) {
        
        let canvas = document.getElementById(id);
        this.bounds = canvas.getBoundingClientRect();
        
        let ctx = canvas.getContext("2d");
        let dpr = window.devicePixelRatio || 1;
        ctx.canvas.width = this.width * dpr;
        ctx.canvas.height = this.height * dpr;
        ctx.scale(dpr, dpr);
        
        this.ctx = ctx;
    
    }
    
    get width() {
        return this.bounds.width
    }
    
    get height() {
        return this.bounds.height;
    }
    
    disk(x, y, radius) {
        let ctx = this.ctx;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    rect(x1, y1, w, h) {
        this.ctx.fillRect(x1, y1, w, h);
    }
    
    push() {
        this.ctx.save();
    }
    
    pop() {
        this.ctx.restore();
    }
    
    rotate(angle) {
        this.ctx.rotate(angle);
    }
    
    translate(x, y) {
        this.ctx.translate(x, y);
    }
    
    getPixels() {
        const w = this.ctx.canvas.width;
        const h = this.ctx.canvas.height;
        return this.ctx.getImageData(0, 0, w, h);
    }
    
    fill(color) {
        this.ctx.fillStyle = color;
    }
    
    binarize(threshold) {
        const pixels = this.getPixels();
        var d = pixels.data;
        for (var i=0; i<d.length; i+=4) {
            var r = d[i];
            var g = d[i+1];
            var b = d[i+2];
            // CIE luminance for RGB
            var v = 0.2126*r + 0.7152*g + 0.0722*b;
            // binarize
            var v = v < threshold ? 0 : 255;
            d[i] =  d[i+1] = d[i+2] = v ;
            // set the alpha channel to fully opaque
            d[i+3] = 255;
            
        }
        this.ctx.putImageData(pixels, 0, 0);
    }
    
}

export default new Drawing('canvas');
