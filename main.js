var SH = [
  { address: 'حي السلام',price:7000,rooms:5, location: [32.276847, 30.606981],imgs: ["https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg","https://www.phillyaptrentals.com/wp-content/uploads/2020/02/ambassador-2-thumbnail-image.jpg","https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg","https://www.phillyaptrentals.com/wp-content/uploads/2020/02/ambassador-2-thumbnail-image.jpg","https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg","https://www.phillyaptrentals.com/wp-content/uploads/2020/02/ambassador-2-thumbnail-image.jpg","https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg","https://www.phillyaptrentals.com/wp-content/uploads/2020/02/ambassador-2-thumbnail-image.jpg","https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg","https://www.phillyaptrentals.com/wp-content/uploads/2020/02/ambassador-2-thumbnail-image.jpg","https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg","https://www.phillyaptrentals.com/wp-content/uploads/2020/02/ambassador-2-thumbnail-image.jpg","https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg","https://www.phillyaptrentals.com/wp-content/uploads/2020/02/ambassador-2-thumbnail-image.jpg","https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg","https://www.phillyaptrentals.com/wp-content/uploads/2020/02/ambassador-2-thumbnail-image.jpg"] },
  { address: 'جامع فاطمة الزهراء',price:8000,rooms:4, location: [32.274186,30.607398],imgs: ["https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg",] },
  { address: 'شارع ي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السالمستشفي',price:5000,rooms:2, location: [32.277946,30.609672],imgs: ["https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg",] },
  { address: 'البحري',price:6000,rooms:6, location: [32.282272,30.610130],imgs: ["https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg",] },
];
// map
mapboxgl.accessToken = 'pk.eyJ1IjoibWF6ZW54ZWxnYXlhciIsImEiOiJjbDV3eDEwejAwZmU3M2NwaXU4YzY5dTE0In0.ywGQXbcUzmKG1zk8e8ZYyg';
const map = new mapboxgl.Map({
 container: 'map', // container ID
 style: 'mapbox://styles/mapbox/streets-v12', // style URL
 center: [32.276847, 30.606981], // starting position [lng, lat]
 zoom: 10, // starting zoom
 attributionControl: false
});

  map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
  enableHighAccuracy: true
  },
  // When active the map will receive updates to the device's location as it changes.
  trackUserLocation: true,
  // Draw an arrow next to the location dot to indicate which direction the device is heading.
  showUserHeading: true
  }), 'bottom-right');

var d = document.getElementById("div");
window.onload = function(){
  //document.getElementById("menu_addressssAndClose").src==""
  // document.getElementsByClassName("menu-btn")[0].addEventListener("click" , function(){
  //     if (document.getElementById("menu_addressssAndClose").src=="imgs/menue.png") {
  //       setTimeout(() => {
        
  //         // 👇️ hides element (still takes up space on the page)
  //         document.getElementsByClassName("menu-btn")[0].innerHTML="X";
  //       }, 100);
  //     } else {
  //       setTimeout(() => {
        
  //         // 👇️ hides element (still takes up space on the page)
  //         document.getElementById("menu_addressssAndClose").src=="imgs/menue.png";
  //       }, 100);
        
  //     }
  //   })
  var cDiv = d.children;
      for (var i = 0; i < cDiv.length; i++) {
          //cDiv[i].style.transition = "visibility 0s";
          // cDiv[i].style.visibility= "hidden";  //do styling here
          cDiv[i].setAttribute("class","m-fadeOut");
      }
  document.getElementById("PreLoader").style.display="none";
  
}
//marker icon
//var im = document.createElement("img")
// window.onload = function() {
    
//     im.setAttribute('id','fa');
//     im.setAttribute('src','imgs/icon.png');
//     im.setAttribute('width','32px');
//     im.setAttribute('height','32px');
//     im.style.cursor = "pointer";
    
//     document.body.appendChild(im);
// };

//marker to map
var zoom = map.getZoom(); //zoom level

//var d = document.getElementById("div");

