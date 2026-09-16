import { instance } from "./instance";
import "./client";

await instance.waitUntilExit();
process.exit();
