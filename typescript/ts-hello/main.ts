function lock() {
    let hello = 'suday';
    let a: number;
    let bool: boolean;
    let str: string;
    let an: any;
    let arr: number[] = [1, 2, 3];
    enum Color { Red = 0, Green = 1, Blue = 2 };

    let backColor = Color.Red;

    for (let i = 0; i < 100; i++) {
        console.log(i);
    }
}

lock();

let dolog = (message: string) => console.log(message);


let drawPoints = (point: Point) => {
    console.log(point);
}

drawPoints({
    x: 1,
    y: 3
});

interface Point {
    x: number,
    y: number
}
