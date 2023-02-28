CREATE TABLE users (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	firstname VARCHAR(50),
	surname VARCHAR(50),
	address VARCHAR(50),
	contact_number VARCHAR(15),
	email text NOT NULL,
	UNIQUE (email),
	password VARCHAR(50),
	profile_img_id VARCHAR(300),
	user_type text NOT NULL,
CHECK (user_type IN ('customer', 'cook', 'admin'))
);