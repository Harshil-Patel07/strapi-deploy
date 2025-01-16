'use strict';

/**
 * publishing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::publishing.publishing');
