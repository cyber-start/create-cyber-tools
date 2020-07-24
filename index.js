#!/usr/bin/env node
require("./utils/initial");
const createTools = require("@/scripts/create-tools");
const selectTemplate = require("@/utils/selectTemplate");


(async () => {
  try {
    const { remote, devDependencies } = await selectTemplate();
    await createTools({ remote, devDependencies });
  } catch (error) {
    throw error;
  };
})();

