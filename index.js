const { fromEvent } = rxjs
const { map } = rxjs.operators

const old = console.log
const logger = document.getElementById('log')
console.log = function(message) {
  logger.innerHTML +=
    '<span style="color:red">output: </span>' + message + '<br />';
  old(message);
}

let res = {
  input1: '',
  input2: '',
  input3: ''
}

function observersFactory(obj) {
  for (const key in obj){
    const input = document.getElementById(key)
    fromEvent(input, 'input').pipe(
      map(x => obj[key] = x.target.value)
    ).subscribe(x => console.log(JSON.stringify(obj)))
  }
}

observersFactory(res)