/******************************* 
 * Detection_Alarme_Click Test *
 *******************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'detection_alarme_click';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
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
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
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
    {'name': 'orange.png', 'path': 'orange.png'},
    {'name': 'red.png', 'path': 'red.png'},
    {'name': 'green.png', 'path': 'green.png'},
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'}
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


var welcomeClock;
var text_welcome;
var mouse_resp_welcome;
var trialClock;
var image;
var mouse_resp;
var endClock;
var text_end;
var key_resp_end;
var msg;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  text_welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_welcome',
    text: "Bienvenue dans la tâche de détection d'alarme.\n\n- quand l'alarme est orange : regarder l'écran le plus vite possible\n\n- quand l'alarme est rouge : appuyer sur la gachette gauche le plus vite possible\n\nAppuyer sur la gachette gauche pour commencer. ",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_resp_welcome = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_resp_welcome.mouseClock = new util.Clock();
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  mouse_resp = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_resp.mouseClock = new util.Clock();
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code
  msg = "dodo";
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_resp_welcome
    // current position of the mouse:
    mouse_resp_welcome.x = [];
    mouse_resp_welcome.y = [];
    mouse_resp_welcome.leftButton = [];
    mouse_resp_welcome.midButton = [];
    mouse_resp_welcome.rightButton = [];
    mouse_resp_welcome.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(text_welcome);
    welcomeComponents.push(mouse_resp_welcome);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_welcome* updates
    if (t >= 0.0 && text_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_welcome.tStart = t;  // (not accounting for frame time here)
      text_welcome.frameNStart = frameN;  // exact frame index
      
      text_welcome.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_welcome.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_welcome.setAutoDraw(false);
    }
    // *mouse_resp_welcome* updates
    if (t >= 0 && mouse_resp_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_resp_welcome.tStart = t;  // (not accounting for frame time here)
      mouse_resp_welcome.frameNStart = frameN;  // exact frame index
      
      mouse_resp_welcome.status = PsychoJS.Status.STARTED;
      mouse_resp_welcome.mouseClock.reset();
      prevButtonState = mouse_resp_welcome.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_resp_welcome.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_resp_welcome.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_resp_welcome.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_resp_welcome.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_resp_welcome.getPos();
          mouse_resp_welcome.x.push(_mouseXYs[0]);
          mouse_resp_welcome.y.push(_mouseXYs[1]);
          mouse_resp_welcome.leftButton.push(_mouseButtons[0]);
          mouse_resp_welcome.midButton.push(_mouseButtons[1]);
          mouse_resp_welcome.rightButton.push(_mouseButtons[2]);
          mouse_resp_welcome.time.push(mouse_resp_welcome.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
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
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_resp_welcome.x) {  psychoJS.experiment.addData('mouse_resp_welcome.x', mouse_resp_welcome.x[0])};
    if (mouse_resp_welcome.y) {  psychoJS.experiment.addData('mouse_resp_welcome.y', mouse_resp_welcome.y[0])};
    if (mouse_resp_welcome.leftButton) {  psychoJS.experiment.addData('mouse_resp_welcome.leftButton', mouse_resp_welcome.leftButton[0])};
    if (mouse_resp_welcome.midButton) {  psychoJS.experiment.addData('mouse_resp_welcome.midButton', mouse_resp_welcome.midButton[0])};
    if (mouse_resp_welcome.rightButton) {  psychoJS.experiment.addData('mouse_resp_welcome.rightButton', mouse_resp_welcome.rightButton[0])};
    if (mouse_resp_welcome.time) {  psychoJS.experiment.addData('mouse_resp_welcome.time', mouse_resp_welcome.time[0])};
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
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


var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
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
    trialComponents.push(image);
    trialComponents.push(mouse_resp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    frameRemains = 0.0 + thisduration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    if (image.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image.setImage(thiscolor, false);
    }
    // *mouse_resp* updates
    if (t >= 0.0 && mouse_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_resp.tStart = t;  // (not accounting for frame time here)
      mouse_resp.frameNStart = frameN;  // exact frame index
      
      mouse_resp.status = PsychoJS.Status.STARTED;
      mouse_resp.mouseClock.reset();
      prevButtonState = mouse_resp.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
          // abort routine on response
          continueRoutine = false;
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
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_resp.x) {  psychoJS.experiment.addData('mouse_resp.x', mouse_resp.x[0])};
    if (mouse_resp.y) {  psychoJS.experiment.addData('mouse_resp.y', mouse_resp.y[0])};
    if (mouse_resp.leftButton) {  psychoJS.experiment.addData('mouse_resp.leftButton', mouse_resp.leftButton[0])};
    if (mouse_resp.midButton) {  psychoJS.experiment.addData('mouse_resp.midButton', mouse_resp.midButton[0])};
    if (mouse_resp.rightButton) {  psychoJS.experiment.addData('mouse_resp.rightButton', mouse_resp.rightButton[0])};
    if (mouse_resp.time) {  psychoJS.experiment.addData('mouse_resp.time', mouse_resp.time[0])};
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_end_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.000000);
    // update component parameters for each repeat
    text_end.setText(msg);
    key_resp_end.keys = undefined;
    key_resp_end.rt = undefined;
    _key_resp_end_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text_end);
    endComponents.push(key_resp_end);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_end.setAutoDraw(false);
    }
    
    // *key_resp_end* updates
    if (t >= 0.0 && key_resp_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_end.tStart = t;  // (not accounting for frame time here)
      key_resp_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_end.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end.clearEvents(); });
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_end.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_end.getKeys({keyList: ['n'], waitRelease: false});
      _key_resp_end_allKeys = _key_resp_end_allKeys.concat(theseKeys);
      if (_key_resp_end_allKeys.length > 0) {
        key_resp_end.keys = _key_resp_end_allKeys[_key_resp_end_allKeys.length - 1].name;  // just the last key pressed
        key_resp_end.rt = _key_resp_end_allKeys[_key_resp_end_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
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
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_end.corr, level);
    }
    psychoJS.experiment.addData('key_resp_end.keys', key_resp_end.keys);
    if (typeof key_resp_end.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_end.rt', key_resp_end.rt);
        routineTimer.reset();
        }
    
    key_resp_end.stop();
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
}
