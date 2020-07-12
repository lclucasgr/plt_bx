const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1CkeM3vd9KnRUQe6BdqR2DflOjXWRkZibyQAl9QAmen4')

const run = async() => {

    try{
      await doc.useServiceAccountAuth(credentials)
      await doc.loadInfo()
      const sheet = doc.sheetsByIndex[1]

    await sheet.addRow({
        Nome: 'Lucas Groxko',
        Email: 'lclucasgr@gmail.com',
        Whatsapp: '(42)99809-6788',
        Cupom: 'iwfoe23049',
        Promocao: '10% desconto'
    })
   }catch(err)
   {
       
   }
}
run()