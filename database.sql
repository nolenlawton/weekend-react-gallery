CREATE TABLE "galleryTable" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(250),
	"description" VARCHAR(500),
	"likes" INTEGER DEFAULT '0',
	"image" BOOLEAN DEFAULT TRUE,
	"isLiked" BOOLEAN DEFAULT FALSE
);

INSERT INTO "galleryTable" ("path", "description", "likes")
VALUES('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', '3'),
('/images/walt.jpg', 'Photo description of druglord Walter White. Also known as Heisenberg.', '26'),
('/images/fenway.jpg', 'Fenway, the Baseball Statium for the Boston Redsox.', '6'),
('/images/legolas.jpg', 'Legolas. One of the best archers in all of Middle-earth.', '13'),
('/images/mountain.jpg', 'Photo of a me on a mountain while hiking the John Muir Trail.', '8'),
('/images/maple.jpg', 'My dog Maple!.', '54'),
('/images/bear.jpg', 'My dogs Bear and Millie!', '86'),
('/images/snake.jpg', 'Photo of a snake.', '0');
