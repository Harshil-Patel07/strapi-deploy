'use strict';

/**
 * insight-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::insight-blog.insight-blog');
