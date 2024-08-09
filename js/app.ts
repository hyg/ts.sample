// app.ts
interface Shape {
    area(): number;
  }
  
  class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
  
    area(): number {
      return this.width * this.height;
    }
  }
  
  const rectangle = new Rectangle(10, 5);
  console.log(rectangle.area());
  