var T = readline()
var res = []
for(var i = 0; i < T; i++){
    var group = readline().split('  ')
    var N = group[0]
    var K = group[1]
    var data = readline().split(' ')
    var sum = 0
    for(var j = 0; j < N; j++){
        if(data[j] <= 0){
            sum += 1
        }
    }
    if(sum < K){
        res.push('YES')
    }else{
        res.push('NO')
    }

}
for(var z = 0; z < T; z++){
    print(res[z])
}