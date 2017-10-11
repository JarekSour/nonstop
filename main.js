const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const url = require('url')

let win;

function createWindow() {

    win = new BrowserWindow({
        x: 0,
        y: 0,
        minHeight: 600,
        minWidth: 800,
        show: false
    });

    process.env.GOOGLE_API_KEY = 'AIzaSyAaYwbinhqL4l3uhdIjpFLZ4-mDQfwBN4M';

    win.maximize();
    Menu.setApplicationMenu(null);
    win.loadURL(path.join(__dirname, 'dist/index.html'));

    win.webContents.openDevTools()

    win.on('closed', function () {
        win = null
    })
}

app.on('ready', createWindow)

app.once('ready-to-show', () => {
    win.show()
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (win === null) {
        createWindow()
    }
})
