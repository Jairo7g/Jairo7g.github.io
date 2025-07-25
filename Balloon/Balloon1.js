/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Balloon1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("balloon1-a", "./Balloon1/costumes/balloon1-a.svg", {
        x: 32,
        y: 94,
      }),
      new Costume("balloon1-a2", "./Balloon1/costumes/balloon1-a2.svg", {
        x: 29.728883761554442,
        y: 96.65656095717868,
      }),
      new Costume("balloon1-b", "./Balloon1/costumes/balloon1-b.svg", {
        x: 31,
        y: 94,
      }),
      new Costume("balloon1-c", "./Balloon1/costumes/balloon1-c.svg", {
        x: 31,
        y: 94,
      }),
    ];

    this.sounds = [new Sound("Pop", "./Balloon1/sounds/Pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.glide(1, 83, 84);
      yield* this.wait(1);
      yield* this.glide(1, 131, -133);
      yield;
    }
  }
}
