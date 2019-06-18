#Image Tracer Demo

Image tracing in the browser using [imagetracer.js](https://github.com/jankovicsandras/imagetracerjs)

## Observations

- When tracing a simple black and white image with alpha channel  antialiasing will result in weird artifacts (!)
- Solution: binarize the image, with alpha set to fully opaque

## TODO

- Try using **potrace.js** and compare the results ...
	- [original JS port](https://github.com/kilobtye/potrace)
	- [nodejs](https://github.com/tooolbox/node-potrace)
	- [ES6 module](https://github.com/casperlamboo/potrace)

## Links

- [Image Tracing](https://en.wikipedia.org/wiki/Image_tracing) (Wikipedia)
