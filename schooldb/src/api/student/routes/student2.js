"use strict";

/**
 * student router.
 */

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/login",
      handler: "student.index",
    },
  ],
};
