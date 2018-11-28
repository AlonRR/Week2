/*
const family = function(){
    let members = []
    const birth = (name) => {
        console.log(members)
        return members.push(name)}
    return birth
}
let giveBirth = family()

giveBirth('job')
giveBirth('bo')
giveBirth('jb')
giveBirth('jdd')
const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }
    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
}
mathOperations().add(5,6)
const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (user of _users) {
            user
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.listUsers()
*/
/*
//ex1
const StringFormatter = function(){
    const capitalizeFirst = (word) => {
        word = word[0].toUpperCase()+word.slice(1).toLowerCase()
        console.log(word)
        return word}
    const skewerCase = (word) =>{
        word = word.replace(` `,`-`)
        console.log(word)
        return word}
    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase  
    }
}
const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box

//ex2
const Bank = function(){
    let _money = 500
    const depositCash = (cash) => _money+=cash
    const checkBalance = () => console.log(_money)
    return{
        deposit: depositCash,
        showBalance: checkBalance
    }
}
const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950
*/
//ex3
const SongsManager = function(){
    let songs = {}
    const addSong = (key,https) => {
        https = https.slice(32)
        songs[key] = https} 
    const getSong = function(key){
        http = `https://www.youtube.com/watch?v=`+songs[key]
        console.log(http)
        return http}
    return{
        addSong: addSong,
        getSong: getSong
    }
}
const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print `https://www.youtube.com/watch?v=3JZ4pnNtyxQ`
