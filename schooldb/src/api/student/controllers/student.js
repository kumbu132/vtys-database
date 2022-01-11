"use strict";
/**
 *  student controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const validateLogin = async (userDetails, strapi) => {
  try {
    const knex = require("knex")(strapi.db.config.connection);
    const result = await knex
      .select("id", "name", "surname", "password")
      .from(`${userDetails.userType}s`)
      .where("id", "=", String(userDetails.id));

    console.log({ sqlResult: result });
    let resCode;
    if (result.length) {
      result.forEach((user) => {
        console.log({ userFromResultsDeets: userDetails });
        if (user.password === userDetails.password) {
          resCode = 202;
        } else {
          resCode = 401;
        }
      });
    } else {
      resCode = 401;
    }

    return resCode;
  } catch (err) {
    console.log(err);
  }
};

module.exports = createCoreController("api::student.student", ({ strapi }) => ({
  // Method 1: Creating an entirely custom action
  async index(ctx) {
    try {
      let tmp = ctx.request.body;
      let resCode = await validateLogin(JSON.parse(tmp), strapi);
      ctx.response.status = resCode;
      console.log({ res: resCode });
    } catch (err) {
      ctx.body = err;
    }
  },
}));
