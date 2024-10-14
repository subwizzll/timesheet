export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('Volunteer Manager') // edit me!
    .addItem('Dashboard', 'openDashBoard')
    .addItem('Time Sheet', 'openTimeSheet')
    .addItem('Sheet Editor', 'openDialog')
    .addItem('Sheet Editor (Bootstrap)', 'openDialogBootstrap')
    .addItem('Sheet Editor (MUI)', 'openDialogMUI')
    .addItem('Sheet Editor (Tailwind CSS)', 'openDialogTailwindCSS')
    .addItem('About me', 'openAboutSidebar');

  menu.addToUi();
};

export const openDashBoard = () => {
  const html = HtmlService.createHtmlOutputFromFile('dashboard').setTitle('Volunteer Management');
  SpreadsheetApp.getUi().showSidebar(html);
};

export const openTimeSheet = () => {
  const html = HtmlService.createHtmlOutputFromFile('time-sheet').setTitle('Time Sheet');
  SpreadsheetApp.getActiveSpreadsheet().show(html);
};

export const openDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo');
  SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor');
};

export const openDialogBootstrap = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo-bootstrap').setWidth(600).setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor (Bootstrap)');
};

export const openDialogMUI = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo-mui').setWidth(600).setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor (MUI)');
};

export const openDialogTailwindCSS = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo-tailwindcss').setWidth(600).setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor (Tailwind CSS)');
};

export const openAboutSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('sidebar-about-page');
  SpreadsheetApp.getUi().showModelessDialog(html, 'Side Bar');
};
