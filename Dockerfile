FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY server.mjs voice-server.mjs game.mjs ./
COPY public ./public
ENV PORT=4173
EXPOSE 4173
USER node
CMD ["node","server.mjs"]
