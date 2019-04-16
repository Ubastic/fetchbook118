t=0
cat ../resu | while read line
do
s=500
q=1
:<<!
if [ ${t} -lt 145 ]
then
((t++))
continue
fi
!
tt=0
while [ q ]
do
((tt++))
INFO="wget $line -O ${t}.png"
s=`$INFO 2>&1 | grep -o -c 200`
if [[ ${s} -ge 1 ]]
then
echo "success " $t
((t++))
q=0
break
else
echo "retry " $t
echo $s $tt
fi
done
done

# 2>&1