import Component from '@ember/component';
import {
  get,
  set
} from '@ember/object';

const NUMBER_OF_REELS = 9;

export default Component.extend({
  credits: 0,
  selectedLevel: 3,

  // At this point jQuery onWindow load has completed
  // Calling this makes sure that only 3 slot reel icons are showing
  didInsertElement: function() {
    for (let i=1; i<=NUMBER_OF_REELS; i++) {
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
  checkWin() {
    console.log(`level: ${this.get('selectedLevel')}`);
    let credits = 0;
    if (this.selectedLevel >= 1) {
      // check 2nd row
      if (((this.get('reel4').active == this.get('reel5').active) && (this.get('reel5').active == this.get('reel6').active))) {
        if (this.get('reel4').active == 0 || this.get('reel4').active == 1 || this.get('reel4').active == 2)
          credits += 100;
        else if (this.get('reel4').active == 3 || this.get('reel4').active == 4)
          credits += 300;
        else if (this.get('reel4').active == 5)
          credits += 1000;
      }
    }
    if (this.selectedLevel >= 2) {
      // check 1st row
      if (((this.get('reel1').active == this.get('reel2').active) && (this.get('reel2').active == this.get('reel3').active))) {
        if (this.get('reel1').active == 0 || this.get('reel1').active == 1 || this.get('reel1').active == 2)
          credits += 100;
        else if (this.get('reel1').active == 3 || this.get('reel1').active == 4)
          credits += 300;
        else if (this.get('reel1').active == 5)
          credits += 1000;
      }
      // check 3rd row
      if (((this.get('reel7').active == this.get('reel8').active) && (this.get('reel8').active == this.get('reel9').active))) {
        if (this.get('reel7').active == 0 || this.get('reel7').active == 1 || this.get('reel7').active == 2)
          credits += 100;
        else if (this.get('reel7').active == 3 || this.get('reel7').active == 4)
          credits += 300;
        else if (this.get('reel7').active == 5)
          credits += 1000;
      }
    }
    if (this.selectedLevel >= 3) {
      // check top-bot diagonal
      if (((this.get('reel1').active == this.get('reel5').active) && (this.get('reel5').active == this.get('reel9').active))) {
        if (this.get('reel1').active == 0 || this.get('reel1').active == 1 || this.get('reel1').active == 2)
          credits += 100;
        else if (this.get('reel1').active == 3 || this.get('reel1').active == 4)
          credits += 300;
        else if (this.get('reel1').active == 5)
          credits += 1000;
      }
      // check bot-top diagonal
      if (((this.get('reel7').active == this.get('reel5').active) && (this.get('reel5').active == this.get('reel3').active))) {
        if (this.get('reel7').active == 0 || this.get('reel7').active == 1 || this.get('reel7').active == 2)
          credits += 100;
        else if (this.get('reel7').active == 3 || this.get('reel7').active == 4)
          credits += 300;
        else if (this.get('reel7').active == 5)
          credits += 1000;
      }
    }
    this.winCredits(credits)
  },
  winCredits(amount) {
    console.log(`won ${amount}`);
    // add credits to backend
    var i;
    for (i = 0; i < amount; i++) {
      this.set('credits', this.get('credits') + 1);
    }
  },
  unhighlightAllLevelButtons() {
    this.$('.level-one-container button').css('background-color', 'rgba(0, 0, 0, 0.12)');
    this.$('.level-two-container button').css('background-color', 'rgba(0, 0, 0, 0.12)');
    this.$('.level-three-container button').css('background-color', 'rgba(0, 0, 0, 0.12)');
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
      for (let i=1; i<=NUMBER_OF_REELS; i++) {
//
        get(this, `reel${i}`).shuffle(99999, this.onComplete);
      }
    },
    stop() {
      for (let i=1; i<=NUMBER_OF_REELS; i++) {
        get(this, `reel${i}`).shuffle(0, this.onComplete);
      }
      this.checkWin();
    },
    selectLevelOne() {
      this.selectedLevel = 1;
      this.unhighlightAllLevelButtons();
      this.highlightLevelButtons(1);
    },
    selectLevelTwo() {
      this.selectedLevel = 2;
      this.unhighlightAllLevelButtons();
      this.highlightLevelButtons(1);
      this.highlightLevelButtons(2);
    },
    selectLevelThree() {
      this.selectedLevel = 3;
      this.unhighlightAllLevelButtons();
      this.highlightLevelButtons(1);
      this.highlightLevelButtons(2);
      this.highlightLevelButtons(3);
    },
  }
});