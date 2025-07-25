/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("Jungle", "./Stage/costumes/Jungle.png", { x: 480, y: 360 }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 241.201904296875,
        y: 180.0718994140625,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];

    this.vars.score = 0;

    this.watchers.score = new Watcher({
      label: "Score",
      style: "normal",
      visible: true,
      value: () => this.vars.score,
      x: 245,
      y: 175,
    });
  }

  *whenGreenFlagClicked() {
    yield* this.wait(3);
    this.costume = "Jungle";
  }
}
