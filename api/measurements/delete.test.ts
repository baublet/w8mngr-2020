import createFood from "../foods/create";
import deleteMeasurement from "./delete";
import createUser from "../user/create";
import { clearDatabase } from "../../test/helpers";
import { UserType } from "../user/types";
import { FoodType } from "../foods/types";
import createMeasurement from "./create";
import { MeasurementType } from "./types";

describe("Food: delete", function() {
  let user: UserType, food: FoodType, measurement: MeasurementType;

  beforeEach(async () => {
    await clearDatabase();
    user = await createUser("testMan@test.com", "test password");
    food = await createFood(user.id, "Name", "Description");
    measurement = await createMeasurement(food.id, 1, "oz", 2, 3, 4, 5);
  });

  it("should delete properly", () => {
    return new Promise(async (resolve, reject) => {
      const deleted = await deleteMeasurement(measurement.id, user.id);
      if (deleted) {
        resolve();
      } else {
        resolve("Did not delete properly!");
      }
    });
  });
});