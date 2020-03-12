function binarySearch(arr,low,high){
    if(high>=low){
        let mid = Math.trunc((high+low)/2);           
        if(arr[mid] === mid) {return mid;}
        else if(mid> arr[mid]){ return binarySearch(arr, mid+1, high);}
        else {return binarySearch(arr, low, mid-1);} 
    }
   else{ return -1;}
}

var arr = [-8,0,2,5,4];
binarySearch(arr, 0, arr.length-1);