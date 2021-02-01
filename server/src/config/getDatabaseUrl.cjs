const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/node-express-objection-react-boilerplate_development",
      test: "postgres://postgres:postgres@localhost:5432/node-express-objection-react-boilerplate_test",
      e2e: "postgres://postgres:postgres@localhost:5432/node-express-objection-react-boilerplate_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
