// Enviroment
process.env.NODE_ENV = process.env.NODE_ENV || "development";
// process.env.NODE_ENV = "production";

// Server Port
process.env.PORT = process.env.PORT || 3000;

/// Token
// Token Seed
process.env.TOKEN_SEED = process.env.TOKEN_SEED || "token_seed";

// Token expiration time
process.env.TOKEN_EXPIRES = process.env.TOKEN_EXPIRES || "48h";

/// DataBase
// DB name
process.env.DB_NAME = process.env.DB_NAME || "drivemusicplayer";

// DB user
process.env.DB_USER = process.env.DB_USER || "root";

// DB password
process.env.DB_PASSWORD = process.env.DB_PASSWORD || "root";

// DB hostname
process.env.DB_HOSTNAME = process.env.DB_HOSTNAME || "127.0.0.1";

/// Encryptation
// Bcrypt Salt Rounds
process.env.BCRYPT_SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

/// Google Drive Keys
// Google Drive Api Key
process.env.DRIVE_API_KEY =
  process.env.DRIVE_API_KEY || "AIzaSyBynS-g91QFAauy_0r1FN5hdQplNnCGsdM";
