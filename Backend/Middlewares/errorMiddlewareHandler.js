const errorMiddlewareHandler = (err, req, res, next) => {
  const errorStatusCode = res.statuscode === 200 ? 500 : res.statuscode;
  res.status(errorStatusCode);
  res.json({
    message: err.message,
  });
};
module.exports = { errorMiddlewareHandler };
