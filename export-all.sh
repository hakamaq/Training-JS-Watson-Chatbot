#!/bin/sh
for d in ./site/codelabs/*/
  do 
    if [$d === './site' || $d === './example-cl']; then 
      break
    fi 
    (cd "$d" && ./export.sh); 
done