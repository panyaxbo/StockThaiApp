const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, ipcMain } = electron;

// Listen for app to be  ready
app.on('ready', function() {
    // Create new Window
    mainWindow = new BrowserWindow({});
    console.log(__dirname);
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true,
        icon: path.join(__dirname, 'dist/assets/stock-thai-app.png')
    })); // file://dirname/mainWindow.html
    mainWindow.maximize();
    // Quit main window
    mainWindow.on('close', function() {
        app.quit();
    });
    //Build Menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Insert Menu
    Menu.setApplicationMenu(mainMenu);
});
// Handle add window
function createAddWindow() {
    addWindow = new BrowserWindow({
        width: 400,
        height: 400,
        title: 'Add To-do list item'
    });
    // Load html into window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'src/views/add.html'),
        protocol: 'file:',
        slashes: true,
        icon: path.join(__dirname, 'dist/assets/stock-thai-app.png')
    }));
    // Garbage collection handle
    addWindow.on('closed', function() {
        addWindow = null;
    });
    addWindow.maximize();
};

//Catch item:add
ipcMain.on('item:add', function(e, item) {
    console.log('item add ', e, item);
    mainWindow.webContents.send('item:add', item);
    addWindow.close();
});

//Create menu Template
const mainMenuTemplate = [{
    label: 'File',
    submenu: [{
            label: 'Add Item',
            click() {
                createAddWindow();
            }
        },
        {
            label: 'Clear Item',
            click() {
                mainWindow.webContents.send('item:clear');
            }
        },
        {
            label: 'Quit',
            accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
            click() {
                app.quit();
            }
        }
    ]
}];

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// If MAC, add empty object to menu
if (process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}

// Add developer tools item if not in production
if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [{
            label: 'Toggle DevTools',
            accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
            click(item, focusedWindow) {
                focusedWindow.toggleDevTools();
            }
        }, {
            role: 'reload'
        }]
    });
}