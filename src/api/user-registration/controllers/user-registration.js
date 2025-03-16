'use strict';

/**
 * user-registration controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-registration.user-registration');
