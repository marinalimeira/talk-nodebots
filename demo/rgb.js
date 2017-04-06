var five = require("johnny-five"), rgb, index, rainbow;

// quando a placa estiver pronta
five.Board().on("ready", function() {
  // crie um novo objeto do tipo Led nas portas 6, 5 e 3
  rgb = new five.Led.RGB({pins: [6, 5, 3], isAnode: true});

  index = 0;
  // array que contem as cores do Led
  rainbow = ["red", "orangered", "yellow", "seagreen",
                 "#2196F3", "royalblue", "rebeccapurple"];

  // em um loop que se repete a cada 600ms, faça
  this.loop(600, function() {
    if (index + 1 === rainbow.length) {
      index = 0;
    }
    // defina a cor do Led como a cor da posição atual do array
    rgb.color(rainbow[index++]);
  });
});
