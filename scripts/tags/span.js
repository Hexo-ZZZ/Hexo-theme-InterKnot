'use strict';

function postP(args) {
  if(/::/g.test(args)){
    args = args.join(' ').split('::');
  }
  else{
    args = args.join(' ').split(',');
  }
  const p0 = args[0].trim();
  const p1 = args[1].trim();
  let p2 = ""
  for (let i of p0.split(" ")) {
    p2 += " text-" + i
  }
  return `<p class='p ${p2.trim()}'>${p1}</p>`;
}
function postSpan(args) {
  if(/::/g.test(args)){
    args = args.join(' ').split('::');
  }
  else{
    args = args.join(' ').split(',');
  }
  const p0 = args[0].trim();
  const p1 = args[1].trim();
  let p2 = ""
  for (let i of p0.split(" ")) {
    p2 += " text-" + i
  }
  return `<span class='p ${p2.trim()}'>${p1}</span>`;
}

hexo.extend.tag.register('p', postP);
hexo.extend.tag.register('span', postSpan);
