#!/bin/sh

set -e

export OLLAMA_HOST=0.0.0.0:11434

echo "🚀 Starting Ollama..."

# Start Ollama in background
ollama serve &
SERVER_PID=$!

echo "⏳ Waiting for Ollama server to become ready..."

# Wait until the API is available
until curl -s http://127.0.0.1:11434/api/tags >/dev/null 2>&1
do
    sleep 2
done

echo "✅ Ollama server is ready."

# Pull model only if it doesn't exist
if ! ollama list | grep -q "llama3.2"; then
    echo "📦 Pulling llama3.2 model..."
    ollama pull llama3.2
else
    echo "✅ llama3.2 already exists."
fi

echo "🎉 Ollama is ready."

# Graceful shutdown
trap "echo 'Stopping Ollama...'; kill -TERM $SERVER_PID; wait $SERVER_PID" INT TERM

# Keep container alive
wait $SERVER_PID
