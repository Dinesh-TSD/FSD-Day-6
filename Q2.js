class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    toString(){
      return `[radius=${this.radius},color=${this.color}]`;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  const circle1 = new Circle(); 
  const circle2 = new Circle(2.5);
  const circle3 = new Circle(3.0, "blue");

  
  console.log("string: "+circle1.toString());
  console.log("Area: "+circle2.getArea().toFixed(2));
  console.log("Circumference: "+circle3.getCircumference().toFixed(2));
  console.log("Radius: "+circle3.radius);
  console.log("Color: "+circle3.color);
  