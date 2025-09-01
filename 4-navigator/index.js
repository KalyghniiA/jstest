let addressLat = 1;
let addressLong = 1;
let positionLat = 2;
let positionLong = 2;

function calcDistance (x1, y1, x2, y2) {
    return 2 * Math.asin(Math.sqrt((Math.sin((x2 - x1) / 2) ** 2) + Math.cos(x1) * Math.cos(x2) * (Math.sin((y2 - y1) / 2) ** 2)));
}

calcDistance(addressLat, positionLat, addressLong, positionLong);