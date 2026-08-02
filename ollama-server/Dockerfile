FROM ollama/ollama:latest

RUN apt-get update && \
    apt-get install -y curl && \
    rm -rf /var/lib/apt/lists/*

ENV OLLAMA_HOST=0.0.0.0:11434

EXPOSE 11434

COPY start.sh /start.sh
RUN chmod +x /start.sh

ENTRYPOINT []

CMD ["/bin/sh", "/start.sh"]
