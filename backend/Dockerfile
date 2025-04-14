# Node.js image als basis
FROM node:16

# Werkdirectory
WORKDIR /app

# Kopieer package.json en package-lock.json
COPY package*.json ./

# Installeer dependencies
RUN npm install

# copy de rest van de applicatie
COPY . .

# Expose poort 3000 voor de app
EXPOSE 3000

# Stap 7: Start de applicatie
CMD ["node", "index.js"]
