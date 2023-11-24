const file_array = [
    '../assets/Timesheet1.png',
    '../assets/Timesheet2.png',
    '../assets/Timesheet3.png'
]

const timesheetList = document.querySelector('.timesheet-list')

for (let index = 0; index < file_array.length; index++) {
    const item = document.createElement('div')
    item.classList.add('timesheet-item')
    const button = document.createElement('button')
    button.classList.add('timesheet-btn')
    const link = document.createElement('img')
    link.src = file_array[index]
    const reject = document.createElement('button')
    reject.classList.add('reject-btn')
    reject.innerText = 'Reject'
    reject.onclick = function() {
        alert("Timesheet Rejected")
        item.style.background = 'red'
    }
    const approve = document.createElement('button')
    approve.classList.add('approve-btn')
    approve.innerText = 'Approve'
    approve.onclick = function() {
        alert("Timesheet Accepted")
        item.style.display = 'none'
    }
    item.appendChild(button)
    button.appendChild(link)
    item.appendChild(reject)
    item.appendChild(approve)
    timesheetList.appendChild(item)

}