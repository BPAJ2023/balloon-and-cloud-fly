class MouseMove {
    constructor(){
        this.images = document.querySelectorAll("img");

        this.addLissenerMouseMove();
    }
    moveImage(x,y){
        this.images.forEach(img=>{
            const ratioX = parseFloat(img.getAttribute("ratioX"));
            const ratioY = parseFloat(img.getAttribute("ratioY"));

            const endX = x * ratioX;
            const endY = y * ratioY;

            img.style.transform = `translate(${endX}px,${endY}px)`;
        });
    };
    addLissenerMouseMove(){
        document.addEventListener('mousemove', (e)=>{
            const moveX = e.clientX;
            const moveY = e.clientY;
            const pageX = window.innerWidth/ 2;
            const pageY = window.innerHeight/ 2;
            const x = moveX - pageX;
            const y = moveY - pageY;

            this.moveImage(x,y)});
    };
}