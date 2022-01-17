import express from "express";
import authController from "./controllers/auth.controller";
import cacheController from "./controllers/cache.controller";
import tournamentController from "./controllers/tournament.controller";
import userController from "./controllers/user.controller";

const router = express.Router();

router.route("/user/create").post(userController.create);
router.route("/user").get(userController.list);

router.route("/login").post(authController.signin);
router.route("/logout").get(authController.signout);

router.param("userId", userController.userByID);

router
  .route("/user/:userId")
  .get(authController.requireSignin, userController.read)
  .put(
    authController.requireSignin,
    authController.hasAuthorization,
    userController.update
  )
  .delete(
    authController.requireSignin,
    authController.hasAuthorization,
    userController.remove
  );

router.route("/cache").get(cacheController.getCache);

router.route("/tournament").get(tournamentController.list);
router.route("/tournament/create").post(tournamentController.create);

router.param("tournamentId", tournamentController.tournamentById);

router
  .route("/tournament/:tournamentId")
  .get(tournamentController.read)
  .put(tournamentController.update)
  .delete(tournamentController.remove);

router.param("uniqueId", tournamentController.tournamentByUniqueId);
router
  .route("/tournamentByUniqueId/:uniqueId")
  .get(tournamentController.getTournamentByUniqueId);

router.param("host", tournamentController.getTournamentsByUser);
router
  .route("/api/tournament/:host")
  .get(tournamentController.tournamentsByHost);

export default router;
