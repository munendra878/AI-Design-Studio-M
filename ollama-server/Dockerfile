FROM ollama/ollama:latest

# Install curl for healthcheck polling inside start.sh
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

ENV OLLAMA_HOST=0.0.0.0:11434
EXPOSE 11434

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]