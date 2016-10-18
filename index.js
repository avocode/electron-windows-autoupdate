const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow


let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600, visible: true})

  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
