exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("phishTour")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("phishTour").insert([
        {
          venue_name: "Chaifetz",
          date: "June 11, 2019",
          location: "St. Louis, MO",
          tickets:
            "https://www1.ticketmaster.com/event/06005628AA5435E5?dma_id=264"
        },
        {
          venue_name: "Chaifetz",
          date: "June 12, 2019",
          location: "St. Louis, MO",
          tickets: "https://www1.ticketmaster.com/event/06005628B792394C"
        },
        {
          venue_name: "Bonnaroo Arts & Music Festival",
          date: "June 14, 2019",
          location: "Manchester, TN",
          tickets:
            "https://www.bonnaroo.com/?utm_source=phish&utm_medium=phish-website&utm_campaign=2019-artist"
        },
        {
          venue_name: "Bonnaroo Arts & Music Festival",
          date: "June 16, 2019",
          location: "Manchester, TN",
          tickets:
            "https://www.bonnaroo.com/?utm_source=phish&utm_medium=phish-website&utm_campaign=2019-artist"
        },
        {
          venue_name: "Budweiser Stage",
          date: "June 18, 2019",
          location: "Toronto, ON, Canada",
          tickets: "https://www1.ticketmaster.ca/event/10005628183E3E89"
        },
        {
          venue_name: "Blossom Music Center",
          date: "June 19, 2019",
          location: "Cuyahoga Falls, OH",
          tickets: "https://www1.ticketmaster.com/event/05005627B3453BF2"
        },
        {
          venue_name: "PNC Music Center",
          date: "June 21, 2019",
          location: "Charlotte, NC",
          tickets: "https://www1.ticketmaster.com/event/2D005628BE6B50D0"
        },
        {
          venue_name: "Merriweather Post Pavilion",
          date: "June 22, 2019",
          location: "Columbia, MD",
          tickets: "https://www1.ticketmaster.com/event/15005628E8DA4390"
        },
        {
          venue_name: "Merriweather Post Pavilion",
          date: "June 23, 2019",
          location: "Columbia, MD",
          tickets: "https://www1.ticketmaster.com/event/15005628E9B743E3"
        },
        {
          venue_name: "Darling’s Waterfront Pavilion",
          date: "June 25, 2019",
          location: "Bangor, ME",
          tickets: "https://www1.ticketmaster.com/event/01005627D79271F6"
        },
        {
          venue_name: "Darling’s Waterfront Pavilion",
          date: "June 26, 2019",
          location: "Bangor, ME",
          tickets: "https://www1.ticketmaster.com/event/01005627D83A720D"
        },
        {
          venue_name: "BB&T Pavilion",
          date: "June 28, 2019",
          location: "Camden, NJ",
          tickets: "https://www1.ticketmaster.com/event/02005628DEF299D3"
        },
        {
          venue_name: "BB&T Pavilion",
          date: "June 29, 2019",
          location: "Camden, NJ",
          tickets: "https://www1.ticketmaster.com/event/02005628F2DDA398"
        },
        {
          venue_name: "BB&T Pavilion",
          date: "June 30, 2019",
          location: "Camden, NJ",
          tickets: "https://www1.ticketmaster.com/event/02005628F300A3B6"
        },
        {
          venue_name: "Saratoga Performing Arts Center",
          date: "July 2, 2019",
          location: "Saratoga Springs, NY",
          tickets: "https://www1.ticketmaster.com/event/00005595D7DB4CB1"
        },
        {
          venue_name: "Saratoga Performing Arts Center",
          date: "July 3, 2019",
          location: "Saratoga Springs, NY",
          tickets: "https://www1.ticketmaster.com/event/00005622D2BB50E4"
        },
        {
          venue_name: "Fenway Park",
          date: "July 5, 2019",
          location: "Boston, MA",
          tickets: "https://www.mlb.com/redsox/tickets/concerts/phish"
        },
        {
          venue_name: "Fenway Park",
          date: "July 6, 2019",
          location: "Boston, MA",
          tickets: "https://www.mlb.com/redsox/tickets/concerts/phish"
        },
        {
          venue_name: "Mohegan Sun Arena",
          date: "July 9, 2019",
          location: "Uncasville, CT",
          tickets: "https://www1.ticketmaster.com/phish/event/1D005629B5A71164"
        },
        {
          venue_name: "Mohegan Sun Arena",
          date: "July 10, 2019",
          location: "Uncasville, CT",
          tickets: "https://www1.ticketmaster.com/phish/event/1D005629B6011168"
        },
        {
          venue_name: "Alpine Valley Music Theatre",
          date: "July 12, 2019",
          location: "Elkhorn, WI",
          tickets: "https://www1.ticketmaster.com/event/07005627D89A5AAA"
        },
        {
          venue_name: "Alpine Valley Music Theatre",
          date: "July 13, 2019",
          location: "Elkhorn, WI",
          tickets: "https://www1.ticketmaster.com/event/07005627D89F5AAD"
        },
        {
          venue_name: "Alpine Valley Music Theatre",
          date: "July 14, 2019",
          location: "Elkhorn, WI",
          tickets: "https://www1.ticketmaster.com/event/07005627D8A35AC3"
        },
        {
          venue_name: "Dick's Sporting Goods Park",
          date: "August 30, 2019",
          location: "Commerce City, CO",
          tickets: "https://www.altitudetickets.com/events/detail/phish-2019"
        },
        {
          venue_name: "Dick's Sporting Goods Park",
          date: "August 31, 2019",
          location: "Commerce City, CO",
          tickets: "https://www.altitudetickets.com/events/detail/phish-2019"
        },
        {
          venue_name: "Dick's Sporting Goods Park",
          date: "September 1, 2019",
          location: "Commerce City, CO",
          tickets: "https://www.altitudetickets.com/events/detail/phish-2019"
        }
      ]);
    });
};
