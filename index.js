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
  //return current[current.length-1]
  //var next = []
  var next = current.children[0]
  while (next){
    current = next
    next = current.children[0]
  }
  return current
  
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
