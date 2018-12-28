//can everyone see this? 

function getPermutations(array) { //[1, 2, 3, 4]
  // Write your code here.
  let finalArray = [];
  let first, rest, subPerms;
  if (array.length === 0) {
    return finalArray
  } else if (array.length === 1) {
    finalArray.push(array)
  } else if (array.length === 2) {
    return [[array[0], array[1]], [array[1], array[0]]]
  } else {
    for (let i = 0; i < array.length; i++) {
      first = [array[i]] //1
      rest = array.slice(0, i).concat(array.slice(i + 1)) //[2, 3, 4]
      subPerms = getPermutations(rest)
      subPerms.forEach(elem => {
        finalArray.push(first.concat(elem))
      })
    }
  }
  return finalArray
}

  //finalArray.push(array)
  //finalArray.concat(array); //[[1,2,3]]

  // let rest = array.slice(1) // [2,3]
  // let first = array[0];  //1

  //iterating through array
  //continually change the value of first
  for (let i = 0; i < array.length; i++) {
    let first = array[i] //1

    //left -- i -- right
    let leftOfI = array.slice(0, i)
    let rightOfI = array.slice(i + 1)
    let rest = leftOfI.concat(rightOfI)

    getPermutations(rest).map(element => {
      finalArray.push(element.concat(first))
    })

  }
  return finalArray;


}

//[1,2,3] 
//[[1,2,3],[1,3,2],[2,1,3],[3,1,2],[3,2,1]]

//shallow copy --> copy of all values of original obj. If any values of obj are objects themselves, only memory addresses (references) are copied to the clone.
//deep copy --> copy of all values of original obj. If any values of obj are objects themselves, new memory is dynamically allocated to store those objects in the clone.
//https://we-are.bookmyshow.com/understanding-deep-and-shallow-copy-in-javascript-13438bad941c




function getPermutations(array) {
	let final = [];
	let head, tail, subPerms;
	if (array.length === 0) {
		return final;
	} else if (array.length === 1) {
		final.push(array);
	} else if (array.length === 2) {
		return [[array[0], array[1]], [array[1], array[0]]];
	} else {
			for (let i = 0; i < array.length; i++) {
				head = [array[i]]
				tail = array.slice(0, i).concat(array.slice(i + 1));
				subPerms = getPermutations(tail);
				subPerms.forEach(elem => final.push(head.concat(elem)))				
			}
		}
	return [...new Set(final)];
}

//Linked List 

//A linear data structure, much like an array, that consists of nodes, 
//where each node contains data as well as a link to the next node, 
//but that does not use contiguous memory. O(n)