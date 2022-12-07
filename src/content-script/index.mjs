import Browser from "webextension-polyfill";

console.log('content-script')


const port = Browser.runtime.connect()
console.log({port})
port.postMessage('我发送了一个问题')