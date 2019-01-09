//this closes another modal as another one is opened 
function closeAllProjects(className){
  let selectedElms = document.getElementsByClassName(`${className}`)
  for (let i = 0; i < selectedElms.length; i++){
      selectedElms[i].style.visibility = 'hidden'
  }
}

//this dynamically closes the modals, regardless of which one you press
let x = document.getElementsByClassName('close')
function closeOneProject (htmlCol){
    for (let i=0; i<htmlCol.length; i++){
      console.log('lenght', htmlCol.length)
        document.addEventListener('click', (e) => {
            let parentElmId = e.srcElement.offsetParent.id
            document.getElementById(parentElmId).style.visibility = 'hidden';
        })
    }
}

closeOneProject(x);








let clickBox = document.getElementById('lucentInfo')
window.onclick = function(event) {
  console.log("this", clickBox)
  if (event.target === window) {
    console.log('whats', clickBox)
    clickBox.style.display = 'none';
  }
}

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

