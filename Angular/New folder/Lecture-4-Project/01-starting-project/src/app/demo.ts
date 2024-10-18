class Demo{

    arr: number[] = [1,2,3,4,5];

    anyfunct() {
        let num = this.arr.map(a => {
            console.log(a);
            return a === 1;
        });
    } 
}