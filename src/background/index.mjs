import Browser from "webextension-polyfill";

console.log('backround',chrome)

// const port = Browser.runtime.connect()


Browser.runtime.onConnect.addListener((port) => {
  console.log({port})
  port.onMessage.addListener(async (msg) => {
    console.log("received msg", msg);
  });
});

fetch('https://www.baidu.com/s?ie=utf-8&mod=1&isbd=1&isid=D3877E8478586591&ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E6%B5%8B%E8%AF%95&fenlei=256&rsv_pq=0x96c8671e00014940&rsv_t=51d5c8%2BVXbpNpYF586eraLosY9FlFdGKJq1jrWI5s7Urcad4h1UkA%2FZH%2Ffx5&rqlang=en&rsv_dl=tb&rsv_enter=0&rsv_sug3=10&rsv_sug1=8&rsv_sug7=101&rsv_btype=i&prefixsug=%25E6%25B5%258B%25E8%25AF%2595&rsp=9&inputT=7468&rsv_sug4=8350&rsv_sug=1&rsv_sid=37855_36556_37833_37840_37766_37813_37796_37761_37759_26350_37881&_ss=1&clist=&hsug=%E6%B5%8B%E8%AF%95&f4s=1&csor=2&_cr1=38721').then(res=>{
  console.log({res})
})
