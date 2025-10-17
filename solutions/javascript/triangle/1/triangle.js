//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    if (sides.length !== 3) {
      throw new Error("A triangle must have exactly three sides.");
    }
    this.sides = sides.map(Number); // Ensure sides are numbers
    [this.a, this.b, this.c] = this.sides; // Destructure to individual sides
    this.set = new Set(this.sides);
  }

  isValid() {
    return this.a + this.b > this.c && 
           this.a + this.c > this.b && 
           this.b + this.c > this.a; // Use strict inequality
  }

  get isEquilateral() {
    return this.isValid() && this.set.size === 1 ;
  }

  get isIsosceles() {
    return this.isValid() && (this.set.size === 2 || this.isEquilateral);
  }

  get isScalene() {
    return this.isValid() && this.set.size === 3;
  }
}

