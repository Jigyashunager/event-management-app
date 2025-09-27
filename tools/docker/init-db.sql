-- Initialize database
CREATE DATABASE event_platform_db;

-- Create user for application
CREATE USER app_user WITH PASSWORD 'app_password';
GRANT ALL PRIVILEGES ON DATABASE event_platform_db TO app_user;