-- service_role is missing the base SQL-level DML grants (SELECT, INSERT,
-- UPDATE, DELETE) on every table in the public schema — it only has
-- REFERENCES/TRIGGER/TRUNCATE, which this project's tables never had
-- explicitly granted to service_role. Bypassing RLS (which service_role
-- does) is irrelevant if the underlying GRANT is missing: Postgres checks
-- table-level privileges before RLS ever applies. This surfaced as
-- "permission denied for table contact_messages" once the public-form
-- insert queries (contacts.ts, appointments.ts, career-applications.ts)
-- switched to the service-role client so they could read back their own
-- INSERT ... RETURNING row.
grant select, insert, update, delete on all tables in schema public to service_role;

-- Keep this true for any table added by future migrations too.
alter default privileges in schema public
  grant select, insert, update, delete on tables to service_role;
