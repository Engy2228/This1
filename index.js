

const student2 = {
  stack: ['HTML'],
  level: Number(1),
  improveLevel: function() {
    const fullStack = ['CSS', 'JavaScript', 'React', 'NodeJS']

    for (let i = 0; i < fullStack.length; i++) {
      if (!this.stack.includes(fullStack[i])) {
        this.stack.push(fullStack[i])
      } 
    }  if (this.stack.length === fullStack.length +1) {
        alert('Студент выучил все технологии!')
   }
 } 
}
student2.improveLevel()
console.log(student2.stack); // Выведет: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']



const student = {
  stack: ['HTML'],
  level: 1,
  improveLevel: function () {
    this.level += 1
    if (this.level === 2) {
      this.stack.push('CSS') 
    } else if (this.level === 3) {
      this.stack.push('JavaScript')
    } else if (this.level === 4) {
      this.stack.push('React')
    } else if (this.level ===5) {
      this.stack.push('NodeJS')
    } else {
      alert('Студент выучил все технологии!')
    } 
    return this
  }
}
student
.improveLevel()
.improveLevel()
.improveLevel()
.improveLevel()
.improveLevel()

console.log(student.stack)