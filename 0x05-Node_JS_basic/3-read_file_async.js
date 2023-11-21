const fs = require('fs/promises')
function countStudents(path) {
   const content = new Promise((resolve, reject) => {
       const file  = fs.readFile(path, 'utf-8')
        if (file){
            resolve(file)
        }
        else reject('Cannot load the database')
    })
    const SWE = []
    const CS = []
    const f1 = 'SWE'
    const f2 = 'CS'
    lines = content.split('\n')
    const totalStudents = -1
    for (line in lines){
        if (!line.endsWith(' ')){
            totalStudents += 1
            const fields = line.split(',')
            for (field of fields){
                if (field.slice(-1) === f1 ) SWE.push(field[0])
                else if (field.slice(-1) === f2) CS.push(field[0])
            }
        }
    }
    console.log(`Number of students: ${totalStudents}`);
    console.log(`Number of students in ${f2}: ${CS.length}. List: ${CS.join(', ')}`);
    console.log(`Number of students in ${f1}: ${SWE.length}. List: ${SWE.join(', ')}`)
}