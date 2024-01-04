class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }
  //////To get the  radius of the circle using getRadius() method
  getRadius() {
    // return this.radius;
    console.log(`The circle's radius is : ${this.radius}`);
  }

  //// To set the new radius of the circle using setRadius() method
  setRadius(r) {
    return (this.radius = r);
  }

  //// To get color of circle using getColor() method
  getColor() {
    // return this.color;
    console.log(`The circle color is : ${this.color}`);
  }
  /// To set  the new circle colour using setColor() method
  setColor(colour) {
    return (this.color = colour);
  }
  /////// To print the data in a given format Circle [Radius = ?,Color = ?] using toString() method
  toString() {
    console.log(`Circle [Radius = ${this.radius} , Color = ${this.color}] `);
  }
  ////////////////// To Get the  area of circle using getArea() method
  getArea() {
    let r = this.radius;
    return ` Area of a circle is : ${Number(Math.PI * r * r)}`;
  }
  //////////////////////To Get the Circumference of circle  using getCircumference() method
  getCircumference() {
    let r = this.radius;
    return `Circumference of a circle is : ${Number(2 * Math.PI * r)}`;
  }
}

const circle1 = new Circle(3.2, "white");
console.log(circle1);

//// To set the new radius of the circle using setRadius() method
circle1.setRadius(5.2);

//////To get the  radius of the circle using getRadius() method
console.log(circle1.getRadius());
circle1.getRadius();

//// To get color of circle using getColor() method
console.log(circle1.getColor());

/// To set  the new circle colour using setColor() method
circle1.setColor("Green");

/////// To print the data in a given format Circle [Radius = ?,Color = ?] using toString() method
circle1.toString();

////////////////// To Get the  area of circle using getArea() method
let area = circle1.getArea();
console.log(area);

//////////////////////To Get the Circumference of circle  using getCircumference() method
let cirumference = circle1.getCircumference();
console.log(cirumference);
