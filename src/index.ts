import {Volunteer, WeekDay} from "./types/volunteer";

const testLambda = () => {
    console.log('Happy developing ��test');
}

function testFunction () {
    const volunteer: Volunteer = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: 1234567890,
        availability: {
            days: new Set([WeekDay.monday, WeekDay.wednesday, WeekDay.friday]),
            timeSlots: [
                {startTime: '10:00', endTime: '12:00'},
                {startTime: '14:00', endTime: '16:00'}
            ]
        },
        isActive: true
    };

    console.log('Happy developing ✨test');
    console.log(JSON.stringify(volunteer, null, 2));
    testLambda();
}

function showSidebar() {
    const ui = SpreadsheetApp.getUi();
    let html = HtmlService.createHtmlOutputFromFile('testPage.html');
    ui.showSidebar(html);
}

function onOpen(e: any) {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('Volunteer Management')
        .addItem('Start', 'timesheet.showSideBar')
        .addToUi();
}