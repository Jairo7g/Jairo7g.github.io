/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite2/costumes/costume1.svg", {
        x: -41.18799999999999,
        y: -19.42641991674938,
      }),
      new Costume("costume2", "./sprite2/costumes/costume2.svg", {
        x: 13.68003631721001,
        y: -19.426419833498784,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "f" }, this.whenKeyFPressed),
    ];
  }

  *whenKeyFPressed() {}
}
