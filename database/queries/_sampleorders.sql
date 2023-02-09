create table orders (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	order_date DATE NOT NULL,
	total_amount VARCHAR(50) NOT NULL,
	quantity INT NOT NULL,
	customer_id BIGINT REFERENCES customers (id) NOT NULL,
	UNIQUE(customer_id)
);
insert into orders (order_date, total_amount, quantity, customer_id) values ('7/4/2022', '€2,95', 3, 1);
