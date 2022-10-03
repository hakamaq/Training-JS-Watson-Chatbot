#!/bin/sh
for d in ./Day\ */
  do 
    if [$d === './site' || $d === './example-cl']; then 
      break
    fi 
    (cd "$d" && ./export.sh); 
done