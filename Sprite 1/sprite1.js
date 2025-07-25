/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 62.35559000000001,
        y: 46.92145017660272,
      }),
      new Costume("costume6", "./Sprite1/costumes/costume6.svg", {
        x: 46.51489984821637,
        y: 49.63531391827755,
      }),
      new Costume("costume7", "./Sprite1/costumes/costume7.svg", {
        x: 47.67898252524472,
        y: 49.49923017660271,
      }),
      new Costume("costume9", "./Sprite1/costumes/costume9.svg", {
        x: 45.56997887045884,
        y: 49.4992305298081,
      }),
      new Costume("costume8", "./Sprite1/costumes/costume8.svg", {
        x: 64.2163393734277,
        y: 50.78812079511309,
      }),
      new Costume("costume10", "./Sprite1/costumes/costume10.svg", {
        x: 64.21634,
        y: 50.78812035320544,
      }),
      new Costume("costume5", "./Sprite1/costumes/costume5.svg", {
        x: 47.67898252524472,
        y: 49.499230353205405,
      }),
      new Costume("costume3", "./Sprite1/costumes/costume3.svg", {
        x: 47.67898499999998,
        y: 49.49923017660271,
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 46,
        y: 53,
      }),
      new Costume("costume4", "./Sprite1/costumes/costume4.svg", {
        x: 45.40780515077083,
        y: 52.49923017660271,
      }),
      new Costume("Cat Flying-b2", "./Sprite1/costumes/Cat Flying-b2.svg", {
        x: 43.873299135023785,
        y: 45.17755,
      }),
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "e" }, this.whenKeyEPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.KEY_PRESSED, { key: "f" }, this.whenKeyFPressed),
    ];
  }

  *whenKeyDPressed() {
    this.costume = "costume5";
    yield* this.wait(0.2);
    this.costume = "costume6";
    this.move(20);
  }

  *whenKeyAPressed() {
    this.costume = "costume4";
    yield* this.wait(0.2);
    this.costume = "costume3";
    this.move(-20);
  }

  *whenKeySpacePressed() {
    this.costume = "costume6";
    yield* this.wait(0.2);
    this.costume = "costume7";
    yield* this.wait(0.2);
    this.costume = "costume9";
    yield* this.wait(0.2);
    this.costume = "costume8";
  }

  *whenKeyEPressed() {
    this.costume = "costume1";
    yield* this.wait(0.3);
    this.costume = "costume6";
  }

  *whenGreenFlagClicked() {
    this.x = -86;
    this.y = -63;
  }

  *startAsClone() {}

  *whenGreenFlagClicked2() {}

  *whenKeyFPressed() {}
}
