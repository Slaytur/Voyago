FROM oven/bun
WORKDIR /app
# Copy the lock and package file
COPY . .

RUN bun i
RUN bun run build
#COPY --from=builder /app/build .

EXPOSE 3000

CMD ["bun", "start"]