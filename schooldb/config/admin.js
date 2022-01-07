module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5b14d6f175ee99a0e40568800ad79b72'),
  },
});
