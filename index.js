var GoogleForm = require('google-form-post')
const process = require('process');
const wait = require('wait')
const { Worker } = require('worker_threads');

var randomBytes = require('randombytes');
var count = 0
console.clear()
const { firefox } = require('playwright'); 
console.log('Starting...')
Run()
async function Run(){
  console.log('Login...')
  const browser = await firefox.launch({ headless: false }); 
  const context = await browser.newContext({viewport: { width: 500, height: 500 }}); 
  const page = await context.newPage();

  await page.goto('https://docs.google.com/forms/d/e/1FAIpQLScBrhm8I71ZfO9dLMCdyzMPDlNkqZkRRzd_GgBNtQuyk9wX3w/viewform');
  await page.fill('input[type="email"]', 'cfsspammer0001@gmail.com'); 
  await page.click('#identifierNext');
  await page.waitForSelector('input[type="password"]');
  await page.fill('input[type="password"]', '123qweasdzxcasdd'); 
  await page.click('#passwordNext');
 
  FillForm()
  async function FillForm () {
    try{
      console.log('[+] Filling the Doc form!')
      let ans = randomBytes(3);
      await page.waitForSelector('[aria-labelledby="i1"]');
      let input = await page.$('[aria-labelledby="i1"]');
      await input.fill(`Banws tum lum qua troi qua dat ${ans}`);
    
      await page.waitForSelector('[aria-labelledby="i10"]');
      let input1 = await page.$('[aria-labelledby="i10"]');
      await input1.fill('https://facebook.com');
      await page.click('#i18');
      await page.click('div[jsname="M2UYVd"] span.NPEfkd.RveJvd.snByac');
      await page.waitForNavigation({ waitUntil: 'networkidle' });
      console.log('[+] Submited the form')
      count = count + 1
      process.title = `Forms sent: ${count}`;
      await page.goto('https://docs.google.com/forms/d/e/1FAIpQLScBrhm8I71ZfO9dLMCdyzMPDlNkqZkRRzd_GgBNtQuyk9wX3w/viewform');
      await FillForm()
     
    }catch (err){
      console.log(err)
      Run()
    }
    
    
    
  }
    
  ;
}


 





/*
while (true){
        count = count + 1
        let ans = randomBytes(70);
        var form = new GoogleForm('https://docs.google.com/forms/d/e/1FAIpQLScBrhm8I71ZfO9dLMCdyzMPDlNkqZkRRzd_GgBNtQuyk9wX3w/viewform')
        form.addField('entry.1645533657', ans.toString())
        form.addField('entry.1977324217', `https://discord.gg/CRVw2c73`)
        form.addField('entry.73807878', ans.toString())
        form.addField('entry.843183758', '#AllCampus')
        form.addField('emailAddress', `spamcfs@gmail.com`)
        form.addField('token', `nkZgvYcBAAA.gfoXnS0Bd1OwgQmWJx7bRw.Z16_j_rJVLYqirI4HmCb5w`)
       
        wait(400)
        form.send()
        process.title = `Forms sent: ${count}`;
        console.log(`${count} form sent to the link. Random answer: ${ans.toString()}`)
}
      */
        


