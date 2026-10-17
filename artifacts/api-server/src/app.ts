import express, { type Express } from "express";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

// Serve the built Hampstead Wellbeing website (same set-up as Tetra Radar).
const serverDir = path.dirname(fileURLToPath(import.meta.url));
const websiteDir = path.resolve(serverDir, "../../hampstead-wellbeing/dist/public");
const websiteIndex = path.join(websiteDir, "index.html");

if (existsSync(websiteIndex)) {
  app.use(express.static(websiteDir));

  app.use((req, res, next) => {
    if (req.method !== "GET" || req.path.startsWith("/api/")) {
      return next();
    }

    res.sendFile(websiteIndex);
  });
} else {
  logger.warn({ websiteDir }, "Hampstead Wellbeing website build not found");
}

export default app;
