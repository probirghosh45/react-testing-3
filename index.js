const getFullName =(fname , lname) =>{
  return `${fname} ${lname}`
}

const actualFulName = getFullName ('Probir', 'Ghosh')
const expectedFulName = 'Probir Ghosh'

if (actualFulName !== expectedFulName) {
    throw new Error (`${actualFulName} is not not same as ${expectedFulName}`) 
}

