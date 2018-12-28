// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
// let foo = new BST(10); ===> this.value = 10, this.left = null, this.right = null
// foo.insert(5); ===> this.value = 10, this.left = new BST(this.value = 5, this.left = null, this.right = null)
// foo.insert(4); ... = 10, this.left = new BST(this.value = 5, this.left = new BST( this.value = 4, this.left = null, this.right = null), this.right = null), this.right = null
  
  apple(value) {  //7
    // Write your code here.
    // Do not edit the return statement of this method.
    let node = new BST(value); // {value: 7, left: null right: null}

    if (value < this.value && this.left === null){  
      this.left = node;
    } else if (value < this.value) {  
      this.left.apple(value); 
    } else if (value > this.value && this.right === null){ 
      this.right = node;
    } else if (value > this.value) { 
      this.right.apple(value);
    }

    return this;
  }
  
  
  
  
  

  contains(value) {
    // Write your code here.
    if (value === this.value){ 
      return true;
    }
    if (value < this.value && this.left !== null){
      return this.left.contains(value);
    } else if (value > this.value && this.right !== null){
      return this.right.contains(value);
    }
  return false;
  }

  remove(value, parent = null) {
    // Write your code here.
    // Do not edit the return statement of this method.
    if (value < this.value){
      if (this.left !== null){
        this.left.remove(value, this);
      }
    } else if (value > this.value) {
      if (this.right !== null){
        this.right.remove(value, this);
      }
    } else {
      if (this.left !== null && this.right !==null){
        this.value = this.right.value;
        
        //this.right will replace the parent 
      }
    }


    if (value === this.value){ 
      this.value = null;
    }

    return this;
  }
}


            //     10
                 5   12
              4    6
                ..   ..



// Do not edit the line below.
exports.BST = BST;

