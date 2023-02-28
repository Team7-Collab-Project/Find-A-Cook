create table menu (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	price VARCHAR(50) NOT NULL,
	menu_cat_id BIGINT REFERENCES menu_category (id) NOT NULL,
    image_id BIGINT REFERENCES images (id) NOT NULL,
	UNIQUE(image_id)
);

insert into menu (name, price, menu_cat_id, image_id) values ('Moqueca', '€22,95', 1, 1);
insert into menu (name, price, menu_cat_id, image_id) values ('Moqueca', '€32,95', 1, 2);