#!/bin/sh

ollama serve &

sleep 15

ollama pull llama3.2

wait