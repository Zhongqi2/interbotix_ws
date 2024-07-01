
"use strict";

let HexJoy = require('./HexJoy.js');
let LocobotJoy = require('./LocobotJoy.js');
let JointSingleCommand = require('./JointSingleCommand.js');
let JointGroupCommand = require('./JointGroupCommand.js');
let JointTemps = require('./JointTemps.js');
let TurretJoy = require('./TurretJoy.js');
let ArmJoy = require('./ArmJoy.js');
let JointTrajectoryCommand = require('./JointTrajectoryCommand.js');

module.exports = {
  HexJoy: HexJoy,
  LocobotJoy: LocobotJoy,
  JointSingleCommand: JointSingleCommand,
  JointGroupCommand: JointGroupCommand,
  JointTemps: JointTemps,
  TurretJoy: TurretJoy,
  ArmJoy: ArmJoy,
  JointTrajectoryCommand: JointTrajectoryCommand,
};
