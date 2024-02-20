{/*
* Напишите функцию, которая возвращает общую площадь поверхности и объем коробки в виде массива: [площадь, объем].
* */}
function getSize(width, height, depth) {
    // Calculate the volume of the box
    const volume = width * height * depth;

    // Calculate the total surface area of the box
    const area =  2 * (width * height + width * depth + height * depth);

    // Return the area and volume as an array
    return [area, volume];
}
{/*
const getSize = (w, h, d) => [
  (w * h + w * d + h * d) * 2,
  w * h * d
];

*/}
