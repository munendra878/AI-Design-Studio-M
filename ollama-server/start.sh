#!/bin/sh

ollama serve &

sleep 30

ollama pull llama3.2

wait