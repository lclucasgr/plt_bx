const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1CkeM3vd9KnRUQe6BdqR2DflOjXWRkZibyQAl9QAmen4')

const run = async() => {
  try{
     await doc.useServiceAccountAuth(credentials)
     await doc.loadInfo()
     console.log(doc.title)

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A2:B2')
    const showPromotionCell = sheet.getCell(1, 0)
    const textCell = sheet.getCell(1, 1)
  } catch(err){

  }  
}
run()