#!/bin/sh
for d in ./*/
  do 
    if [$d === './site']; then 
      break
    fi 
    (cd "$d" && ./export.sh); 
done