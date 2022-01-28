class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }
    get(index) {
       return this.data[index] 
    }
    push (item) {
        this.data[this.length] = item;
        this.length++;
        return this.length
    }
    pop () {
      delete this.data[this.length - 1 ]
      this.length--;
      return this.length
    }
    delete(index) {
      const item = this.data[index];
      delete this.data[index];
      this.shiftItems(index);
      this.length--;
      return item;

    }
    shiftItems(index) {
      for(let i = index; i < this.length -1; i++){
        this.data[i] = this.data[i+1];
      }
    }
}

const newArray = new MyArray();