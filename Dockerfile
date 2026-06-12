FROM node:22.11.0-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
ENV NODE_OPTIONS="--dns-result-order=ipv4first"
RUN for i in $(seq 1 5); do npm install --no-audit --no-fund --ignore-scripts && exit 0; echo "Retry $i/5..."; sleep 5; done; exit 1

# Copy the rest of the application
COPY . .
# Build the Next.js application
RUN npm run build

# Production image
FROM node:22.11.0-alpine AS runner

WORKDIR /app

# Set the environment to production
ENV NODE_ENV=production
# Expose the requested port
ENV PORT=3000

# Copy necessary files from the builder stage
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
