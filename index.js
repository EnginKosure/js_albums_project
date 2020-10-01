//Get elements, add events for pagination buttons
document.getElementById('prev').addEventListener('click',getPhotos);
const middle=document.getElementById('middle');
middle.addEventListener('click', getPhotos)
document.getElementById('next').addEventListener('click',getPhotos);
const prev1=document.getElementById('prev1').addEventListener('click',getAlbums);
const middle1=document.getElementById('middle1');
middle1.addEventListener('click',getAlbums);
const next1=document.getElementById('next1').addEventListener('click',getAlbums);

//divs for showing the resolved response
const div=document.getElementById('cardDiv');
const div1=document.getElementById('cardDiv1');

//counters
let pgnCount=1;
let pgnCount1=1;

//Get photos data from API
async function getPhotoData(){
    const photoStream=await fetch(`https://jsonplaceholder.typicode.com/photos/?_page=${pgnCount}`);
    const photos=await photoStream.json();
    photos.forEach(photo=>{
            div.innerHTML+=`
            <div class='card col-lg-3 col-md-4 col-sm-6 mx-1 d-flex shadow card-img-top m-2'>
                <img class='rounded-circle w-150 p-2' src='${photo.thumbnailUrl}'>
                <div class="card-body text-center">
                    <h5 class="card-title title text-muted">${photo.id}</h5>
                    <p class="card-text subtext">${photo.title}</p>
                </div>
            </div>
        `
    })
}
function getPhotos(e){
    e.preventDefault();
    resetDiv(e.target.id)
    if (e.target.id=='prev' && pgnCount>1){
        pgnCount-=1  
    }else if (e.target.id=='next'){
        pgnCount+=1
    }else{
        pgnCount=1 
    }
    middle.innerText=`Reset | ${pgnCount*10-9} - ${pgnCount*10}`;
    getPhotoData();
}
//Get albums data
async function getAlbumData(){
    const albumStream=await fetch(`https://jsonplaceholder.typicode.com/albums?_page=${pgnCount1}`);
    const albums=await albumStream.json();
    albums.forEach(album=>{
        div1.innerHTML+=`
            <div class='card col-lg-3 col-md-4 col-sm-6 mx-1 d-flex shadow card-img-top m-2'>
                <div class="card-body text-center">
                    <a href="#btn" class="returnValue">
                        <h5 class="card-title title text-muted">${album.id}</h5>
                    </a>
                    <p class="card-text subtext">${album.title}</p>
                </div>
            </div>
        `
    });
    (function () {
        return document.querySelectorAll('.returnValue').forEach(el => el.addEventListener('click', getNthAlbPhotos));
    })();
}
function getAlbums(e){
    e.preventDefault();
    resetDiv(e.target.id)
    if (e.target.id=='prev1' && pgnCount1>1){
        pgnCount1-=1  
    }else if (e.target.id=='next1' && pgnCount1<10){
        pgnCount1+=1
    }else{
        pgnCount1=1 
    }
    middle1.innerText=`Reset | ${pgnCount1*10-9} - ${pgnCount1*10}`;
    getAlbumData();
}

async function getNthAlbPhotos(e){
    e.preventDefault()
    resetDiv(e.target)
    const selectedPStream=await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${e.target.innerText}`);
    const selectedPhotos=await selectedPStream.json();
    selectedPhotos.forEach(photo=>{
        div.innerHTML+=`
            <div class='card col-lg-3 col-md-4 col-sm-6 mx-1 d-flex shadow card-img-top m-2'>
                <img class='rounded-circle w-150 p-2' src='${photo.thumbnailUrl}'>
                <div class="card-body text-center">
                    <h5 class="card-title title text-muted">${photo.id}</h5>
                    <p class="card-text subtext">${photo.title}</p>
                </div>
            </div>
        `
    })
}

function resetDiv(id){
    const checkArr1=['next1','prev1','middle1']
    div1.innerHTML='';
    div.innerHTML='';

   if (checkArr1.includes(id)){
        div1.style.minHeight='1200px';
        div.style.minHeight='0';
    }else{
        div.style.minHeight='1200px';
        div1.style.minHeight='0';
    }
}

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