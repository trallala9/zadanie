function getTriangleArea(a, h) {
    if (a, h <= 0)
        return "Nieprawidlowe dane";
    else
        return (a * h / 2);
}
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(11, 16);
var triangle3Area = getTriangleArea(12, 17);
