import Component from '@ember/component';
import {
  get,
  set
} from '@ember/object';

let RESULTS = [];
const NUMBER_OF_REELS = 9;
let SELECTED_LEVEL = 3;
let CREDITS = 0;

export default Component.extend({
  // Calling this makes sure that 9 slot reel icons are showing
  didInsertElement: function() {
    for (let i=1; i<NUMBER_OF_REELS+1; i++) {
      this.setReel(`reel${i}`, i*36);
    }
  },
  didReceiveAttrs: function() {
    console.log("fwejoij  " + this.get('mCredits'));
    CREDITS = this.mCredits;
  },
  didRender: function() {
    this.set('mCredits', CREDITS);
    // TODO: set mCredits
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
      console.log(`Results: ${RESULTS}` + SELECTED_LEVEL);

      //if (betting = 1x)
      if ((RESULTS[3] == RESULTS[4]) && (RESULTS[4] == RESULTS[5]))
      {
        if (RESULTS[3] == 0 || RESULTS[3] == 1 || RESULTS[3] == 2)
          CREDITS += 100;
        else if (RESULTS[3] == 3 || RESULTS[3] == 4)
          CREDITS += 300;
        else if (RESULTS[3] == 5)
          CREDITS += 1000;
      }
      //if (betting = 2x)
        else if (((RESULTS[0] == RESULTS[1]) && (RESULTS[1] == RESULTS[2])) || ((RESULTS[3] == RESULTS[4]) && (RESULTS[4] == RESULTS[5])) || ((RESULTS[6] == RESULTS[7]) && (RESULTS[7] == RESULTS[8])))
        {
          if (((RESULTS[0] == 0) && (RESULTS[1] == 0) && (RESULTS[2] == 0)) || ((RESULTS[0] == 1) && (RESULTS[1] == 1) && (RESULTS[2] == 1)) || ((RESULTS[0] == 2) && (RESULTS[1] == 2) && (RESULTS[2] == 2)))
          CREDITS += 100;
          //Add 100
          if (((RESULTS[3] == 0) && (RESULTS[4] == 0) && (RESULTS[5] == 0)) || ((RESULTS[3] == 1) && (RESULTS[4] == 1) && (RESULTS[5] == 1)) || ((RESULTS[3] == 2) && (RESULTS[4] == 2) && (RESULTS[5] == 2)))
            CREDITS += 100;
          if (((RESULTS[6] == 0) && (RESULTS[7] == 0) && (RESULTS[8] == 0)) || ((RESULTS[6] == 1) && (RESULTS[7] == 1) && (RESULTS[8] == 1)) || ((RESULTS[6] == 2) && (RESULTS[7] == 2) && (RESULTS[8] == 2)))
            CREDITS += 100;
          if (((RESULTS[0] == 3) && (RESULTS[1] == 3) && (RESULTS[2] == 3)) || ((RESULTS[0] == 4) && (RESULTS[1] == 4) && (RESULTS[2] == 4)))
            CREDITS += 300;
          if (((RESULTS[3] == 3) && (RESULTS[4] == 3) && (RESULTS[5] == 3)) || ((RESULTS[3] == 4) && (RESULTS[4] == 4) && (RESULTS[5] == 4)))
            CREDITS += 300;
          if (((RESULTS[6] == 3) && (RESULTS[7] == 3) && (RESULTS[8] == 3)) || ((RESULTS[6] == 4) && (RESULTS[7] == 4) && (RESULTS[8] == 4)))
            CREDITS += 300;
          if ((RESULTS[0] == 5) && (RESULTS[1] == 5) && (RESULTS[2] == 5))
            CREDITS += 1000;
          if ((RESULTS[3] == 5) && (RESULTS[4] == 5) && (RESULTS[5] == 5))
            CREDITS += 1000;
          if ((RESULTS[6] == 5) && (RESULTS[7] == 5) && (RESULTS[8] == 5))
            CREDITS += 1000;
        }
      //if (betting = 3x)
        else if (((RESULTS[0] == RESULTS[1]) && (RESULTS[1] == RESULTS[2])) || ((RESULTS[3] == RESULTS[4]) && (RESULTS[4] == RESULTS[5])) || ((RESULTS[6] == RESULTS[7]) && (RESULTS[7] == RESULTS[8])) || ((RESULTS[0] == RESULTS[4]) && (RESULTS[0] == RESULTS[8])) || ((RESULTS[2] == RESULTS[4]) && (RESULTS[2] == RESULTS[6])))
        {
          if (((RESULTS[0] == 0) && (RESULTS[1] == 0) && (RESULTS[2] == 0)) || ((RESULTS[0] == 1) && (RESULTS[1] == 1) && (RESULTS[2] == 1)) || ((RESULTS[0] == 2) && (RESULTS[1] == 2) && (RESULTS[2] == 2)))
            CREDITS += 100;
            //Add 100
          if (((RESULTS[3] == 0) && (RESULTS[4] == 0) && (RESULTS[5] == 0)) || ((RESULTS[3] == 1) && (RESULTS[4] == 1) && (RESULTS[5] == 1)) || ((RESULTS[3] == 2) && (RESULTS[4] == 2) && (RESULTS[5] == 2)))
            CREDITS += 100;
          if (((RESULTS[6] == 0) && (RESULTS[7] == 0) && (RESULTS[8] == 0)) || ((RESULTS[6] == 1) && (RESULTS[7] == 1) && (RESULTS[8] == 1)) || ((RESULTS[6] == 2) && (RESULTS[7] == 2) && (RESULTS[8] == 2)))
            CREDITS += 100;
          if (((RESULTS[0] == 0) && (RESULTS[4] == 0) && (RESULTS[8] == 0)) || ((RESULTS[0] == 1) && (RESULTS[4] == 1) && (RESULTS[8] == 1)) || ((RESULTS[0] == 2) && (RESULTS[4] == 2) && (RESULTS[8] == 2)))
            CREDITS += 100;
          if (((RESULTS[2] == 0) && (RESULTS[4] == 0) && (RESULTS[6] == 0)) || ((RESULTS[2] == 1) && (RESULTS[4] == 1) && (RESULTS[6] == 1)) || ((RESULTS[2] == 2) && (RESULTS[4] == 2) && (RESULTS[6] == 2)))
            CREDITS += 100;
          if (((RESULTS[0] == 3) && (RESULTS[1] == 3) && (RESULTS[2] == 3)) || ((RESULTS[0] == 4) && (RESULTS[1] == 4) && (RESULTS[2] == 4)))
            CREDITS += 300;
          if (((RESULTS[3] == 3) && (RESULTS[4] == 3) && (RESULTS[5] == 3)) || ((RESULTS[3] == 4) && (RESULTS[4] == 4) && (RESULTS[5] == 4)))
            CREDITS += 300;
          if (((RESULTS[6] == 3) && (RESULTS[7] == 3) && (RESULTS[8] == 3)) || ((RESULTS[6] == 4) && (RESULTS[7] == 4) && (RESULTS[8] == 4)))
            CREDITS += 300;
          if (((RESULTS[0] == 3) && (RESULTS[4] == 3) && (RESULTS[8] == 3)) || ((RESULTS[0] == 4) && (RESULTS[4] == 4) && (RESULTS[8] == 4)))
            CREDITS += 300;
          if (((RESULTS[2] == 3) && (RESULTS[4] == 3) && (RESULTS[6] == 3)) || ((RESULTS[2] == 4) && (RESULTS[4] == 4) && (RESULTS[6] == 4)))
            CREDITS += 300;
          if ((RESULTS[0] == 5) && (RESULTS[1] == 5) && (RESULTS[2] == 5))
            CREDITS += 1000;
          if ((RESULTS[3] == 5) && (RESULTS[4] == 5) && (RESULTS[5] == 5))
            CREDITS += 1000;
          if ((RESULTS[6] == 5) && (RESULTS[7] == 5) && (RESULTS[8] == 5))
            CREDITS += 1000;
          if ((RESULTS[0] == 5) && (RESULTS[4] == 5) && (RESULTS[8] == 5))
            CREDITS += 1000;
          if ((RESULTS[2] == 5) && (RESULTS[4] == 5) && (RESULTS[6] == 5))
            CREDITS += 1000;
        }
    }
    console.log("inside "+ CREDITS);
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
      // reset reel for start
      RESULTS = [];
      for (let i=1; i<NUMBER_OF_REELS+1; i++) {
        get(this, `reel${i}`).shuffle(99999, this.onComplete);
      }
      CREDITS = this.mCredits;
      if (SELECTED_LEVEL == 1) {
        CREDITS -= 10;
      }
      else if (SELECTED_LEVEL == 2) {
        CREDITS -= 20;
      }
      else if (SELECTED_LEVEL == 3) {
        CREDITS -= 30;
      }
      this.set('mCredits', CREDITS);
    },
    stop() {
      for (let i=1; i<NUMBER_OF_REELS+1; i++) {
        get(this, `reel${i}`).shuffle(0, this.onComplete);
      }
      console.log("outside " + CREDITS); // displays the creidts
    },
    selectLevelOne() {
      SELECTED_LEVEL = 1;
      this.unhighlightAllLevelButtons();
      this.highlightLevelButtons(1);
    },
    selectLevelTwo() {
      SELECTED_LEVEL = 2;
      this.unhighlightAllLevelButtons();
      this.highlightLevelButtons(1);
      this.highlightLevelButtons(2);
    },
    selectLevelThree() {
      SELECTED_LEVEL = 3;
      this.unhighlightAllLevelButtons();
      this.highlightLevelButtons(1);
      this.highlightLevelButtons(2);
      this.highlightLevelButtons(3);
    },
  }
});