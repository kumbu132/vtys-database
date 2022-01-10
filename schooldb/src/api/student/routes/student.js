"use strict";

/**
 * student router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

// module.exports = createCoreRouter("api::student.student", );
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/hello",
      handler: "student.exampleAction",
    },
  ],
};
