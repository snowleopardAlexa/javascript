// Object literals
function skier(name, sound) {
    return {
        // old way
        // name: name,
        // sound: sound,
        // enhancement
        name,
        sound,
        powderYell: function() {
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}!`);
        }
    };
}

skier("Sandy", "woo").powderYell();


