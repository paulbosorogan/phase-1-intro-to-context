// Your code here
function createEmployeeRecord(row){
    let employeeRecord = {}
    return employeeRecord = {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}
function createEmployeeRecords(array){
    return array.map(function (row){
        return createEmployeeRecord(row)
    })

}

function createTimeInEvent(employeeRecord, date){
    employeeRecord.timeInEvents.push({
        type: "TimeIn", 
        hour: parseInt(date.split(' ')[1]), 
        date: date.split(' ')[0]})
    return employeeRecord
    }

function createTimeOutEvent(employeeRecord, date){
    employeeRecord.timeOutEvents.push({
        type: "TimeOut", 
        hour: parseInt(date.split(' ')[1]), 
        date: date.split(' ')[0]})
    return employeeRecord
}
function hoursWorkedOnDate(employeeRecord, date){
    let timeIn = employeeRecord.timeInEvents.find(elem => elem.date === date)
    let timeOut = employeeRecord.timeOutEvents.find(elem => elem.date === date)
   return (timeOut.hour - timeIn.hour) /100
}
function wagesEarnedOnDate(employeeRecord, date){
    return hoursWorkedOnDate(employeeRecord,date) * employeeRecord.payPerHour
}
function allWagesFor(employeeRecord){
    const dates = employeeRecord.timeInEvents.map(object => object.date) 
    const wages = dates.reduce((total, date) => total + wagesEarnedOnDate(employeeRecord, date),0)
    return wages
}
function calculatePayroll(array){
   const allWages = array.reduce((total, employeeRecord)=> total + allWagesFor(employeeRecord),0)
   return allWages
}