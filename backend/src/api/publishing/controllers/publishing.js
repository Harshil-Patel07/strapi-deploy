'use strict';

/**
 * publishing controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::publishing.publishing');
