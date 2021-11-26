FROM openjdk:16-jdk-alpine
COPY ./build/libs/kiti-server-0.0.1-SNAPSHOT.jar kiti-server-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/kiti-server-0.0.1-SNAPSHOT.jar"]

# docker run --name postgresql-container -p 5433:5433 -e POSTGRES_PASSWORD="" -d postgres -f
# docker run --rm -d --network host --name postgresql-container -p 5433:5433 -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres
# docker run --rm -d --network host --name kiti-server2 -p 8080:8080 -d kiti-server2

