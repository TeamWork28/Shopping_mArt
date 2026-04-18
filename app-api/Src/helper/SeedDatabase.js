const fs = require('fs');
const path = require('path');

const rolesModel = require('../models/roles');
const productsModel = require('../models/products');

function extractArrayFromMigration(filePath, collectionName) {
  const script = fs.readFileSync(filePath, 'utf8');
  const pattern = new RegExp(
    `db\\.${collectionName}\\.insertMany\\((\\[[\\s\\S]*\\])\\s*\\);`
  );
  const match = script.match(pattern);

  if (!match) {
    throw new Error(`Unable to locate ${collectionName} seed data in ${filePath}`);
  }

  return eval(`(${match[1]})`);
}

async function seedCollection(Model, data, label) {
  const count = await Model.countDocuments();
  if (count > 0) {
    console.log(`Seed skipped for ${label}; ${count} documents already exist.`);
    return;
  }

  await Model.insertMany(data);
  console.log(`Seeded ${label} with ${data.length} documents.`);
}

async function seedDatabase() {
  const rolesPath = path.join(__dirname, '..', 'migration', 'roles');
  const productsPath = path.join(__dirname, '..', 'migration', 'Products');

  const roles = extractArrayFromMigration(rolesPath, 'roles');
  const products = extractArrayFromMigration(productsPath, 'products');

  await seedCollection(rolesModel, roles, 'roles');
  await seedCollection(productsModel, products, 'products');
}

module.exports = seedDatabase;
