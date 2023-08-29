function bouncingBall(h,  bounce,  window) {
    if(h<=0 | bounce<=0 | bounce>=1 | window >= h | bounce >= window ){
        return -1
    } else {
        for( let i=1; h>window; i++){
            let res = h*bounce
            if(res>window) {
                i++
                h = res
            }else{
                return i
            }
        }
    }
}

