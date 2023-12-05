FROM node:18 as prebuilder

WORKDIR /usr/src/app
COPY ./project/ .
RUN npm install


FROM node:18 as app
WORKDIR /usr/src/app

COPY --from=prebuilder /usr/src/app/ .

COPY commands.sh /scripts/commands.sh

RUN chmod +x /scripts/commands.sh

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

ENTRYPOINT [ "/scripts/commands.sh" ]

EXPOSE 3000