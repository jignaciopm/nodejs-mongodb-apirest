import '@babel/polyfill'
import app from './app'
import {connect} from './database'

async function main() {
    const port = app.get('port')
    await app.listen(port)
    await connect()
    console.log(`Server on port ${port}`)
}

main()