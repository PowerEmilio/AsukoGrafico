let Box = document.querySelector('.asukoIconContainer');

Box.addEventListener('mousemove', (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let imgWidth = Box.clientWidth;
    let imgHeight = Box.clientHeight;
    let moveX = (x - imgWidth/2);
    let moveY = (y - imgHeight/2);
    
    Box.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
})
Box.addEventListener('mouseout', () =>{
    Box.style.transform = ``;

})


function irArriba(){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var botonArriba = document.querySelector('#upArrow');

        if (scroll > 300) {
            botonArriba.classList.remove('displayNone');
            botonArriba.classList.add('upArrow');
        } else{
            botonArriba.classList.remove('upArrow');
            botonArriba.classList.add('displayNone');
        }
    })
}

irArriba();