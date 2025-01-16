'use strict';

/**
 * our-conference service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-conference.our-conference');
