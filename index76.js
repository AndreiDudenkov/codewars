function getMiddle(s)
{
    const middleIndex = Math.floor(s.length / 2);
    if(s.length%2 === 0){
        return s[middleIndex - 1] + s[middleIndex];
    } else {
        return s[middleIndex];
    }
}