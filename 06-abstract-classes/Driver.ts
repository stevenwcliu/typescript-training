import { Shape } from './Shape';
import { Circle} from './Circle';
import { Rectangle} from './Rectangle';

// let myShape = new Shape(10, 15);
// console.log(`My Shape: `, myShape.getInfo());

let myCircle = new Circle(5, 10, 20);
console.log(`My Circle: `, myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 3, 7);
console.log(`My Rectangle: `, myRectangle.getInfo());