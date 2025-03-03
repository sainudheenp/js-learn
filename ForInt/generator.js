function* genx(){
    yield 1;
    yield 2

}


const gen = genx()
console.log(gen.next().value)
console.log(gen.next().value)

