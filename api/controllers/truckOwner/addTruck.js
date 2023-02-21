const { truckOwnerServices } = require("../../services");

const addTruck = async (req, res) => {
  let isLoggedIn = false;
  let isAuthorized = false;

  let isCreated = false;
  let msg;
  if (req.user) {
    isAuthorized = req.user.role == 3;
    isLoggedIn = true;

    if (isAuthorized) {
      let truckOwnerId = req.params.truckOwnerId;
      let regNumber = req.body.regNumber;
      let weight = req.body.weight;

      try {
        let { create, createMessage } = await truckOwnerServices.addTruck(
          truckOwnerId,
          regNumber,
          weight
        );
        isCreated = create;
        msg = createMessage;
      } catch (e) {
        console.log(e);
      }
    }
  }
  res.send({ isLoggedIn, isAuthorized, isCreated, msg });
};

module.exports = addTruck;
