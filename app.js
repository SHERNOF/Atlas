const lat = document.getElementById('lat')
const long = document.getElementById('long')
const all = document.getElementById('all')
const butLoc = document.getElementById('but-loc')
const locMess = document.getElementById('loc-mess')

const getLoc = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showLoc)
    } else {
        locMess.style.display = 'flex'
        console.log('test')
    }
 
}

const showLoc = (loc) => {
    // lat.value = loc.coords.latitude;
    // long.value = loc.coords.longitude;
   x = all.value = loc.coords.latitude + ',' + loc.coords.longitude;
   // googleapi/?query='x' for suburb
}

butLoc.addEventListener('click', getLoc)
