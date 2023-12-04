FROM node:18 as prebuilder

WORKDIR /usr/src/app
COPY ./project/ .
RUN npm install


FROM node:18 as app
WORKDIR /usr/src/app
COPY --from=prebuilder /usr/src/app/ .
ENTRYPOINT [ "node", "index.js" ]

EXPOSE 3000