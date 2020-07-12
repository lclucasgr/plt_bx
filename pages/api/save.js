import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const getCupom = () => {
    const code = parseInt(moment().format('YYMMDDHHssSSS')).toString(16).toUpperCase()
    return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {

    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY,
        })
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)

        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A2:B2')
        const showPromotionCell = sheetConfig.getCell(1, 0)
        const textCell = sheetConfig.getCell(1, 1)

        let Cupom = ''
        let Promocao = ''

        if(showPromotionCell.value === 'VERDADEIRO'){
            Cupom = getCupom()
            Promocao = textCell.value
        }
  
      await sheet.addRow({
          Nome: data.Nome,
          Email: data.Email,
          Whatsapp: data.Whatsapp,
          Nota: parseInt(data.Nota),
          'Data Envio': moment().format('DD/MM/YYYY,  HH:mm:ss a'),
          Cupom,
          Promocao
      })
      res.end(JSON.stringify({
          showCoupon: Cupom !== '',
          Cupom, 
          Promo

      }))
     }catch(err)
     {
         res.end('error')
     }
}