let enlarge = document.querySelector('.enlarge');
let decrease = document.querySelector('.decrease');
let lorem = document.querySelector('.lorem');

let currentFontSize = parseInt(lorem.style.fontSize);

enlarge.addEventListener('click', function () {
    currentFontSize++;
    lorem.style.fontSize = currentFontSize + "px";
});

decrease.addEventListener('click', function () {
    currentFontSize--;
    lorem.style.fontSize = currentFontSize + "px";
});                                                 // 17-ci setre kimi fikir verme

let addCity = document.querySelector('.submit')
let form = document.querySelector('.form');
let row = document.querySelector('.row');
let ul = document.querySelector('.ul');             // her ehtimala qarsi 4 eded queryselector

addCity.addEventListener('click', function () {

    let li = document.createElement('li');
    let text = document.getElementById('fname');
    let title = text.value;
    li.innerText = title;
    li.classList.add('d-flex','w-75','city','list-group-item')
    text.value = ('');


    let deleteBtn = document.createElement('button');    // her li ucun delete buttonu yaratdim
    deleteBtn.classList.add('delete-icon');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', function(){
        this.parentNode.remove();
    });

    if(!title){
        alert('Seher adi daxil edin');
        return;

    }
    else{
        ul.append(li);
        li.append(deleteBtn);
    }

});

