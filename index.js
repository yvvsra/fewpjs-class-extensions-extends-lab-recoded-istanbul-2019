// Your code here
class Polygon {
    constructor(countSides)
    {
        this.countSides=countSides;
    }
    
    get countSides()
    {
    return this.countSides.length;
    }
    
    get perimeter()
    {
        let sum=0
        for(let side of this.countSides)
        {
            sum=sum+side;
        }
    
        return sum;
    }

}