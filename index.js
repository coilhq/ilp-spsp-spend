const plugin = require('ilp-plugin')()
const SPSP = require('ilp-protocol-spsp')

async function run () {
  await plugin.connect()

  while (true) {
    try {
      await SPSP.pay(plugin, {
        receiver: process.env.PAYMENT_POINTER || '$spsp.ilp-test.com',
        sourceAmount: '10'
      })
      console.log('sent!')
    } catch (e) {
      console.error(e)
    }

    await new Promise(resolve => setTimeout(resolve, 5000))
  }
}

run()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
