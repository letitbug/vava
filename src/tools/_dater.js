/**
 * Format Date & Time format
 * @param date {number|string|Date} 毫秒型日期或者Date
 * @param fmt {string|undefined} like 'yyyy.MM.dd hh:mm:ss'
 * @returns {string|null}
 */
export const dateFormat = (date, fmt) => {
  if (!date) return null

  // Convert the millisecond Date to Date
  if (typeof date !== 'object') {
    if (('' + date).length === 10) date = +date * 1000
    date = new Date(+date)
  }

  if (!fmt) fmt = 'yyyy.MM.dd'

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length))
    }
  }
  return fmt
}

export const dateAgo = date => {
  if (!date) return null

  if (typeof date !== 'object') {
    if (('' + date).length === 10) date = +date * 1000
    date = new Date(+date)
  }

  const diff = (new Date() - date) / 1000

  if (diff < 60) return 'just now'
  else if (diff < 3600) return Math.floor(diff / 60) + ' minutes ago'
  else if (diff < 3600 * 24) return Math.floor(diff / 3600) + ' hours ago'
  else if (diff < 3600 * 24 * 30) return Math.floor(diff / 3600 / 24) + ' days ago'
  else if (diff < 3600 * 24 * 30 * 12) return Math.floor(diff / 3600 / 24 / 30) + ' months ago'
  else return Math.floor(diff / 3600 / 24 / 30 / 12) + ' years ago'
}

export default {
  format: dateFormat,
  ago: dateAgo
}