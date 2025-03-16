# Running Strapi CMS

## Prerequisites
- Node.js (version 14.x or higher)
- NPM (version 6.x or higher) or Yarn
- Database (SQLite, PostgreSQL, MySQL, or MongoDB)

## Steps to Run Strapi

1. **Create a new Strapi project** (skip if you have an existing project)
```bash
npx create-strapi-app@latest my-project
# or
yarn create strapi-app my-project
```

2. **Navigate to your project directory**
```bash
cd my-project
```

3. **Start the development server**
```bash
npm run develop
# or
yarn develop
```

4. **Access the admin panel**
- Open your browser and go to: http://localhost:1337/admin
- Create your admin account on first run
- Start managing your content!

## Available Commands

- `npm run develop` - Start the development server
- `npm run start` - Start the production server
- `npm run build` - Build the admin panel
- `npm run strapi` - Display all available commands

## Database Configuration

### SQLite (Default)
SQLite is the default database that comes with Strapi. The database file is stored in `.tmp/data.db`.

1. Ensure SQLite configuration in `config/database.js`:
```javascript
module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
    useNullAsDefault: true,
  },
});
```

2. Update your `.env` file for SQLite:
```
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
```

3. Install SQLite viewer (optional):
- For VS Code: Install "SQLite Viewer" extension
- For Desktop: Download "DB Browser for SQLite"

4. Common SQLite Commands:
```bash
# Access SQLite CLI (if installed)
sqlite3 .tmp/data.db

# Basic SQLite commands
.tables          # Show all tables
.schema         # Show database schema
.quit           # Exit SQLite CLI
```

Note: SQLite database is recommended for development only. For production, consider using PostgreSQL or MySQL.

### PostgreSQL
1. Install the dependency:
```bash
npm install pg --save
```

2. Update your database configuration in `config/database.js`:
```javascript
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'your-password'),
      ssl: env.bool('DATABASE_SSL', false)
    }
  }
});
```

### MySQL
1. Install the dependency:
```bash
npm install mysql --save
```

2. Update your database configuration in `config/database.js`:
```javascript
module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'your-password')
    }
  }
});
```

## Environment Variables

Create a `.env` file in your project root:
```
# General
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
JWT_SECRET=your-jwt-secret

# Database
DATABASE_HOST=your-database-host
DATABASE_PORT=your-database-port
DATABASE_NAME=your-database-name
DATABASE_USERNAME=your-username
DATABASE_PASSWORD=your-password
DATABASE_SSL=false
```

## Additional Resources

- [Strapi Documentation](https://docs.strapi.io)
- [Strapi Community](https://strapi.io/community)
- [Strapi Blog](https://strapi.io/blog)
