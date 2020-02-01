const router = require("express").Router();

const {
  getAll,
  createNew,
  getIndividual,
  deleteIndividual,
  updateIndividual
} = require("./controllers.jsx");

router
  .route("/")
  .get(getAll)
  .post(createNew);

router
  .route("/:id")
  .get(getIndividual)
  .delete(deleteIndividual)
  .put(updateIndividual);

module.exports = router;
