CREATE TABLE Channel(
   "id" UUID DEFAULT gen_random_uuid (),
   "name" varchar(130) NOT NULL,
   PRIMARY KEY("id")
);

CREATE TABLE Commands(
   "id" UUID DEFAULT gen_random_uuid (),
   "channel_id" varchar(36) NOT NULL,
   "name" varchar(130) NOT NULL,
   "action" varchar(130) NOT NULL,
   PRIMARY KEY("id"),
   FOREIGN KEY("channel_id") REFERENCES "Channel"("id")
);