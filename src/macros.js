'use strict';

/** @OnlyCurrentDoc */
function NewPrintMission() {
    var spreadsheet = SpreadsheetApp.getActive();

    /** Copies the mission number to B1*/
    spreadsheet.getSheetByName('Current Daily Missions').getActiveRange().copyTo(spreadsheet.getSheetByName('Mission Sheet Printout').getRange(1,2), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);

    /** Copies the town to D1 */
    spreadsheet.getSheetByName('Current Daily Missions').getActiveRange().offset(0,-1).copyTo(spreadsheet.getSheetByName('Mission Sheet Printout').getRange(1,4), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);

    /**Contacted today--> B2 */
    spreadsheet.getSheetByName('Current Daily Missions').getActiveRange().offset(0,1).copyTo(spreadsheet.getSheetByName('Mission Sheet Printout').getRange(2,2), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);

    /**Person of Concern --> D2 */
    spreadsheet.getSheetByName('Current Daily Missions').getActiveRange().offset(0,5).copyTo(spreadsheet.getSheetByName('Mission Sheet Printout').getRange(2,4), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);

    /**Contact Info --> B3 */
    spreadsheet.getSheetByName('Current Daily Missions').getActiveRange().offset(0,5).copyTo(spreadsheet.getSheetByName('Mission Sheet Printout').getRange(3,4), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);

    /**Address --> D3 */
    spreadsheet.getSheetByName('Current Daily Missions').getActiveRange().offset(0,8).copyTo(spreadsheet.getSheetByName('Mission Sheet Printout').getRange(3,4), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);

    /**Contact Phone--> B4 */
    spreadsheet.getSheetByName('Current Daily Missions').getActiveRange().offset(0,6).copyTo(spreadsheet.getSheetByName('Mission Sheet Printout').getRange(4,2), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);

    /**Med? --> D4*/
    spreadsheet.getSheetByName('Current Daily Missions').getActiveRange().offset(0,10).copyTo(spreadsheet.getSheetByName('Mission Sheet Printout').getRange(4,4), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);

    /**Needs--> B5  */
    spreadsheet.getSheetByName('Current Daily Missions').getActiveRange().offset(0,11).copyTo(spreadsheet.getSheetByName('Mission Sheet Printout').getRange(5,2), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);

    /**Notes--> B6 */
    spreadsheet.getSheetByName('Current Daily Missions').getActiveRange().offset(0,12).copyTo(spreadsheet.getSheetByName('Mission Sheet Printout').getRange(6,2), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
};
