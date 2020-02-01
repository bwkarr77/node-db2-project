const controller = require("../utils/db-config.js");
const { validAddition } = require("./carsMiddle.jsx");
console.log("controllers");
//
//  KEEPING CONTROLLER METHODS GENERIC TO MAKE IT REUSABLE FOR ALL
//

// ================================
//            GET, ALL
// ================================
// @desc    GET all cars
// @route   GET to /api/cars
exports.getAll = (req, res, next) => {
  // const { limit, sortby, sortdir } = req.query;
  console.log("getAll", req.params);
  controller("cars")
    // .find()
    // .limit(limit)
    // .orderBy(sortby, sortdir) //orders the returns in ascending order
    .then(allReturns => {
      res
        .status(200) //success
        .json(allReturns);
    })
    .catch(e => {
      console.log("getAll error: ", e);
      res
        .status(500) //server error
        .json({ error: "error in getAllIndividual" });
    });
};
// ================================
//            GET, ID
// ================================
// @desc    GET cars with :id
// @route   GET to /api/cars/:id
exports.getIndividual = (req, res, next) => {
  console.log("getIndividual");
  controller("cars")
    // .get()
    .where({ id: req.params.id })
    .first()
    .then(individual => {
      console.log("getIndividual", individual);
      if (individual) {
        res
          .status(200) //success
          .json(individual);
      } else {
        error400("Account not found");
      }
    })
    .catch(e => {
      res
        .status(500) //server error
        .json({ error: "error in getIndividual" });
    });
};

// ================================
//            POST
// ================================
// @desc    POST/CREATE new car
// @route   POST to /api/cars
exports.createNew = (req, res, next) => {
  if (validAddition(req.body)) {
    console.log("addNew: ", req.body);
    controller("cars")
      .insert(req.body, "id")
      .then(([id]) => id)
      .then(id => {
        controller("cars")
          .where({ id })
          .first()
          .then(cars => {
            res
              .status(201) //success
              .json(cars);
          });
      })
      .catch(e => {
        res
          .status(500) //server error
          .json({ error: "error in addNew" });
      });
  } else {
    res
      .status(400) //error
      .json({ message: "Entered information is not valid" });
  }
};

// ================================
//            DELETE
// ================================
// @desc    DELETE car with :id
// @route   DELETE to /api/cars/:id
exports.deleteIndividual = (req, res, next) => {
  console.log("deleteIndividual: ", req.body);
  controller("cars")
    .where({ id: req.params.id })
    .del()
    .then(unit => {
      res
        .status(200) //success
        .json({ message: `Project ID of ${req.params.id} was deleted` });
    })
    .catch(e => {
      console.log("deleteIndividual err: ", e);
      res
        .status(500) //server error
        .json({ errorMessage: "Error in deleteIndividual" });
    });
};

// ================================
//            PUT
// ================================
// @desc    UPDATE cars with :id
// @route   PUT to /api/cars/:id
exports.updateIndividual = (req, res, next) => {
  console.log("updateIndividual: ", req.body);
  controller("cars")
    .where({ id: req.params.id })
    .update(req.body)
    .then(unit => {
      if (unit) {
        res
          .status(200) //success
          .json({
            message: `Project ID of ${req.params.id} was updated.`,
            changes: req.body
          });
      } else {
        res
          .status(404)
          .json({ message: `Cannot locate ID of ${req.params.id} to update` });
      }
    })
    .catch(e => {
      console.log("updateIndividual err: ", e);
      res
        .status(500) //server error
        .json({ errorMessage: "Error in updateIndividual" });
    });
};
