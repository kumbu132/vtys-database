"use strict";
/**
 *  student controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const validateLogin = async (userDetails, strapi, ctx) => {
  try {
    const knex = require("knex")(strapi.db.config.connection);
    const result = await knex
      .select("id", "name", "surname", "password")
      .from(`${userDetails.userType}s`)
      .where("id", "=", String(userDetails.id));

    console.log({ sqlResult: result });

    if (!result.length) {
      return 401;
    } else {
      result.forEach((user) => {
        if (user.password === userDetails.password) {
          return 202;
        }
      });
    }

    return 401;
  } catch (err) {
    console.log(err);
  }
};

module.exports = createCoreController("api::student.student", ({ strapi }) => ({
  // Method 1: Creating an entirely custom action
  async index(ctx) {
    try {
      //   console.log({ query: strapi.query('student').count({ name_contains: 'cem' }));
      let tmp = ctx.request.body;
      //   console.log({ strapii: strapi.db.config });
      let resCode = await validateLogin(tmp, strapi, ctx);
      //   let abs = JSON.parse(ctx.request.body);
      //console.log({ a: resCode });
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
