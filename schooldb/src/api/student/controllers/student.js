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

    let resCode;
    if (result.length) {
      result.forEach((user) => {
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

const getUser = async (userDetails) => {
  try {
    const knex = require("knex")(strapi.db.config.connection);
    const result = await knex
      .select("id", "name", "surname")
      .from(`${userDetails.userType}s`)
      .where("id", "=", String(userDetails.id));

    console.log({ sqlResult: result });

    return { ...result[0], responseMessage: "Accepted", statusCode: 202 };
  } catch (error) {}
};

module.exports = createCoreController("api::student.student", ({ strapi }) => ({
  // Method 1: Creating an entirely custom action
  async index(ctx) {
    try {
      let tmp = ctx.request.body;

      console.log({ requestBody: tmp });
      let resCode;
      if (typeof tmp === "string") {
        resCode = await validateLogin(JSON.parse(tmp), strapi);
      } else if (typeof tmp === "object") {
        resCode = await validateLogin(tmp, strapi);
      }
      ctx.response.status = resCode;
      // if resCode === 202, call function to get that user's necessary details
      console.log({ ctxBody: ctx.body });
      if (typeof tmp === "string") {
        if (resCode === 202) {
          ctx.body = await getUser(JSON.parse(tmp));
        } else if (resCode === 401) {
          ctx.body = { responseMessage: "Unauthorized" };
        }
      } else if (typeof tmp === "object") {
        if (resCode == 202) {
          ctx.body = await getUser(tmp);
        } else if (resCode === 401) {
          ctx.body = { responseMessage: "Unauthorized" };
        }
      }

      console.log({ ctxBody: ctx.body });

      //testing to change the response body block
      //   ctx.body = { statusCode: resCode, responseMessage: ctx.message };
      console.log({ res: resCode, message: ctx.message });
    } catch (err) {
      ctx.body = err;
    }
  },
  async teachers(ctx) {
    try {
      let tmp = ctx.request.body;
      console.log({ temppp: tmp });
      ctx.response.status = 418;
    } catch (error) {}
  },
}));
