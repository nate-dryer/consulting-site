#!/bin/bash
# Temporary script to start the development server without Jest interference
export JEST_WORKER_ID=false
export NODE_ENV=development
npx next dev
