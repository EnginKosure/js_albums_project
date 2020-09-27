const btn=document.getElementById('btn').addEventListener('click',getPhotos);
const btn1=document.getElementById('btn1').addEventListener('click',getAlbums);
const prev=document.getElementById('prev').addEventListener('click',getPhotos);
const middle=document.getElementById('middle').addEventListener('click',getPhotos);
const next=document.getElementById('next').addEventListener('click',getPhotos);
const prev1=document.getElementById('prev1').addEventListener('click',getAlbums);
const middle1=document.getElementById('middle1').addEventListener('click',getAlbums);
const next1=document.getElementById('next1').addEventListener('click',getAlbums);


let lastActiveBtn;
let count=0;
let clickCountDiv=0;
let clickCountDiv1=0;
const div=document.getElementById('cardDiv');
const div1=document.getElementById('cardDiv1');


function getPhotos(e){
    resetCounters(e.target.id)

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(post=>{
        for(let i=0;i<9;i++){
            div.innerHTML+=`
                <div class='card col-lg-3 col-md-4 col-sm-6 mx-1 d-flex shadow card-img-top m-2'>
                    <img class='rounded-circle w-150 p-2' src='${post[count].thumbnailUrl}'>
                    <div class="card-body text-center">
                        <h5 class="card-title title text-muted">${post[count].id}</h5>
                        <p class="card-text subtext">${post[count].title}</p>
                    </div>
                </div>
            `
            count+=1
        }
    })
    .catch(error=>console.log(error))
}

function getAlbums(e){
    resetCounters(e.target.id)

    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res=>res.json())
    .then(post=>{
        for(let i=0;i<9;i++){
            div1.innerHTML+=`
                <div class='card col-lg-3 col-md-4 col-sm-6 mx-1 d-flex shadow card-img-top m-2'>
                    <div class="card-body text-center">
                        <a href="#btn" class="returnValue">
                            <h5 class="card-title title text-muted">${post[count].id}</h5>
                        </a>
                        <p class="card-text subtext">${post[count].title}</p>
                    </div>
                </div>
            `
            count+=1
        }
    })
    .catch(error=>console.log(error))
    .finally(()=>document.querySelectorAll('.returnValue').forEach(el=>el.addEventListener('click',getNthAlbPhotos)))
}

function getNthAlbPhotos(e){
    resetCounters(e.target)

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${e.target.innerText}`)
    .then(res=>res.json())
    .then(post=>{
        for(let i=0;i<50;i++){
            div.innerHTML+=`
                <div class='card col-lg-3 col-md-4 col-sm-6 mx-1 d-flex shadow card-img-top m-2'>
                    <img class='rounded-circle w-150 p-2' src='${post[count].thumbnailUrl}'>
                    <div class="card-body text-center">
                        <h5 class="card-title title text-muted">${post[count].id}</h5>
                        <p class="card-text subtext">${post[count].title}</p>
                    </div>
                </div>
            `
            count+=1
        }
    })
    .catch(error=>console.log(error))
}


// function checkPrevious(id){
//     if(div.innerHTML!=='' && lastActiveBtn!==id){
//         div.style.minHeight='1200px';
//         div.innerHTML='';
//         count=0;
//     }
//     id=='btn' ? lastActiveBtn = id : lastActiveBtn = 'btn1'
// }

function resetCounters(id){
    div1.innerHTML='';
    div.innerHTML='';

    if( id=='btn'){
        clickCountDiv+=1;
        if(clickCountDiv<=1){
            div.style.minHeight='1200px';
            div1.style.minHeight='0';
            clickCountDiv1=0;
            count=0;
        }
    }else if (id=='btn1'){
        clickCountDiv1+=1;
        if(clickCountDiv1<=1){
            div1.style.minHeight='1200px';
            div.style.minHeight='0';
            clickCountDiv=0;
            count=0;
        }
    }else{
        div.style.minHeight='1200px';
        div1.style.minHeight='0';
        clickCountDiv1=0;
        clickCountDiv=0;
        count=0;
    }
}

// let navbar = $(".navbar");
// $(window).scroll(function () {
//   if ($(window).scrollTop() > 10) {
//     navbar.addClass("sticky");
//   } else {
//     navbar.removeClass("sticky");
//   }
// });

// When the user scrolls the page, execute makeSticky
window.onscroll = function() {makeSticky()};

// Get the navbar
const navbar = document.querySelector(".navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop+10;
function makeSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}