var addresss = document.getElementById("addresss");
var pricee = document.getElementById("pricee");
var roomss = document.getElementById("roomss");
var ApartmentImagess = document.getElementById("ApartmentImages");
var x = document.getElementById("XBTN");
SH.forEach(({address,price,rooms,location,imgs})=>{
  var im = document.createElement("img")
    im.setAttribute('id','fa');
    im.setAttribute('src','imgs/icon.png');
    im.setAttribute('width','32px');
    im.setAttribute('height','32px');
    im.style.cursor = "pointer";
    
    var m = new mapboxgl.Marker(im).setLngLat(location).addTo(map)._element.id = location;
    if (map.getZoom() >= 12) {
          
      im.style.display = "block";
  } else {
    im.style.display = "none";
  }
    //m._element.id = location;
    map.on('zoom', () => {
    
        // document.getElementById("fa").width = Math.round(map.getZoom()*2);
        // document.getElementById("fa").height = Math.round(map.getZoom()*2);
        if (map.getZoom() >= 12) {
          
          im.style.display = "block";
      } else {
        im.style.display = "none";
      }
        //console.log(map.getZoom());
    });
    
    im.addEventListener("click" , function(){
      // map.on('click', function(e) {
      //   var coordinates = e.lngLat;
      // for (let i = 0; i < SH.length; i++) {
      //   addresss.innerHTML = address;
      //   pricee.innerHTML = price;
      //   roomss.innerHTML = rooms;
      //   var cDivimgs = ApartmentImagess.children;
 
      // }
      addresss.innerHTML = address;
      pricee.innerHTML = price;
      roomss.innerHTML = rooms;
      // var cDivimgs = ApartmentImagess.children;
      // for (var g = 0; g < cDivimgs.length; g++) {
      //   //cDiv[g].style.transition = "visibility 0s";
      //   // cDiv[g].style.visibility= "hidden";  //do styling here
      //   cDivimgs[g].remove();
      // }
            ApartmentImagess.innerHTML="";
      for (let j = 0; j < imgs.length; j++) {
        console.log(imgs.length);
        console.log(j);
        var img = document.createElement("img");
        var dvi = document.createElement("div")
        img.setAttribute('src',imgs[j])
        img.setAttribute('width','500px');
        img.setAttribute('height','200px');
        img.style.padding="10px"
        // dvi.innerHTML = "lk;k"
        // dvi.style.backgroundColor = "blue";
        // dvi.style.padding = "10px";
        
        // dvi.setAttribute("width","200px");
        // dvi.setAttribute("height","10px")
        
        ApartmentImagess.appendChild(img);
        // ApartmentImagess.appendChild(dvi);
        //ApartmentImagess.innerHTML = "<img srs = \'"++"\>'";
        
      }
      // });
      
      // if (d.style.display === "none") {
      //   d.style.display = "block";
      // } else {
      //   d.style.display = "none";
      // }

      if (d.style.width="0") {
        d.style.width="570px";
      } else {
        d.style.width="0px";
      }
      //x.style.display = "block";
      document.getElementById("div").style.transition = "width 0.5s,height 0.5s";
      document.getElementById("div").style.width="570px";
      document.getElementById("div").style.height="500px";//500
      //document.getElementById("div").style.top = screen.height + "px";
      //addresss.display="block";
      var cDiv = d.children;
      for (var i = 0; i < cDiv.length; i++) {
          //cDiv[i].style.transition = "visibility 10s";
          //cDiv[i].style.visibility= "visible";  //do styling here
          cDiv[i].setAttribute("class","m-fadeIn");
      }

    })

})
//new mapboxgl.Marker().setLngLat([32.276847, 30.606981]).addTo(map);
// new mapboxgl.Marker().setLngLat([32.274186,30.607398]).addTo(map);
// new mapboxgl.Marker().setLngLat([32.277946,30.609672]).addTo(map);
// new mapboxgl.Marker(im).setLngLat(SH[0].location).addTo(map);
// new mapboxgl.Marker(im).setLngLat(SH[1].location).addTo(map);

// new mapboxgl.Marker(im).setLngLat(SH[2].location).addTo(map);

// Set an event listener
// map.on('click', (e) => {
//     new mapboxgl.Marker(im)
// .setLngLat([32.276847, 30.606981])
// .addTo(map);
// });

// hide and show the icon with zooming
// var zoom = map.getZoom(); //zoom level
// map.on('zoom', () => {
//     // document.getElementById("fa").width = Math.round(map.getZoom()*2);
//     // document.getElementById("fa").height = Math.round(map.getZoom()*2);
//     if (map.getZoom() >= 12) {
      
//       document.getElementById("fa").style.display = "block";
//   } else {
//     document.getElementById("fa").style.display = "none";
//   }
//     console.log(map.getZoom());
// });

//marker click
// document.getElementsByClassName("fa").addEventListener("click" , function(){
//     var x = document.getElementsByClassName("div");
//     if (d.style.display === "none") {
//       d.style.display = "block";
//     } else {
//       d.style.display = "none";
//     }
//   })

  //hide and show marker in menu clicking
  //document.getElementsByClassName("menu-btn")[0].addEventListener("click" , function(){
  //   if (im.style.display === "none") {
  //     setTimeout(() => {
      
  //       // 👇️ hides element (still takes up space on the page)
  //       im.style.display = "block";
  //     }, 100);
  //   } else {
  //     setTimeout(() => {
      
  //       // 👇️ hides element (still takes up space on the page)
  //       im.style.display = "none";
  //     }, 100);
      
  //   }
  // })
  
// map.on('boxzoomstart', (e) => {
// console.log('event type:', e.type);
// // event type: boxzoomstart
// });
// document.getElementById('bu').addEventListener('click' , myFunction)

// function myFunction() {
//     console.log(map.getZoom());

// }



// CLOSE FUNCTION
function Xbtn(elm) {
 //document.getElementById(elm.addresssentNode.id).style.display="none"
 //x.style.display = "none";
 d.style.height="0px";
 d.style.width="0px";
 
  console.log("ali");
  var cDiv = d.children;
      for (var i = 0; i < cDiv.length; i++) {
          //cDiv[i].style.transition = "visibility 0s";
          // cDiv[i].style.visibility= "hidden";  //do styling here
          cDiv[i].setAttribute("class","m-fadeOut");
      }
  var cDivimgs = ApartmentImagess.children;
  for (var g = 0; g < cDivimgs.length; g++) {
    //cDiv[g].style.transition = "visibility 0s";
    // cDiv[g].style.visibility= "hidden";  //do styling here
    cDivimgs[g].remove();
}
// document.getElementById("32.274186,30.607398").remove();
}



