import express from "express";
import path from "path";
import router from "./router"; // we calling router
import routerAdmin from "./routerAdmin";
/* 1-ENTRANCE */
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* 2-SESSIONS*/

/* 3-VIEWS*/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* 4-ROUTERS*/
app.use("/admin", routerAdmin); // SSR: EJS (Adminka)
app.use("/", router); // REACT

// Why we need Burak BackEnd  (2)
// 1/SPA(Single Page Application bo`lgan Burakni userlar ishlatadigan REACT uchun REST API server uchun ishlatamiz

// 2. Building Admin Site -SSR (ServerSideRendering)
// backenda frontendni qurib olish(EJS frameworkida)

// Middleware Design Pattern => it is only directing requests to router(nothing else)

export default app; //app ni filedan tashqariga export qilamiz. same as export.app
