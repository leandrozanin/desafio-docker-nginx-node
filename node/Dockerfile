FROM node:18 as app
WORKDIR /usr/src/app

COPY ./project/ .

COPY commands.sh /scripts/commands.sh

RUN chmod +x /scripts/commands.sh

ENTRYPOINT [ "/scripts/commands.sh" ]

EXPOSE 3000