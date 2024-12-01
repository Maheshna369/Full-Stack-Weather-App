import loginPost from "../controllers/Login.js";
import RegisterPost from "../controllers/Registration.js";

const routes = (app) => {
  app.post("/register", RegisterPost);
  app.post("/login", loginPost);
};
export default routes;
