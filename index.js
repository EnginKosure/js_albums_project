const btn=document.getElementById('btn').addEventListener('click',getPhotos);
const btn1=document.getElementById('btn1').addEventListener('click',getAlbums);
let lastActiveBtn;
let count=0;
const div=document.getElementById('cardDiv');

function getPhotos(e){
    checkPrevious(e.target.id)
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
    checkPrevious(e.target.id)
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res=>res.json())
    .then(post=>{
        for(let i=0;i<9;i++){
            div.innerHTML+=`
                <div class='card col-lg-3 col-md-4 col-sm-6 mx-1 d-flex shadow card-img-top m-2'>
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

function checkPrevious(id){
    if(div.innerHTML!=='' && lastActiveBtn!==id){
        div.style.minHeight='1200px';
        div.innerHTML='';
        count=0;
    }
    id=='btn' ? lastActiveBtn = id : lastActiveBtn = 'btn1'
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