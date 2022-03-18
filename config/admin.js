module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9ec8a7a26fd1fabb51c8634a7045384b'),
  },
});
