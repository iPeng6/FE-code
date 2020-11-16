/**
 * 有一些互不相交的ip段，例如
[180.160.0.0, 180.175.255.255] 上海
[101.80.0.0, 101.95.255.255] 上海
[110.240.0.0, 110.255.255.255] 河北
[14.104.0.0， 14.111.255.255] 重庆
…… （大约10万行）

写一个方法，通过ip搜索返回ip对应的地区名
 */

function compareIp(ip1, ip2) {
  const sip1 = ip1
    .split('.')
    .map((item) => item.padStart(3, 0))
    .join('')
  const sip2 = ip2
    .split('.')
    .map((item) => item.padStart(3, 0))
    .join('')

  return ip1 > ip2
}

function include(range, ip) {
  const [start, end] = range
  return compareIp(ip, start) && compareIp(end, ip)
}

function search(ip) {
  return ipAddress.find((item) => include(item.range, ip))
}

/**
 * 如果数据有顺序？
 */

// 二分查找
