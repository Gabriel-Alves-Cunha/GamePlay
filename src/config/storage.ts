import AppInfo from "../../app.json";

const DATABASE_NAME = "@" + AppInfo.expo.name;
const COLLECTION_USER = DATABASE_NAME + ":" + "user";
const COLLECTION_APPOINTMENTS = DATABASE_NAME + ":" + "appointments";

export { COLLECTION_APPOINTMENTS, COLLECTION_USER };
