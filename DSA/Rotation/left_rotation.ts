class LeftRotation {
    private cases = [
        {
            case: 1,
            input: [23, 3232, 444, 32],
            r: 2
        },
        {
            case: 2,
            input: [123, 3344, 233, 1],
            r: 2
        },
        {
            case: 3,
            input: [22, 11, 45],
            r: 1
        }
    ]

    private rotation(arr: number[], r: number): number[]{
        let different = arr
        for(let i = 0; i  < r; i++){
            let v = different[0]
            different.splice(0, 1)
            different.push(v)
        }
        return different
    }

    public run(): void {
        for (let i = 0; i < this.cases.length; i++) {
            const e = this.cases[i];
            console.log(`case: ${e.case}`)
            console.log(`input: ${e.input}`)
            console.log(`rotation: ${e.r}`)
            console.log(`output: ${this.rotation(e.input, e.r)}`)
        }
    }
}

const runnable = new LeftRotation()

runnable.run()