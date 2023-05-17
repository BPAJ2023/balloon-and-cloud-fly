class MouseMove {
    constructor(event){
        this.images = document.querySelectorAll("img");
        this.addLissenerMouseMove(event)
    }
    moveImage(e,x,y){
        this.images.forEach(img=>{
            img.style.transform = `translate(${x},${y})`
        });
    };
    addLissenerMouseMove(event){
        const moveX = e.clientX;
        const moveY = e.clientY;
        this.images.forEach(image=>{
            image.addEventListener('mousemove', (e)=>{this.moveImage(e,moveX,moveY)});
        });
    }
}
const move = new MouseMove(event);