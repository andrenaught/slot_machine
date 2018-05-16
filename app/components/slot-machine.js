import Component from '@ember/component';
import {
  get,
  set
} from '@ember/object';

let RESULTS = [];
const NUMBER_OF_REELS = 9;

export default Component.extend({
  // At this point jQuery onWindow load has completed
  // Calling this makes sure that only 3 slot reel icons are showing
  didInsertElement: function() {
    for (let i=1; i<NUMBER_OF_REELS+1; i++) {
      this.setReel(`reel${i}`, i*50);
    }
  },
  setReel(name, delay) {
    let reel = this.$(`.${name}`).slotMachine({
      active: name,
      delay: 75,
      running: true,
      overflow: 'hidden',
      direction: 'down'
    });
    set(this, name, reel);
  },
  onComplete(active) {
    RESULTS.push(active);
    if (RESULTS.length == NUMBER_OF_REELS) {
      console.log(`Results: ${RESULTS}`);
      if ((RESULTS[3] == RESULTS[4]) && (RESULTS[5] == RESULTS[4]))
      {
        if (RESULTS[3] == 1 || RESULTS[3] == 2 || RESULTS[3] == 3)
          console.log('Jackpot. Won 100');
        else if (RESULTS[3] == 4 || RESULTS[3] == 5)
          console.log('Super Jackpot. Won 500');
        else if (RESULTS[3] == 6)
          console.log('Mega Jackpot. Won 1000');
      }
    }

  },
  unhighlightAllLevelButtons() {
    this.$('.slot-container button').css('background-color', 'rgba(0, 0, 0, 0.12)');
  },
  highlightLevelButtons(level) {
    if (level == 1) {
      this.$('.level-one-container button').css('background-color', '#fafafa');
    }
    if (level == 2) {
      this.$('.level-two-container button').css('background-color', '#fafafa');
    }
    if (level == 3) {
      this.$('.level-three-container button').css('background-color', '#fafafa');
    }
  },

  actions: {
    // call to spin the slot reels
    shuffle() {
      // reset reel for start
      RESULTS = [];
      for (let i=1; i<NUMBER_OF_REELS+1; i++) {
//
        get(this, `reel${i}`).shuffle(99999, this.onComplete);
      }
    },
    stop() {
      for (let i=1; i<NUMBER_OF_REELS+1; i++) {
        get(this, `reel${i}`).shuffle(0, this.onComplete);
      }
    },
    selectLevelOne() {
      this.unhighlightAllLevelButtons();
      this.highlightLevelButtons(1);
    },
    selectLevelTwo() {
      this.unhighlightAllLevelButtons();
      this.highlightLevelButtons(1);
      this.highlightLevelButtons(2);
    },
    selectLevelThree() {
      this.unhighlightAllLevelButtons();
      this.highlightLevelButtons(1);
      this.highlightLevelButtons(2);
      this.highlightLevelButtons(3);
    },
  }
});