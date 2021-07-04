/**
 * Creating classes:
 * 
 * Class declaration: class Name {}
 * Class expression: const Name = class {}
 */

class Backpack {
    constructor (
        // define parameters:
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
        this.dateAcquired = dateAcquired;
    }
    // Add methods like normal functions:
    toggleLid(lidStatus) {
        this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    }
    backpackAge() {
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired; // elapsed time in seconds
        let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSinceAcquired;
    }
}

export default Backpack;