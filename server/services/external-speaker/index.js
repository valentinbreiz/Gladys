const logger = require('../../utils/logger');
const ExternalSpeakerHandler = require('./lib/speaker');

module.exports = function ExternalSpeakerService(gladys) {
  // here is an example module
  const axios = require('axios');

  // @ts-ignore: TS doesn't know about the axios.create function
  const client = axios.create({
    timeout: 1000,
  });
  const device = new ExternalSpeakerHandler(gladys, client);

  /**
   * @public
   * @description This function starts the ExampleService service.
   * @example
   * gladys.services.example.start();
   */
  async function start() {
    logger.info('Starting external speaker service');
  }

  /**
   * @public
   * @description This function stops the ExampleService service.
   * @example
   * gladys.services.example.stop();
   */
  async function stop() {
    logger.info('Stopping external speaker service');
  }

  return Object.freeze({
    start,
    stop,
    speaker: device,
    device,
  });
};
