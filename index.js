const PROTOCOL = 'http://';
const SERVER_IP = 'www.google.com';
const PROT = '80';

function createQuery(absPath){
  const url = `${PROTOCOL}${SERVER_IP}:${PROT}${absPath}`;
  return url;
}
createQuery();
console.log(createQuery('/index.html'))