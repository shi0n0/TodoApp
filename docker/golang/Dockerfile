FROM golang:alpine
RUN apk update
RUN apk add alpine-sdk
WORKDIR /app/golang-app
COPY ./golang-app /app/golang-app
RUN go build -o main .
CMD [ "/app/golang-app/main" ]