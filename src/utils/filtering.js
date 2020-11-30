export const generateString = (obj) => {
  let str = '';
  let properArr = [];
  for (const property in obj) {
    if(obj[property] !== '' || null || undefined) {
      properArr.push(property);
    }
  }
  let f = properArr.map(property => `&${property}=${obj[property]}` );
  console.log('String: ', str.concat(f).replace(/\,/g,''));
  return str.concat(f).replace(/\,/g,'');
}