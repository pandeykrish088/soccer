class Game {
constructor() {

}
getState() {
var gameStateRef = database.ref('gameState');
gameStateRef.on("value",function(data){
gameState = data.val();
}
)
}
update(state) {
database.ref('/').update({
gameState:state
}
)
}
start() {
if(gameState === 0) {
player = new Player();
player.getCount();
form = new Form();
form.display();

player1 = createSprite(displayWidth - 50,displayHeight/2);
player2 = createSprite(50,displayHeight/2);
}


}

play() {


}
}