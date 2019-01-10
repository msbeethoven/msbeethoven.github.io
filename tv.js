//this closes another modal as another one is opened 
function closeAllProjects(className){
  let selectedElms = document.getElementsByClassName(`${className}`)
  for (let i = 0; i < selectedElms.length; i++){
      selectedElms[i].style.visibility = 'hidden'
  }
}

//this dynamically closes the modals, regardless of which one you press
let x = document.getElementsByClassName('close')
function closeOneProject (htmlElem){
    for (let i = 0; i < htmlElem.length; i++){
        document.addEventListener('click', (e) => {
            let parentElmId = e.srcElement.offsetParent.id
            document.getElementById(parentElmId).style.visibility = 'hidden';
        })
    }
}

closeOneProject(x);


// let clickBox = document.getElementById('lucentInfo')
// window.onclick = function(event) {
//   console.log("this", clickBox)
//   if (event.target === window) {
//     console.log('whats', clickBox)
//     clickBox.style.display = 'none';
//   }
// }

let codingismagic = document.getElementById('codingismagic');
codingismagic.addEventListener('click', () => {
  closeAllProjects('clickBox');
  let codingismagicInfo = document.getElementById('codingismagicInfo');
  codingismagicInfo.style.visibility = 'visible';
})

let lucent = document.getElementById('lucent');
lucent.addEventListener('click', () => {
  closeAllProjects('clickBox');
  let lucentInfo = document.getElementById('lucentInfo');
  lucentInfo.style.visibility = 'visible';
})

let rocks4shale = document.getElementById('rocks4shale');
rocks4shale.addEventListener('click', () => {
  closeAllProjects('clickBox');
  let rocks4shaleInfo = document.getElementById('rocks4shaleInfo');
  rocks4shaleInfo.style.visibility = 'visible';
})

let turningoffthescreen = document.getElementById('turningoffthescreen');
turningoffthescreen.addEventListener('click', () => {
  closeAllProjects('clickBox');
  let turningOffInfo = document.getElementById('turningOffInfo');
  turningOffInfo.style.visibility = 'visible';
})

let kulak = document.getElementById('kulak');
kulak.addEventListener('click', () => {
  closeAllProjects('clickBox');
  let turningOffInfo = document.getElementById('kulakInfo');
  turningOffInfo.style.visibility = 'visible';
})

let dontdelete = document.getElementById('dontdelete');
dontdelete.addEventListener('click', () => {
  closeAllProjects('clickBox');
  let turningOffInfo = document.getElementById('dontdeleteInfo');
  turningOffInfo.style.visibility = 'visible';
})

let thoughtsandprayers = document.getElementById('thoughtsandprayers');
thoughtsandprayers.addEventListener('click', () => {
  closeAllProjects('clickBox');
  let thoughtsandprayersInfo = document.getElementById('thoughtsandprayersInfo');
  thoughtsandprayersInfo.style.visibility = 'visible';
})

let newyorkonion = document.getElementById('newyorkonion');
newyorkonion.addEventListener('click', () => {
  closeAllProjects('clickBox');
  let newyorkonionInfo = document.getElementById('newyorkonionInfo');
  newyorkonionInfo.style.visibility = 'visible';
})

