class Rectangle{
    constructor(length, bredth){
        this.length = length;
        this.bredth = bredth;
    }

    area(){
        let area = this.length * this.bredth;
        return area;
    }
}

class Square extends Rectangle{
    constructor(length){
        super(length, length);
        this.length =length;
        this.bredth =length;
    }
}

let object = new Square(10);
console.log(object.area());