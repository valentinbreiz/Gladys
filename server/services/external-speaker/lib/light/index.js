const turnOn = require('./light.turnOn');
const turnOff = require('./light.turnOff');
const getState = require('./light.getState');
const setValue = require('./light.setValue');

/**
 * @description Add ability to control a light.
 * @param {object} gladys - Gladys instance.
 * @param {object} client - Third-part client object.
 * @example
 * const ExternalSpeakerHandler = new ExternalSpeakerHandler(gladys, client);
 */
const ExternalSpeakerHandler = function ExternalSpeakerHandler(gladys, client) {
  this.client = client;
  this.gladys = gladys;
};

ExternalSpeakerHandler.prototype.turnOn = turnOn;
ExternalSpeakerHandler.prototype.turnOff = turnOff;
ExternalSpeakerHandler.prototype.getState = getState;
ExternalSpeakerHandler.prototype.setValue = setValue;

module.exports = ExternalSpeakerHandler;
