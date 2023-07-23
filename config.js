/*
    Created & Base By ArxzyDev
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6289513081052
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Adrian-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
   Script Ini Di Modifikasi / Di Tulis Ulang Oleh YoriMikuXD/Yori Hosting Dan Script Ini 89% No Enc

    Jika Tidak Ada Alat Untuk Run Script Bot Silahkan Beli Panel Di Owner Yori Hosting Minat Hubungi : wa.me/6282332208755
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = '_' // LOLHUMAN
global.rosekey = '_' // ROSE

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'ENTITY-BOT'
global.namaowner = 'Ibra Jacquille'

//—————「 Setting Owner 」—————//
global.owner = ['628983784623']
global.nomerowner = '628983784623'
global.premium = ['628983784623']

//—————「 Set Wm 」—————//
global.packname = 'By Ibra Jacquille\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = 'ENTITY-BOT By Ibra Jacquille'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: 'Successfully ✅',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin Group ❗❓',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group ❗❓',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner ❗❓',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group Chat ❗❓',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private Chat ❗❓',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot ❗❓',
    wait: '⏳ Sedang Di Proses ',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: 'This Feature Error, Owner Will Fix It 🚫',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 15
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/48f1ce6bd5a175e6673f0.jpg'
global.link = 'https://youtube.com/@YoriMikuXDs'
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
