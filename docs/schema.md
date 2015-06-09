# Schema Information

## activities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
location    | string    | not null
description | text      |
image_url   | string    |

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
activity_id | integer   | not null, foreign key (references activities)
user_id     | integer   | not null, foreign key (references users)
body        | text      |
rating      | integer   | range from 0 - 5

## wants
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
activity_id | integer   | not null, foreign key (references activities)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_name       | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
