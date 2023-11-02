import db from "../db/connection.js";
import Location from "../models/Location.js";
import Character from "../models/Character.js";
import locations from "./locations.json" assert {type: "json"};
import characters from "./characters.json" assert {type: "json"};
import chalk from "chalk";

const insertData = async () => {
    // Reset Database
    await db.dropDatabase();

    // Insert Data
    await Character.create(characters);
    await Location.create(locations);

    console.log(chalk.magenta("Characters and Locations creates!"));
    
    // Close DB Connection
    await db.close();
}

insertData()