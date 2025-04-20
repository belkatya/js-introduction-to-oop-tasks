// BEGIN
function Point(x, y) {
    this.x = x;
    this.y = y;

    this.getX = () => this.x;
    this.getY = () => this.y;
}

function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
    this.getBeginPoint = () => this.beginPoint;
    this.getEndPoint = () => this.endPoint;
}

const reverse = (segment) => {
    const beginPoint = segment.getBeginPoint();
    const endPoint = segment.getEndPoint();
    const reversedBeginPoint = new Point(endPoint.getX(), endPoint.getY());
    const reversedEndPoint = new Point(beginPoint.getX(), beginPoint.getY());
    return new Segment(reversedBeginPoint, reversedEndPoint);
};

export {Point, Segment, reverse};
// END
