exports.up = function(knex, Promise) {
  return knex.schema.createTable("phishTour", table => {
    table.increments("id");
    table.varchar("venue_name");
    table.varchar("date");
    table.varchar("location");
    table.varchar("tickets");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("phishTour");
};
