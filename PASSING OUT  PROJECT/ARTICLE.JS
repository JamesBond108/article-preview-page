// let width = '@media (min-width:800px)'
// let fan = '@media (min-width:800px)'

// if(width){
//     document.getElementById('share').addEventListener('click', function () {
//         document.getElementById('testimonial').style.display = 'show'
//         document.getElementById('iconContainer').style.display = 'block'
//     });
// }else{
    
// }
// else if(width){
//     document.getElementById('share').addEventListener('click', function () {
//         document.getElementById('testimonial').style.display = 'none'
//         document.getElementById('iconContainer').style.display = 'block'
//     })
// }



// }else if(fan){
//     document.getElementById('share').addEventListener('click', function () {
//         document.getElementById('iconContainer').style.display = 'show'
//         document.getElementById('testimonial').style.display = 'show'
//     });

// }else{
//   document.getElementById('share').addEventListener('click', function () {
//             document.getElementById('iconContainer').style.display = 'block'
//             document.getElementById('testimonial').style.display = 'show'
//         })
   
// };



function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById('share').addEventListener('click', function () {
        document.getElementById('iconContainer').style.display = 'block'
        document.getElementById('testimonial').style.display = 'none'

        document.getElementById('share2').addEventListener('click', function () {
          document.getElementById('iconContainer').style.display = 'none'
          document.getElementById('testimonial').style.display = 'flex' 
        })
      })
    } else {
     document.getElementById('share').addEventListener('click', function () {
        document.getElementById('testimonial').style.display = 'show'
        document.getElementById('iconContainer').style.display = 'block'

        document.getElementById('share2').addEventListener('click', function () {
          document.getElementById('iconContainer').style.display = 'none'
        })
     })
    }
  }
  
  var x = window.matchMedia("(max-width: 800px)")
  myFunction(x) // Call listener function at run time
 // Attach listener function on state changes
