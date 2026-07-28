#!/bin/sh

export OLLAMA_HOST=0.0.0.0:11434

ollama serve &

sleep 30

ollama pull llama3.2

wait