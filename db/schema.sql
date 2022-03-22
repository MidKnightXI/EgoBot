CREATE TABLE users (
   id UUID DEFAULT gen_random_uuid (),
   channel VARCHAR(25) UNIQUE NOT NULL,
   PRIMARY KEY(id)
);

CREATE TABLE commands (
   id UUID DEFAULT gen_random_uuid (),
   channel_name VARCHAR(25) UNIQUE NOT NULL,
   cmd_name VARCHAR(130) UNIQUE NOT NULL,
   cmd_action VARCHAR(130) UNIQUE NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY (channel_name) REFERENCES users (channel)
);