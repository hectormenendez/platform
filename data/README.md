## Usage

Don't run commands directly from this folder, instead use lerna from the root folder.

### Commands

```bash
# TODO: This should be on the root folder.
# Startup docker image.
docker-compose up

# update schema.svg (done automatically when committing the source file)
npx lerna run build:schema --scope=data

# running migrations (database versioning system)
# NOTE: the database container should be up and running before doing this.
npx lerna run dbvs:add # Creates a new migration using current branch's name
npx lerna run dbvs:list # lists migrations pending to run.
npx lerna run dbvs:last # Apply the latest migrations.
npx lerna run dbvs:first # Rollback until before the first migration.
npx lerna run dbvs:next # Apply the next migration.
npx lerna run dbvs:prev # Rollback the last-applied migration.
```

## Schema

This is the currenly-established relationships schema of the database.

![Schema](./.files/schema.svg)
