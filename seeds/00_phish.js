
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('phishTour').del()
    .then(function () {
      // Inserts seed entries
      return knex('phishTour').insert([
        {
          venue_name: 'Chaifetz',
          date: 'June 11, 2019',
          location: 'St. Louis, MO'
        },
        {
          venue_name: 'Chaifetz',
          date: 'June 12, 2019',
          location: 'St. Louis, MO'
        },
        {
          venue_name: 'Bonnaroo Arts & Music Festival',
          date: 'June 14, 2019',
          location: 'Manchester, TN'
        },
        {
          venue_name: 'Bonnaroo Arts & Music Festival',
          date: 'June 16, 2019',
          location: 'Manchester, TN'
        },
        {
          venue_name: 'Budweiser Stage',
          date: 'June 18, 2019',
          location: 'Toronto, ON, Canada'
        },
        {
          venue_name: 'Blossom Music Center',
          date: 'June 19, 2019',
          location: 'Cuyahoga Falls, OH'
        },
        {
          venue_name: 'PNC Music Center',
          date: 'June 21, 2019',
          location: 'Charlotte, NC'
        },
        {
          venue_name: 'Merriweather Post Pavilion',
          date: 'June 22, 2019',
          location: 'Columbia, MD'
        },
        {
          venue_name: 'Merriweather Post Pavilion',
          date: 'June 23, 2019',
          location: 'Columbia, MD'
        },
        {
          venue_name: 'Darling’s Waterfront Pavilion',
          date: 'June 25, 2019',
          location: 'Bangor, ME'
        },
        {
          venue_name: 'Darling’s Waterfront Pavilion',
          date: 'June 26, 2019',
          location: 'Bangor, ME'
        },
        {
          venue_name: 'BB&T Pavilion',
          date: 'June 28, 2019',
          location: 'Camden, NJ'
        },
        {
          venue_name: 'BB&T Pavilion',
          date: 'June 29, 2019',
          location: 'Camden, NJ'
        },
        {
          venue_name: 'BB&T Pavilion',
          date: 'June 30, 2019',
          location: 'Camden, NJ'
        },
        {
          venue_name: 'Saratoga Performing Arts Center',
          date: 'July 2, 2019',
          location: 'Saratoga Springs, NY'
        },
        {
          venue_name: 'Saratoga Performing Arts Center',
          date: 'July 3, 2019',
          location: 'Saratoga Springs, NY'
        },
        {
          venue_name: 'Fenway Park',
          date: 'July 5, 2019',
          location: 'Boston, MA'
        },
        {
          venue_name: 'Fenway Park',
          date: 'July 6, 2019',
          location: 'Boston, MA'
        },
        {
          venue_name: 'Mohegan Sun Arena',
          date: 'July 9, 2019',
          location: 'Uncasville, CT'
        },
        {
          venue_name: 'Mohegan Sun Arena',
          date: 'July 10, 2019',
          location: 'Uncasville, CT'
        },
        {
          venue_name: 'Alpine Valley Music Theatre',
          date: 'July 12, 2019',
          location: 'Elkhorn, WI'
        },
        {
          venue_name: 'Alpine Valley Music Theatre',
          date: 'July 13, 2019',
          location: 'Elkhorn, WI'
        },
        {
          venue_name: 'Alpine Valley Music Theatre',
          date: 'July 14, 2019',
          location: 'Elkhorn, WI'
        },
        {
          venue_name: 'Dick\'s Sporting Goods Park',
          date: 'August 30, 2019',
          location: 'Commerce City, CO'
        },
        {
          venue_name: 'Dick\'s Sporting Goods Park',
          date: 'August 31, 2019',
          location: 'Commerce City, CO'
        },
        {
          venue_name: 'Dick\'s Sporting Goods Park',
          date: 'September 1, 2019',
          location: 'Commerce City, CO'
        }
      ]);
    });
};
