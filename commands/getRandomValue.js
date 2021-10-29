/**
* @param {int} min
* @param {int} max
*/

module.exports = {
    name: "getRandomValue",
    description: "returns a random interger value",
    execute(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }
}