'use strict';

/**
 * publishing router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::publishing.publishing');
