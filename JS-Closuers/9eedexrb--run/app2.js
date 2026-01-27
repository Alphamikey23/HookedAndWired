 const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const notPresentItem = 9;
  const presentItem = 4;
  const itemToSearch = 4;

const array_mapped = arrayOfNumbers.map(function(currItem, index,) {
      if(currItem == itemToSearch) {
         currIndex = index;
         check = true;
         return 1;
      }

   })


   console.log(array_mapped);

console.log(array_mapped.indexOf(1));
