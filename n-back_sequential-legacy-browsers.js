function welcome2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome2' ---
    welcome2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_resp_welcome2.x) {  psychoJS.experiment.addData('mouse_resp_welcome2.x', mouse_resp_welcome2.x[0])};
    if (mouse_resp_welcome2.y) {  psychoJS.experiment.addData('mouse_resp_welcome2.y', mouse_resp_welcome2.y[0])};
    if (mouse_resp_welcome2.leftButton) {  psychoJS.experiment.addData('mouse_resp_welcome2.leftButton', mouse_resp_welcome2.leftButton[0])};
    if (mouse_resp_welcome2.midButton) {  psychoJS.experiment.addData('mouse_resp_welcome2.midButton', mouse_resp_welcome2.midButton[0])};
    if (mouse_resp_welcome2.rightButton) {  psychoJS.experiment.addData('mouse_resp_welcome2.rightButton', mouse_resp_welcome2.rightButton[0])};
    if (mouse_resp_welcome2.time) {  psychoJS.experiment.addData('mouse_resp_welcome2.time', mouse_resp_welcome2.time[0])};
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

// ======== N-BACK 2 TRIALS ========
var trials2;
function trials2LoopBegin(trials2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_n2.xlsx',
      seed: undefined, name: 'trials2'
    });
    psychoJS.experiment.addLoop(trials2); // add the loop to the experiment
    currentLoop = trials2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials2.forEach(function() {
      snapshot = trials2.getSnapshot();
    
      trials2LoopScheduler.add(importConditions(snapshot));
      trials2LoopScheduler.add(trialRoutineBegin(snapshot));
      trials2LoopScheduler.add(trialRoutineEachFrame());
      trials2LoopScheduler.add(trialRoutineEnd(snapshot));
      trials2LoopScheduler.add(trials2LoopEndIteration(trials2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function trials2LoopEnd() {
  // Calculate results for n2-back
  calculateResults(2);
  
  // terminate loop
  psychoJS.experiment.removeLoop(trials2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

// ======== N-BACK 3 WELCOME ========
var welcome3Components;
function welcome3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    currentNBackLevel = 3;
    
    //--- Prepare to start Routine 'welcome3' ---
    t = 0;
    welcome3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1800.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_resp_welcome3
    // current position of the mouse:
    mouse_resp_welcome3.x = [];
    mouse_resp_welcome3.y = [];
    mouse_resp_welcome3.leftButton = [];
    mouse_resp_welcome3.midButton = [];
    mouse_resp_welcome3.rightButton = [];
    mouse_resp_welcome3.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    welcome3Components = [];
    welcome3Components.push(text_welcome3);
    welcome3Components.push(button_start3);
    welcome3Components.push(button_start3_text);
    welcome3Components.push(mouse_resp_welcome3);
    
    welcome3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function welcome3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome3' ---
    // get current time
    t = welcome3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_welcome3* updates
    if (t >= 0.0 && text_welcome3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_welcome3.tStart = t;  // (not accounting for frame time here)
      text_welcome3.frameNStart = frameN;  // exact frame index
      
      text_welcome3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1800 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_welcome3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_welcome3.setAutoDraw(false);
    }
    
    // *button_start3* updates
    if (t >= 0.0 && button_start3.status === PsychoJS.Status.NOT_STARTED) {
      button_start3.tStart = t;
      button_start3.frameNStart = frameN;
      button_start3.setAutoDraw(true);
    }
    frameRemains = 0.0 + 1800 - psychoJS.window.monitorFramePeriod * 0.75;
    if (button_start3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button_start3.setAutoDraw(false);
    }

    // *button_start3_text* updates  
    if (t >= 0.0 && button_start3_text.status === PsychoJS.Status.NOT_STARTED) {
      button_start3_text.tStart = t;
      button_start3_text.frameNStart = frameN;
      button_start3_text.setAutoDraw(true);
    }
    frameRemains = 0.0 + 1800 - psychoJS.window.monitorFramePeriod * 0.75;
    if (button_start3_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button_start3_text.setAutoDraw(false);
    }
    
    // *mouse_resp_welcome3* updates
    if (t >= 0.0 && mouse_resp_welcome3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_resp_welcome3.tStart = t;  // (not accounting for frame time here)
      mouse_resp_welcome3.frameNStart = frameN;  // exact frame index
      
      mouse_resp_welcome3.status = PsychoJS.Status.STARTED;
      mouse_resp_welcome3.mouseClock.reset();
      prevButtonState = mouse_resp_welcome3.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 1800 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_resp_welcome3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_resp_welcome3.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_resp_welcome3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_resp_welcome3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // Vérifier si le clic est sur le bouton START
          if (button_start3.contains(mouse_resp_welcome3)) {
            _mouseXYs = mouse_resp_welcome3.getPos();
            mouse_resp_welcome3.x.push(_mouseXYs[0]);
            mouse_resp_welcome3.y.push(_mouseXYs[1]);
            mouse_resp_welcome3.leftButton.push(_mouseButtons[0]);
            mouse_resp_welcome3.midButton.push(_mouseButtons[1]);
            mouse_resp_welcome3.rightButton.push(_mouseButtons[2]);
            mouse_resp_welcome3.time.push(mouse_resp_welcome3.mouseClock.getTime());
            // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcome3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    
    // === Affichage du cercle de feedback ===
    if (showFeedback && feedbackClock.getTime() < feedbackDuration) {
      feedbackCircle.setPos(feedbackPos);
      feedbackCircle.setAutoDraw(true);
    } else {
      feedbackCircle.setAutoDraw(false);
      showFeedback = false;
    }
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function welcome3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome3' ---
    welcome3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_resp_welcome3.x) {  psychoJS.experiment.addData('mouse_resp_welcome3.x', mouse_resp_welcome3.x[0])};
    if (mouse_resp_welcome3.y) {  psychoJS.experiment.addData('mouse_resp_welcome3.y', mouse_resp_welcome3.y[0])};
    if (mouse_resp_welcome3.leftButton) {  psychoJS.experiment.addData('mouse_resp_welcome3.leftButton', mouse_resp_welcome3.leftButton[0])};
    if (mouse_resp_welcome3.midButton) {  psychoJS.experiment.addData('mouse_resp_welcome3.midButton', mouse_resp_welcome3.midButton[0])};
    if (mouse_resp_welcome3.rightButton) {  psychoJS.experiment.addData('mouse_resp_welcome3.rightButton', mouse_resp_welcome3.rightButton[0])};
    if (mouse_resp_welcome3.time) {  psychoJS.experiment.addData('mouse_resp_welcome3.time', mouse_resp_welcome3.time[0])};
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

// ======== N-BACK 3 TRIALS ========
var trials3;
function trials3LoopBegin(trials3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_n3.xlsx',
      seed: undefined, name: 'trials3'
    });
    psychoJS.experiment.addLoop(trials3); // add the loop to the experiment
    currentLoop = trials3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials3.forEach(function() {
      snapshot = trials3.getSnapshot();
    
      trials3LoopScheduler.add(importConditions(snapshot));
      trials3LoopScheduler.add(trialRoutineBegin(snapshot));
      trials3LoopScheduler.add(trialRoutineEachFrame());
      trials3LoopScheduler.add(trialRoutineEnd(snapshot));
      trials3LoopScheduler.add(trials3LoopEndIteration(trials3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function trials3LoopEnd() {
  // Calculate results for n3-back
  calculateResults(3);
  
  // terminate loop
  psychoJS.experiment.removeLoop(trials3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


// === Variables pour feedback visuel discret ===
let feedbackCircle = null;
let feedbackClock = new util.Clock();
let feedbackDuration = 0.1; // Durée d'affichage en secondes
let showFeedback = false;
let feedbackPos = [0, 0];
// ======== SHARED TRIAL ROUTINE ========
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.0);
    // update component parameters for each repeat
    letter.setText(thisletter);
    // setup some python lists for storing info about the mouse_resp
    // current position of the mouse:
    mouse_resp.x = [];
    mouse_resp.y = [];
    mouse_resp.leftButton = [];
    mouse_resp.midButton = [];
    mouse_resp.rightButton = [];
    mouse_resp.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(Fixation);
    trialComponents.push(letter);
    trialComponents.push(mouse_resp);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Fixation* updates
    if (t >= 0 && Fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Fixation.tStart = t;  // (not accounting for frame time here)
      Fixation.frameNStart = frameN;  // exact frame index
      
      Fixation.setAutoDraw(true);
    }

    frameRemains = 0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Fixation.setAutoDraw(false);
    }
    
    // *letter* updates
    if (t >= 1.0 && letter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter.tStart = t;  // (not accounting for frame time here)
      letter.frameNStart = frameN;  // exact frame index
      
      letter.setAutoDraw(true);
    }

    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (letter.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      letter.setAutoDraw(false);
    }
    // *mouse_resp* updates
    if (t >= 1.0 && mouse_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_resp.tStart = t;  // (not accounting for frame time here)
      mouse_resp.frameNStart = frameN;  // exact frame index
      
      mouse_resp.status = PsychoJS.Status.STARTED;
      mouse_resp.mouseClock.reset();
      prevButtonState = mouse_resp.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_resp.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_resp.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_resp.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_resp.getPos();
          mouse_resp.x.push(_mouseXYs[0]);
          mouse_resp.y.push(_mouseXYs[1]);
          mouse_resp.leftButton.push(_mouseButtons[0]);
          mouse_resp.midButton.push(_mouseButtons[1]);
          mouse_resp.rightButton.push(_mouseButtons[2]);
          mouse_resp.time.push(mouse_resp.mouseClock.getTime());
          // === Déclenchement du cercle de feedback ===
          feedbackPos = _mouseXYs;
          feedbackClock.reset();
          showFeedback = true;

        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    
    // === Affichage du cercle de feedback ===
    if (showFeedback && feedbackClock.getTime() < feedbackDuration) {
      feedbackCircle.setPos(feedbackPos);
      feedbackCircle.setAutoDraw(true);
    } else {
      feedbackCircle.setAutoDraw(false);
      showFeedback = false;
    }
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    
    // Store trial data in the appropriate level array
    let trialData = {
      'corrAns': corrAns,
      'thisletter': thisletter,
      'mouse_resp.x': mouse_resp.x,
      'mouse_resp.y': mouse_resp.y,
      'mouse_resp.leftButton': mouse_resp.leftButton,
      'mouse_resp.midButton': mouse_resp.midButton,
      'mouse_resp.rightButton': mouse_resp.rightButton,
      'mouse_resp.time': mouse_resp.time,
      'n_back_level': currentNBackLevel
    };
    
    if (currentNBackLevel === 1) {
      trials1Data.push(trialData);
    } else if (currentNBackLevel === 2) {
      trials2Data.push(trialData);
    } else if (currentNBackLevel === 3) {
      trials3Data.push(trialData);
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_resp.x', mouse_resp.x);
    psychoJS.experiment.addData('mouse_resp.y', mouse_resp.y);
    psychoJS.experiment.addData('mouse_resp.leftButton', mouse_resp.leftButton);
    psychoJS.experiment.addData('mouse_resp.midButton', mouse_resp.midButton);
    psychoJS.experiment.addData('mouse_resp.rightButton', mouse_resp.rightButton);
    psychoJS.experiment.addData('mouse_resp.time', mouse_resp.time);
    psychoJS.experiment.addData('n_back_level', currentNBackLevel);
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

// Variables to track trial data for each level
var trials1Data = [];
var trials2Data = [];
var trials3Data = [];

// ======== CALCULATE RESULTS FUNCTION ========
function calculateResults(nBackLevel) {
  let nCorr = 0;
  let nb_target = 0;
  let nInCorr = 0;
  let nb_no_target = 0;
  let rt_sum = 0;
  let nb_key = 0;
  
  // Get data for the specific n-back level
  let levelData = [];
  if (nBackLevel === 1) {
    levelData = trials1Data;
  } else if (nBackLevel === 2) {
    levelData = trials2Data;
  } else if (nBackLevel === 3) {
    levelData = trials3Data;
  }
  
  for (let eachResp = 0; eachResp < levelData.length; eachResp++) {
    if (levelData[eachResp]['corrAns'] == '1') {
      nb_target += 1;
      
      // Gérer les données de souris qui peuvent être des tableaux ou des chaînes
      let leftButtonData = levelData[eachResp]['mouse_resp.leftButton'];
      let timeData = levelData[eachResp]['mouse_resp.time'];
      
      // Vérifier si on a des clics (leftButton non vide et contient 1)
      let hasClick = false;
      if (Array.isArray(leftButtonData) && leftButtonData.length > 0) {
        hasClick = leftButtonData[0] == 1;
      } else if (typeof leftButtonData === 'string') {
        hasClick = leftButtonData.replace(/[\[\]]/g, '') == '1';
      }
      
      if (hasClick) {
        nCorr += 1;
        
        // Calculer le temps de réponse
        let responseTime = 0;
        if (Array.isArray(timeData) && timeData.length > 0) {
          responseTime = timeData[0];
        } else if (typeof timeData === 'string') {
          responseTime = Number(timeData.replace(/[\[\]]/g, ''));
        }
        
        rt_sum += responseTime;
        nb_key += 1;
      }
    }
    
    if (levelData[eachResp]['corrAns'] != 1) {
      nb_no_target += 1;
      
      // Vérifier les fausses alarmes
      let leftButtonData = levelData[eachResp]['mouse_resp.leftButton'];
      let hasFalseAlarm = false;
      
      if (Array.isArray(leftButtonData) && leftButtonData.length > 0) {
        hasFalseAlarm = leftButtonData[0] == 1;
      } else if (typeof leftButtonData === 'string') {
        hasFalseAlarm = leftButtonData == '[1]';
      }
      
      if (hasFalseAlarm) {
        nInCorr += 1;
      }
    }
  }
  
  let meanRT = nb_key > 0 ? Math.round((rt_sum / nb_key) * 1000) : 0;

  
  // Store results
  if (nBackLevel === 1) {
    results1Back = {nCorr, nInCorr, nb_target, nb_no_target, meanRT};
  } else if (nBackLevel === 2) {
    results2Back = {nCorr, nInCorr, nb_target, nb_no_target, meanRT};
  } else if (nBackLevel === 3) {
    results3Back = {nCorr, nInCorr, nb_target, nb_no_target, meanRT};
  }
}

// ======== FINAL RESULTS ========
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(60.000000);
    
    msg = `Résultats complets :

N1-BACK :
- Réponses correctes : ${results1Back.nCorr} sur ${results1Back.nb_target}
- Erreurs : ${results1Back.nInCorr} sur ${results1Back.nb_no_target}
- Temps de réponse moyen : ${results1Back.meanRT} ms

N2-BACK :
- Réponses correctes : ${results2Back.nCorr} sur ${results2Back.nb_target}
- Erreurs : ${results2Back.nInCorr} sur ${results2Back.nb_no_target}
- Temps de réponse moyen : ${results2Back.meanRT} ms

N3-BACK :
- Réponses correctes : ${results3Back.nCorr} sur ${results3Back.nb_target}
- Erreurs : ${results3Back.nInCorr} sur ${results3Back.nb_no_target}
- Temps de réponse moyen : ${results3Back.meanRT} ms`;
    
    // update component parameters for each repeat
    text_end.setText(msg);
    // setup some python lists for storing info about the mouse_resp_end
    // current position of the mouse:
    mouse_resp_end.x = [];
    mouse_resp_end.y = [];
    mouse_resp_end.leftButton = [];
    mouse_resp_end.midButton = [];
    mouse_resp_end.rightButton = [];
    mouse_resp_end.time = [];
    mouse_resp_end.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text_end);
    endComponents.push(mouse_resp_end);
    endComponents.push(text_end_quit);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end* updates
    if (t >= 0.0 && text_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end.tStart = t;  // (not accounting for frame time here)
      text_end.frameNStart = frameN;  // exact frame index
      
      text_end.setAutoDraw(true);
    }

    frameRemains = 0.0 + 60 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_end.setAutoDraw(false);
    }
    // *mouse_resp_end* updates
    if (t >= 0.0 && mouse_resp_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_resp_end.tStart = t;  // (not accounting for frame time here)
      mouse_resp_end.frameNStart = frameN;  // exact frame index
      
      mouse_resp_end.status = PsychoJS.Status.STARTED;
      mouse_resp_end.mouseClock.reset();
      prevButtonState = mouse_resp_end.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 60 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_resp_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_resp_end.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_resp_end.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_resp_end.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [text_end_quit]) {
            if (obj.contains(mouse_resp_end)) {
              gotValidClick = true;
              mouse_resp_end.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_resp_end.getPos();
          mouse_resp_end.x.push(_mouseXYs[0]);
          mouse_resp_end.y.push(_mouseXYs[1]);
          mouse_resp_end.leftButton.push(_mouseButtons[0]);
          mouse_resp_end.midButton.push(_mouseButtons[1]);
          mouse_resp_end.rightButton.push(_mouseButtons[2]);
          mouse_resp_end.time.push(mouse_resp_end.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *text_end_quit* updates
    if (t >= 0.0 && text_end_quit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end_quit.tStart = t;  // (not accounting for frame time here)
      text_end_quit.frameNStart = frameN;  // exact frame index
      
      text_end_quit.setAutoDraw(true);
    }

    frameRemains = 0.0 + 60 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_end_quit.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_end_quit.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    
    // === Affichage du cercle de feedback ===
    if (showFeedback && feedbackClock.getTime() < feedbackDuration) {
      feedbackCircle.setPos(feedbackPos);
      feedbackCircle.setAutoDraw(true);
    } else {
      feedbackCircle.setAutoDraw(false);
      showFeedback = false;
    }
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function exportResultsXLSX() {
  let wb = XLSX.utils.book_new();

  let summaryData = [
    ["Niveau", "Bonnes réponses", "Erreurs", "Nb cibles", "Nb non-cibles", "Temps moyen (ms)"],
    ["N1-Back", results1Back.nCorr, results1Back.nInCorr, results1Back.nb_target, results1Back.nb_no_target, results1Back.meanRT],
    ["N2-Back", results2Back.nCorr, results2Back.nInCorr, results2Back.nb_target, results2Back.nb_no_target, results2Back.meanRT],
    ["N3-Back", results3Back.nCorr, results3Back.nInCorr, results3Back.nb_target, results3Back.nb_no_target, results3Back.meanRT]
  ];

  let ws = XLSX.utils.aoa_to_sheet(summaryData);
  XLSX.utils.book_append_sheet(wb, ws, "Résultats_NBack");

  let wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

  let blob = new Blob([wbout], { type: "application/octet-stream" });
  let url = URL.createObjectURL(blob);

  let a = document.createElement("a");
  a.href = url;
  a.download = "resultats_n_back.xlsx";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function endRoutineEnd(snapshot) {
    exportSummaryToCSV();
  return async function () {
    //--- Ending Routine 'end' ---
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    exportResultsXLSX(); 
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_resp_end.x) {  psychoJS.experiment.addData('mouse_resp_end.x', mouse_resp_end.x[0])};
    if (mouse_resp_end.y) {  psychoJS.experiment.addData('mouse_resp_end.y', mouse_resp_end.y[0])};
    if (mouse_resp_end.leftButton) {  psychoJS.experiment.addData('mouse_resp_end.leftButton', mouse_resp_end.leftButton[0])};
    if (mouse_resp_end.midButton) {  psychoJS.experiment.addData('mouse_resp_end.midButton', mouse_resp_end.midButton[0])};
    if (mouse_resp_end.rightButton) {  psychoJS.experiment.addData('mouse_resp_end.rightButton', mouse_resp_end.rightButton[0])};
    if (mouse_resp_end.time) {  psychoJS.experiment.addData('mouse_resp_end.time', mouse_resp_end.time[0])};
    if (mouse_resp_end.clicked_name) {  psychoJS.experiment.addData('mouse_resp_end.clicked_name', mouse_resp_end.clicked_name[0])};
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}/****************************** 
 * N-Back Sequential Test *
 ******************************/

// store info about the experiment session:
let expName = 'n-back_sequential';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Current n-back level (will change during experiment)
let currentNBackLevel = 1;

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('#2C444B'),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);

// Image de montagne
flowScheduler.add(imageRoutineBegin());
flowScheduler.add(imageRoutineEachFrame());
flowScheduler.add(imageRoutineEnd());

// N-Back 1
flowScheduler.add(welcome1RoutineBegin());
flowScheduler.add(welcome1RoutineEachFrame());
flowScheduler.add(welcome1RoutineEnd());
const trials1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials1LoopBegin(trials1LoopScheduler));
flowScheduler.add(trials1LoopScheduler);
flowScheduler.add(trials1LoopEnd);

// N-Back 2
flowScheduler.add(welcome2RoutineBegin());
flowScheduler.add(welcome2RoutineEachFrame());
flowScheduler.add(welcome2RoutineEnd());
const trials2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials2LoopBegin(trials2LoopScheduler));
flowScheduler.add(trials2LoopScheduler);
flowScheduler.add(trials2LoopEnd);

// N-Back 3
flowScheduler.add(welcome3RoutineBegin());
flowScheduler.add(welcome3RoutineEachFrame());
flowScheduler.add(welcome3RoutineEnd());
const trials3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials3LoopBegin(trials3LoopScheduler));
flowScheduler.add(trials3LoopScheduler);
flowScheduler.add(trials3LoopEnd);

// Final results
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'montagne.png', 'path': 'montagne.png'},
    {'name': 'conditions_n1.xlsx', 'path': 'conditions_n1.xlsx'},
    {'name': 'conditions_n2.xlsx', 'path': 'conditions_n2.xlsx'},
    {'name': 'conditions_n3.xlsx', 'path': 'conditions_n3.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.5';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  return Scheduler.Event.NEXT;
}

// Variables for components
var welcome1Clock, welcome2Clock, welcome3Clock;
var text_welcome1, text_welcome2, text_welcome3;
var mouse_resp_welcome1, mouse_resp_welcome2, mouse_resp_welcome3;
var button_start1, button_start2, button_start3;
var button_start1_text, button_start2_text, button_start3_text;
var trialClock;
var Fixation;
var letter;
var mouse_resp;
var endClock;
var msg;
var text_end;
var mouse_resp_end;
var text_end_quit;
var globalClock;
var routineTimer;

// Results storage for each n-back level
var results1Back = {nCorr: 0, nInCorr: 0, nb_target: 0, nb_no_target: 0, meanRT: 0};
var results2Back = {nCorr: 0, nInCorr: 0, nb_target: 0, nb_no_target: 0, meanRT: 0};
var results3Back = {nCorr: 0, nInCorr: 0, nb_target: 0, nb_no_target: 0, meanRT: 0};

// Variables pour l'image de montagne
var imageClock;
var image_montagne;

// ======== IMAGE MONTAGNE ========
var imageComponents;
function imageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    
    t = 0;
    imageClock.reset();
    frameN = -1;
    continueRoutine = true;
    routineTimer.add(120.000000); // 2 minutes
    
    imageComponents = [];
    imageComponents.push(image_montagne);
    
    for (const thisComponent of imageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function imageRoutineEachFrame() {
  return async function () {
    t = imageClock.getTime();
    frameN = frameN + 1;
    
    if (t >= 0.0 && image_montagne.status === PsychoJS.Status.NOT_STARTED) {
      image_montagne.tStart = t;
      image_montagne.frameNStart = frameN;
      image_montagne.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;
    if (image_montagne.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_montagne.setAutoDraw(false);
    }
    
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    if (!continueRoutine) {
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;
    for (const thisComponent of imageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function imageRoutineEnd(snapshot) {
  return async function () {
    for (const thisComponent of imageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

async function experimentInit() {
  // Initialize components for Routine "welcome1"
  welcome1Clock = new util.Clock();
  text_welcome1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_welcome1',
    text: 'Vous allez voir des lettres apparaître successivement, une par une, au centre de l\'écran. Votre objectif est de vérifier, à chaque nouvelle lettre, si elle est identique à celle qui a été présentée juste avant.\n\nPar exemple, pour la séquence suivante :\n S – A – B – B – M \n\nVous devez faire un clic gauche lorsqu\'une lettre est identique à celle qui précède immédiatement : ici, sur le deuxième B.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });

  button_start1 = new visual.Rect({
    win: psychoJS.window,
    name: 'button_start1',
    width: 0.3, height: 0.1,
    pos: [0, -0.4],
    fillColor: new util.Color('#6CC1B8'),
    lineColor: new util.Color('white'),
    lineWidth: 3,
    opacity: 1
  });

  button_start1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'button_start1_text',
    text: 'START',
    font: 'Open Sans',
    pos: [0, -0.4], height: 0.05,
    color: new util.Color('black'),
    bold: true
  });

  mouse_resp_welcome1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_resp_welcome1.mouseClock = new util.Clock();

  // Initialize components for image routine  
  imageClock = new util.Clock();
  image_montagne = new visual.ImageStim({
    win: psychoJS.window,
    name: 'image_montagne',
    image: 'montagne.png',
    mask: undefined,
    ori: 0.0, pos: [0, 0], size: [2.0, 2.0],
    color: new util.Color([1, 1, 1]), opacity: undefined,
    flipHoriz: false, flipVert: false,
    texRes: 512.0, interpolate: false, depth: 0.0
  });
  
  // Initialize components for Routine "welcome2"
  welcome2Clock = new util.Clock();
  text_welcome2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_welcome2',
    text: 'Vous allez voir des lettres apparaître successivement, une par une, au centre de l\'écran. Votre objectif est de vérifier, à chaque nouvelle lettre, si elle est identique à celle présentée deux lettres auparavant.\n\nPar exemple, pour la séquence suivante :\n S – B – M – B – A \n\nVous devez faire un clic gauche lorsqu\'une lettre est identique à celle vue deux lettres plus tôt (ici, le deuxième B).',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_start2 = new visual.Rect({
    win: psychoJS.window,
    name: 'button_start2',
    width: 0.3, height: 0.1,
    pos: [0, -0.4],
    fillColor: new util.Color('#6CC1B8'),
    lineColor: new util.Color('white'),
    lineWidth: 3,
    opacity: 1
  });

  button_start2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'button_start2_text',
    text: 'START',
    font: 'Open Sans',
    pos: [0, -0.4], height: 0.05,
    color: new util.Color('black'),
    bold: true
  });
  
  mouse_resp_welcome2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_resp_welcome2.mouseClock = new util.Clock();

  // Initialize components for Routine "welcome3"
  welcome3Clock = new util.Clock();
  text_welcome3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_welcome3',
    text: 'Vous allez voir des lettres apparaître successivement, une par une, au centre de l\'écran. Votre objectif est de vérifier, à chaque nouvelle lettre, si elle est identique à celle présentée trois lettres auparavant.\n\nPar exemple, pour la séquence suivante :\n S – B – M – S – T \n\nVous devez faire un clic gauche lorsqu\'une lettre est identique à celle vue trois lettres plus tôt (ici, le deuxième S).',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_start3 = new visual.Rect({
    win: psychoJS.window,
    name: 'button_start3',
    width: 0.3, height: 0.1,
    pos: [0, -0.4],
    fillColor: new util.Color('#6CC1B8'),
    lineColor: new util.Color('white'),
    lineWidth: 3,
    opacity: 1
  });

  button_start3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'button_start3_text',
    text: 'START',
    font: 'Open Sans',
    pos: [0, -0.4], height: 0.05,
    color: new util.Color('black'),
    bold: true
  });
  
  mouse_resp_welcome3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_resp_welcome3.mouseClock = new util.Clock();
  
  
  // === Initialisation du cercle de feedback ===
  feedbackCircle = new visual.Polygon ({
    win: psychoJS.window,
    name: 'feedbackCircle',
    edges: 32,
    radius: 0.02, // Taille du cercle
    lineColor: new util.Color('white'), // Couleur du contour
    fillColor: new util.Color('white'), // Couleur de remplissage
    opacity: 0.2, // Transparence
    lineWidth: 1,
    pos: [0, 0],
    ori: 0.0
  });
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  Fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'Fixation',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.10,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  letter = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse_resp = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_resp.mouseClock = new util.Clock();
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  msg = "dodo";
  
  text_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse_resp_end = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_resp_end.mouseClock = new util.Clock();
  text_end_quit = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end_quit',
    text: 'Cliquer pour quitter.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, -0.5], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var continueRoutine;
var gotValidClick;
var welcome1Components;

// ======== N-BACK 1 WELCOME ========
function welcome1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    currentNBackLevel = 1;
    
    //--- Prepare to start Routine 'welcome1' ---
    t = 0;
    welcome1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1800.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_resp_welcome1
    // current position of the mouse:
    mouse_resp_welcome1.x = [];
    mouse_resp_welcome1.y = [];
    mouse_resp_welcome1.leftButton = [];
    mouse_resp_welcome1.midButton = [];
    mouse_resp_welcome1.rightButton = [];
    mouse_resp_welcome1.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    welcome1Components = [];
    welcome1Components.push(text_welcome1);
    welcome1Components.push(button_start1);
    welcome1Components.push(button_start1_text);
    welcome1Components.push(mouse_resp_welcome1);
    
    welcome1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

var frameRemains;
var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function welcome1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome1' ---
    // get current time
    t = welcome1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_welcome1* updates
    if (t >= 0.0 && text_welcome1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_welcome1.tStart = t;  // (not accounting for frame time here)
      text_welcome1.frameNStart = frameN;  // exact frame index
      
      text_welcome1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1800 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_welcome1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_welcome1.setAutoDraw(false);
    }
    
    // *button_start1* updates
    if (t >= 0.0 && button_start1.status === PsychoJS.Status.NOT_STARTED) {
      button_start1.tStart = t;
      button_start1.frameNStart = frameN;
      button_start1.setAutoDraw(true);
    }
    frameRemains = 0.0 + 1800 - psychoJS.window.monitorFramePeriod * 0.75;
    if (button_start1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button_start1.setAutoDraw(false);
    }

    // *button_start1_text* updates  
    if (t >= 0.0 && button_start1_text.status === PsychoJS.Status.NOT_STARTED) {
      button_start1_text.tStart = t;
      button_start1_text.frameNStart = frameN;
      button_start1_text.setAutoDraw(true);
    }
    frameRemains = 0.0 + 1800 - psychoJS.window.monitorFramePeriod * 0.75;
    if (button_start1_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button_start1_text.setAutoDraw(false);
    }
    
    // *mouse_resp_welcome1* updates
    if (t >= 0.0 && mouse_resp_welcome1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_resp_welcome1.tStart = t;  // (not accounting for frame time here)
      mouse_resp_welcome1.frameNStart = frameN;  // exact frame index
      
      mouse_resp_welcome1.status = PsychoJS.Status.STARTED;
      mouse_resp_welcome1.mouseClock.reset();
      prevButtonState = mouse_resp_welcome1.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 1800 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_resp_welcome1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_resp_welcome1.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_resp_welcome1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_resp_welcome1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // Vérifier si le clic est sur le bouton START
          if (button_start1.contains(mouse_resp_welcome1)) {
            _mouseXYs = mouse_resp_welcome1.getPos();
            mouse_resp_welcome1.x.push(_mouseXYs[0]);
            mouse_resp_welcome1.y.push(_mouseXYs[1]);
            mouse_resp_welcome1.leftButton.push(_mouseButtons[0]);
            mouse_resp_welcome1.midButton.push(_mouseButtons[1]);
            mouse_resp_welcome1.rightButton.push(_mouseButtons[2]);
            mouse_resp_welcome1.time.push(mouse_resp_welcome1.mouseClock.getTime());
            // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcome1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    
    // === Affichage du cercle de feedback ===
    if (showFeedback && feedbackClock.getTime() < feedbackDuration) {
      feedbackCircle.setPos(feedbackPos);
      feedbackCircle.setAutoDraw(true);
    } else {
      feedbackCircle.setAutoDraw(false);
      showFeedback = false;
    }
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function welcome1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome1' ---
    welcome1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_resp_welcome1.x) {  psychoJS.experiment.addData('mouse_resp_welcome1.x', mouse_resp_welcome1.x[0])};
    if (mouse_resp_welcome1.y) {  psychoJS.experiment.addData('mouse_resp_welcome1.y', mouse_resp_welcome1.y[0])};
    if (mouse_resp_welcome1.leftButton) {  psychoJS.experiment.addData('mouse_resp_welcome1.leftButton', mouse_resp_welcome1.leftButton[0])};
    if (mouse_resp_welcome1.midButton) {  psychoJS.experiment.addData('mouse_resp_welcome1.midButton', mouse_resp_welcome1.midButton[0])};
    if (mouse_resp_welcome1.rightButton) {  psychoJS.experiment.addData('mouse_resp_welcome1.rightButton', mouse_resp_welcome1.rightButton[0])};
    if (mouse_resp_welcome1.time) {  psychoJS.experiment.addData('mouse_resp_welcome1.time', mouse_resp_welcome1.time[0])};
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

// ======== N-BACK 1 TRIALS ========
var trials1;
function trials1LoopBegin(trials1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_n1.xlsx',
      seed: undefined, name: 'trials1'
    });
    psychoJS.experiment.addLoop(trials1); // add the loop to the experiment
    currentLoop = trials1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials1.forEach(function() {
      snapshot = trials1.getSnapshot();
    
      trials1LoopScheduler.add(importConditions(snapshot));
      trials1LoopScheduler.add(trialRoutineBegin(snapshot));
      trials1LoopScheduler.add(trialRoutineEachFrame());
      trials1LoopScheduler.add(trialRoutineEnd(snapshot));
      trials1LoopScheduler.add(trials1LoopEndIteration(trials1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function trials1LoopEnd() {
  // Calculate results for n1-back
  calculateResults(1);
  
  // terminate loop
  psychoJS.experiment.removeLoop(trials1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

// ======== N-BACK 2 WELCOME ========
var welcome2Components;
function welcome2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    currentNBackLevel = 2;
    
    //--- Prepare to start Routine 'welcome2' ---
    t = 0;
    welcome2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1800.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_resp_welcome2
    // current position of the mouse:
    mouse_resp_welcome2.x = [];
    mouse_resp_welcome2.y = [];
    mouse_resp_welcome2.leftButton = [];
    mouse_resp_welcome2.midButton = [];
    mouse_resp_welcome2.rightButton = [];
    mouse_resp_welcome2.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    welcome2Components = [];
    welcome2Components.push(text_welcome2);
    welcome2Components.push(button_start2);
    welcome2Components.push(button_start2_text);
    welcome2Components.push(mouse_resp_welcome2);
    
    welcome2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function welcome2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome2' ---
    // get current time
    t = welcome2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_welcome2* updates
    if (t >= 0.0 && text_welcome2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_welcome2.tStart = t;  // (not accounting for frame time here)
      text_welcome2.frameNStart = frameN;  // exact frame index
      
      text_welcome2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1800 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_welcome2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_welcome2.setAutoDraw(false);
    }
    
    // *button_start2* updates
    if (t >= 0.0 && button_start2.status === PsychoJS.Status.NOT_STARTED) {
      button_start2.tStart = t;
      button_start2.frameNStart = frameN;
      button_start2.setAutoDraw(true);
    }
    frameRemains = 0.0 + 1800 - psychoJS.window.monitorFramePeriod * 0.75;
    if (button_start2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button_start2.setAutoDraw(false);
    }

    // *button_start2_text* updates  
    if (t >= 0.0 && button_start2_text.status === PsychoJS.Status.NOT_STARTED) {
      button_start2_text.tStart = t;
      button_start2_text.frameNStart = frameN;
      button_start2_text.setAutoDraw(true);
    }
    frameRemains = 0.0 + 1800 - psychoJS.window.monitorFramePeriod * 0.75;
    if (button_start2_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button_start2_text.setAutoDraw(false);
    }
    
    // *mouse_resp_welcome2* updates
    if (t >= 0.0 && mouse_resp_welcome2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_resp_welcome2.tStart = t;  // (not accounting for frame time here)
      mouse_resp_welcome2.frameNStart = frameN;  // exact frame index
      
      mouse_resp_welcome2.status = PsychoJS.Status.STARTED;
      mouse_resp_welcome2.mouseClock.reset();
      prevButtonState = mouse_resp_welcome2.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 1800 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_resp_welcome2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_resp_welcome2.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_resp_welcome2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_resp_welcome2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // Vérifier si le clic est sur le bouton START
          if (button_start2.contains(mouse_resp_welcome2)) {
            _mouseXYs = mouse_resp_welcome2.getPos();
            mouse_resp_welcome2.x.push(_mouseXYs[0]);
            mouse_resp_welcome2.y.push(_mouseXYs[1]);
            mouse_resp_welcome2.leftButton.push(_mouseButtons[0]);
            mouse_resp_welcome2.midButton.push(_mouseButtons[1]);
            mouse_resp_welcome2.rightButton.push(_mouseButtons[2]);
            mouse_resp_welcome2.time.push(mouse_resp_welcome2.mouseClock.getTime());
            // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcome2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    
    // === Affichage du cercle de feedback ===
    if (showFeedback && feedbackClock.getTime() < feedbackDuration) {
      feedbackCircle.setPos(feedbackPos);
      feedbackCircle.setAutoDraw(true);
    } else {
      feedbackCircle.setAutoDraw(false);
      showFeedback = false;
    }
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exportSummaryToCSV() {
  const results = [
    { level: '1-Back', ...results1Back },
    { level: '2-Back', ...results2Back },
    { level: '3-Back', ...results3Back }
  ];

  let csvContent = 'data:text/csv;charset=utf-8,';
  csvContent += 'N-Back Level,Correct Responses,Errors,Mean RT (ms)\n';

  results.forEach(res => {
    const validRTs = res.RTs && res.RTs.length > 0 ? res.RTs : [];
    const meanRT = validRTs.length > 0
      ? (validRTs.reduce((sum, val) => sum + val, 0) / validRTs.length).toFixed(2)
      : '0';
    csvContent += `${res.level},${res.nCorr},${res.nInCorr},${meanRT}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `nback_summary_${expInfo["participant"]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
