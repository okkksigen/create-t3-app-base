#!/bin/bash
set -e

# Ждем, пока база данных будет готова
until pg_isready -U myuser -h db -p 5432; do
    echo "Waiting for database to be ready..."
    sleep 1
done

echo "Database is ready, applying migrations..."

# Применяем миграции
npx drizzle-kit push

  echo "Done."
