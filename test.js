'use strict'

const spawn = require('child_process').spawn
const path = require('path')
const os = require('os')

const env = process.env

env.IPFS_PATH = path.join(os.tmpdir(), `ipfs_${String(Math.random()).substr(2)}`)

const child = spawn('./node_modules/go-ipfs-dep/go-ipfs/ipfs', [
  'init'
], {env})

child.stdout.on('data', (data) => {
  console.log('out: ', data.toString())
})

child.stderr.on('data', (data) => {
  console.log('err: ', data.toString())
})

child.on('close', (code) => {
  console.log('finished')
})
