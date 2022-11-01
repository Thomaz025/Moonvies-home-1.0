function openBurguer()
{
    var menu = document.querySelector('#nav-bar');

    if(menu.style.display === 'none'){
        document.querySelector('#nav-bar').style.display = 'flex';
    }
    else{
        document.querySelector('#nav-bar').style.display = 'none';
    }
}




function openSearch()
{

    var search = document.querySelector('#search');

    if(search.style.display === 'none' ){
        document.querySelector('#search').style.display = 'flex';

    }else{
        document.querySelector('#search').style.display = 'none';

    }
}

function openLogin()
{

    var login = document.querySelector('#search');

    if(login.style.display === 'none' ){
        document.querySelector('#search').style.display = 'flex';

    }
}

function closeLogin()
{

    var login = document.querySelector('#search');

    if(login.style.display === 'flex' ){
        document.querySelector('#search').style.display = 'none';

    }
}


const controls = document.querySelectorAll('.control');

let currentItem = 0;

const items = document.querySelectorAll('.item');

const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
    const isLeft = control.classList.contains('.arrow-left');
       
        if (isLeft) {
        currentItem += 1;
       } else {
        currentItem -= -1;
       }

       if (currentItem >= maxItems) {
        currentItem = 0;
       }

       if (currentItem < 0) {
        currentItem = maxItems - 1;
       }

       items.forEach(item => item.classList.remove('current-item'));

       items[currentItem].scrollIntoView({
        inline:"center",
        behavior: "smooth",
       });

       items[currentItem].classList.add("current-item");


    })
    
});
