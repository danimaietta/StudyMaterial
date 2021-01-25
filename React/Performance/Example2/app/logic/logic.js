export default function slowFunction(num){
    const incrementor = num
    console.log('calling slow function')
    for(let i=0; i <= 2000000000; i++){
        num = i
    }
    return num + incrementor
}