function hide_side_menu(){
    const side_menu=document.querySelector('.side_menu')
    side_menu.style.display = 'none'
    const zIndex=document.querySelector('.side_menu')
    zIndex.style.zIndex='1'
}

function show_side_menu(){
    const side_menu=document.querySelector('.side_menu')
    side_menu.style.display = 'flex'
     const zIndex=document.querySelector('.side_menu')
    zIndex.style.zIndex='5'
}
