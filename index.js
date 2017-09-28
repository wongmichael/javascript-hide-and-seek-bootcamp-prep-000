function getFirstSelector(sel){
  return document.querySelector(sel)
}
function nestedTarget(){
  //return document.getElementById('nested').querySelector('.target')
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  var lis = document.querySelectorAll('.ranked-list')
  for (var i=0;i<lis.length;i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+n
  }
}
function deepestChild(){
  var current = document.getElementById('grand-node')//.querySelectorAll('div')
  
  return current[current.length-1]
  var next = []
  while (current) {
    if (!Array.isArray(current)) {
      return current
    }
    for (var i=0;i<current.length;i++){
      next.push(current[i])
    }
    current = next.shift()
  }
  return null
}
