import Mock from 'mockjs'
import Roles from './roles'
import avatars from './avatars'
import { Urls } from '@/tools'

const userList = []
const Preset = ['Charles', 'Linda', 'Nancy', 'Karen', 'Jennifer']

const generateRole = index => {
  return Roles.filter((v, i) => index <= i)
}

Roles.forEach((v, i) => {
  const token = Roles[i]
  const avatar = avatars[i]
  const rd = Mock.mock({
    roles: generateRole(i),
    token: token,
    code: '@id',
    username: token,
    intro: 'I\'m a ' + token,
    avatar: require('@/assets/images/avatars/' + avatar),
    status: 1
  })
  userList.push(rd)
})

Preset.forEach((v, i) => {
  const avatar = avatars[i + 5]
  const rd = Mock.mock({
    roles: generateRole(i),
    token: v,
    code: '@id',
    username: v,
    intro: 'My name is ' + v,
    avatar: require('@/assets/images/avatars/' + avatar),
    status: 1
  })
  userList.push(rd)
})

userList.sort((a, b) => a.roles.length > b.roles.length ? -1 : 1)

export default {
  login: config => {
    const { username } = JSON.parse(config.body)
    return userList.find(v => v.username === username ? v : null)
  },
  info: config => {
    const { token } = Urls.parse(config.url)
    return userList.find(v => v.token === token ? v : null)
  },
  update: config => {
    const data = JSON.parse(config.body)
    console.log(data)
    return 'success'
  },
  logout: () => 'success',
  list: () => userList,
  auditors: () => userList.filter(v => ~v.roles.indexOf('audit'))
}
