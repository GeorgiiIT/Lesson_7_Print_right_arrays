sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

summer_sports = sports.slice(5)
winter_sports = sports.slice(0,5)

winter_sports = JSON.parse( JSON.stringify(winter_sports) );
summer_sports = JSON.parse( JSON.stringify(summer_sports) );

fruitsSecond = summer_sports.splice(2,2)
fruitsFirst = winter_sports.splice(2,1)

fruitsFirst = JSON.parse( JSON.stringify(fruitsFirst) );
fruitsSecond = JSON.parse( JSON.stringify(fruitsSecond) );

fruits = fruitsFirst.concat(fruitsSecond)
fruits = JSON.parse( JSON.stringify(fruits) );


console.log(`*** Winter sports ***`);
for (i = 0 ; i < winter_sports.length; i++){
	winterSport = winter_sports[i].join(': ');
	console.log(winterSport);
   };
   console.log(``);

	
   console.log(`*** Summer sports ***`);
for ( i = 0; i < summer_sports.length; i++){
	summerSport = summer_sports[i].join(': ');
	console.log(summerSport);
};
console.log(``);


console.log(`*** Fruits ***`);
for ( i = 0; i < fruits.length; i++){
	fruitslast = fruits[i].join(': ');
	console.log(fruitslast);
};








