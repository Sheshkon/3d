import { Color } from "./color";

export class Drawer {
    
        private canvas: HTMLCanvasElement;
        public width: number
        public height: number
        public canvasWidth: number
        public canvasHeight: number
        public pixelSize: number
        private context: CanvasRenderingContext2D
        private imageData: ImageData
        public currentColor: Color
        public buf: ArrayBuffer
        public buf8: Uint8ClampedArray
        public data: Uint32Array
        public int24Color: number
    
        constructor(canvas: HTMLCanvasElement, width: number, height: number, pixelSize: number) {
            this.canvas = canvas
            this.width = width * pixelSize
            this.height = height * pixelSize
            this.canvasWidth = width
            this.canvasHeight = height
            this.pixelSize = pixelSize
            this.context = this.canvas.getContext("2d")
            this.imageData = this.context.createImageData(this.width, this.height)
            this.currentColor = new Color(0, 0, 0)
            this.context.canvas.width = this.width
            this.context.canvas.height = this.height
            this.buf = new ArrayBuffer(this.width * this.height * 4)
            this.buf8 = new Uint8ClampedArray(this.buf)
            this.data = new Uint32Array(this.buf)
        }
      
        public setColor(color: Color): void{
           this.currentColor = color
           this.int24Color = (255 << 24) | (color.b << 16) | (color.g << 8) | color.r
        }

        public addPoint(x: number, y: number): void {
            let canvasX = x;
            let canvasY = this.canvasHeight - y - 1;
            if (this.pixelSize == 1) {
                let pixelIndex = canvasY * this.width + canvasX;
                this.data[pixelIndex] = this.int24Color;
                return;
            }
            
            const canvasStartX = canvasX * this.pixelSize;
            const canvasStartY = canvasY * this.pixelSize;
            for (var dx = 0; dx < this.pixelSize; dx++) {
                for (var dy = 0; dy < this.pixelSize; dy++) {
                    let pixelIndex = (canvasStartY + dy) * this.width + canvasStartX + dx; 
                    this.data[pixelIndex] = this.int24Color;
                }
            }
            
        }

        public clear(): void {
            for (let x = 0; x < this.width; x++) {
                for (let y = 0; y < this.height; y++) {
                    this.data[y * this.width + x] = this.int24Color
                }
            }
        }

        public show(): void {
            this.imageData.data.set(this.buf8)
            this.context.putImageData(this.imageData, 0, 0)
        }
    }
