const Library = require('./entities/library');

corkCityLibrary = new Library()

corkCityLibrary.lookup("9781472258229"); // => 'Kindred, by Octavia E. Butler (1979)'
corkCityLibrary.add("9781472258229");

corkCityLibrary.lookup("9780441569595"); // => 'Neuromancer, by William Gibson (1984)'
corkCityLibrary.add("9780441569595", 3);

corkCityLibrary.borrow("9781472258229"); // Borrow a copy of 'Kindred'
corkCityLibrary.borrow("9780441569595"); // Borrow a copy of 'Neuromancer'
corkCityLibrary.borrow("9780441569595"); // Borrow another copy of 'Neuromancer'
corkCityLibrary.return("9780441569595"); // Return a copy of 'Neuromancer'

corkCityLibrary.stock();
// 9780143111597, Copies: 0, Available: 0
// 9781472258229, Copies: 1, Available: 0
// 9780441569595, Copies: 3, Available: 2
// 9781857231380, Copies: 0, Available: 0
// 9780553283686, Copies: 0, Available: 0