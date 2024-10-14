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

const getUi = (): GoogleAppsScript.Base.Ui => SpreadsheetApp.getUi();
const getApp = () => HtmlService.createHtmlOutputFromFile('app')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);

function showSideBar() {
    getUi().showSidebar(getApp());
}

function onOpen(e: any) {
    getUi()
        .createMenu('Volunteer Management')
        .addItem('Start', 'showSideBar')
        .addToUi();
}