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
});

let addCity = document.querySelector('.submit')
let form = document.querySelector('.form');
let row = document.querySelector('.row');

addCity.addEventListener('click', function () {
    
    let li = document.createElement('li');
    let text = document.getElementById('fname');
    let title = text.value;
    li.innerText = title;
    li.classList.add('d-flex','w-75','city')
    
    if(title != ''){
        row.appendChild(li);
    }
    else{
        console.log('Seher adi daxil edin');
        return;
    }  
    
    let icon = document.createElement('button');
    icon.innerText = 'Delete';
    icon.classList.add('delete-icon');
    li.appendChild(icon);
    

    let deleteBtn = document.querySelector('.delete-icon');
    deleteBtn.addEventListener('click', function(){
        this.parentNode.remove();
        
    })
    if(title != ''){
        row.append(li);
        li.append(icon);

    }
    else{
        console.log('Seher adi daxil edin');
        return;
    }  
});