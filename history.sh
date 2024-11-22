#!/bin/bash

# Number of days in the past
for i in {1..30}; do
  # Create or update a file
  echo "Fake commit $i on $(date)" >> history.txt
  git add .

  # Set backdated commit date
  GIT_AUTHOR_DATE="$(date -d "$i days ago" '+%Y-%m-%dT%H:%M:%S')" \
  GIT_COMMITTER_DATE="$(date -d "$i days ago" '+%Y-%m-%dT%H:%M:%S')" \
  git commit -m "Commit $i"
done
