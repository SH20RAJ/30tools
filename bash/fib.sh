#!/bin/bash
read n
a=0
b=1
while [ $a -le $n ]; do
    echo $a
    fn=$((a + b))
    a=$b
    b=$fn
done
