function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}
Square.prototype.isSquare = function() {
    return this.a === this.b && this.a === this.c && this.a === this.d;
};

const mySquare = new Square(10, 10, 10, 10);
console.log(mySquare.isSquare()); // true example//

const myRectangle = new Square(10, 20, 10, 20); 
console.log(myRectangle.isSquare()); //flase example//
