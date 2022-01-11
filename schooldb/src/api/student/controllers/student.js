"use strict";

/**
 *  student controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const validateLogin = (userDetails) => {
  // use KN
  return 401;
};

module.exports = createCoreController("api::student.student", ({ strapi }) => ({
  // Method 1: Creating an entirely custom action
  async index(ctx) {
    try {
      let tmp = ctx.request.body;

      let resCode = validateLogin(tmp);
      if (resCode == 202) {
        //Accepted
        ctx.response.status = 202;
      } else if (resCode == 401) {
        //Unauthorised
        ctx.response.status = 401;
      }

      console.log({ res: resCode });
    } catch (err) {
      ctx.body = err;
    }
  },
}));
