

const container = document.querySelector('.container')
const list = document.querySelector('.list-items')

function showBubbling(e){
    console.log('current target', e.currentTarget);
    // console.log('target', e.target);
    // if(e.target.classList.contains('link')){
    //     console.log('you clicked on the link');
    // }
}
function stopPropagation(e){
    console.log('you clicked on list');
    e.stopPropagation()
}

list.addEventListener('click', showBubbling,{capture:true})
container.addEventListener('click', showBubbling,{capture:true})
document.addEventListener('click', showBubbling,{capture:true})
window.addEventListener('click', showBubbling,{capture:true})