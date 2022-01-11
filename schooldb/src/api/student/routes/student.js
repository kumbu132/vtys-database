"use strict";

/**
 * student router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/hello",
      handler: "student.exampleAction",
    },
  ],
};
