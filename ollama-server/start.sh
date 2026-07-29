#!/bin/sh

export OLLAMA_HOST=0.0.0.0:11434

# 1. Start Ollama in the background
ollama serve &
SERVER_PID=$!

# 2. Dynamically wait for Ollama to be ready (up to 30s)
echo "⏳ Waiting for Ollama server to start..."
MAX_RETRIES=30
RETRY_COUNT=0

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
  if curl -s http://127.0.0.1:11434/ > /dev/null; then
    echo "✅ Ollama is up and running!"
    break
  fi
  RETRY_COUNT=$((RETRY_COUNT + 1))
  sleep 1
done

# 3. Pull model if it's not already cached on volume
echo "📦 Pulling model llama3.2..."
ollama pull llama3.2 || echo "⚠️ Model pull failed or timed out, continuing startup..."

# 4. Graceful shutdown handler for Render SIGTERM/SIGINT
trap 'echo "Stopping Ollama..."; kill -TERM $SERVER_PID; wait $SERVER_PID' INT TERM

# 5. Keep script running alongside the background server
wait $SERVER_PID