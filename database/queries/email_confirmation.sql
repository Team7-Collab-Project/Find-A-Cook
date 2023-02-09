CREATE TABLE email_verification (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	email VARCHAR REFERENCES users (email) NOT NULL,
	confirmation_code VARCHAR(150) NOT NULL,
	expiry_date TIMESTAMP NOT NULL
);