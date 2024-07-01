
"use strict";

let RegisterValues = require('./RegisterValues.js')
let MotorGains = require('./MotorGains.js')
let TorqueEnable = require('./TorqueEnable.js')
let Reboot = require('./Reboot.js')
let RobotInfo = require('./RobotInfo.js')
let OperatingModes = require('./OperatingModes.js')

module.exports = {
  RegisterValues: RegisterValues,
  MotorGains: MotorGains,
  TorqueEnable: TorqueEnable,
  Reboot: Reboot,
  RobotInfo: RobotInfo,
  OperatingModes: OperatingModes,
};
