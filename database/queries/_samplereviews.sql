create table reviews (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	rating INT(5) NOT NULL,
	review TEXT,
    date DATE NOT NULL,
	menu_id BIGINT REFERENCES menu (id) NOT NULL,
    customer_id BIGINT REFERENCES menu (id) NOT NULL,
    image_id BIGINT REFERENCES images (id) NOT NULL,
	UNIQUE(image_id)
);