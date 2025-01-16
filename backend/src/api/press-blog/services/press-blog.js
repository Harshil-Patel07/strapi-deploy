'use strict';

/**
 * press-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::press-blog.press-blog');
