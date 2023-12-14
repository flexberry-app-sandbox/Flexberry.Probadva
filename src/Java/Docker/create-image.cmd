docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probadva-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t probadva-java/app ../../..
