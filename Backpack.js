/**
 * Creating classes:
 * 
 * Class declaration: class Name {}
 * Class expression: const Name = class {}
 */

class Backpack {
    constructor (
        // defines parameters:
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen
    ) {
        // define properties:
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLength = {
            left: strapLengthL,
            right: strapLengthR,
        };
        this.lidOpen = lidOpen;
    
    }
}