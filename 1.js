const assert = require('assert')
/**
 * 实现一个函数，可以对一系列版本号进行从小到大的排序
 * 版本号列表 demo: ['1.0.0', '2.12.1', '1.2.3.4.5.6.7', '0.18.1']
 *
 * function sortVersion(list) {}
 */

function sortVersion(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (compareVersion(arr[j], arr[j + 1]) > 0) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

function compareVersion(v1, v2) {
  let index = 0
  const v1list = v1.split('.').map((item) => parseInt(item))
  const v2list = v2.split('.').map((item) => parseInt(item))

  while (index <= v1list.length && index <= v2list.length) {
    if (v1list[index] > v2list[index]) {
      return 1
    } else if (v1list[index] < v2list[index]) {
      return -1
    }
    index++
  }
  if (v1list.length > v2.length) {
    return 1
  } else if (v1list.length < v2.length) {
    return -1
  }
  return 0
}

/******测试部分*******/
function doTest() {
  try {
    // assert.strictEqual(compareVersion('0.1.1', '0.1.2'), -1)
    // assert.strictEqual(compareVersion('0.1.1', '0.1.1'), 0)
    // assert.strictEqual(compareVersion('0.1.1', '1.2'), -1)
    // assert.strictEqual(compareVersion('1.1', '0.1.2'), 1)
    // assert.strictEqual(compareVersion('1.1', '1.2'), -1)
    // assert.strictEqual(compareVersion('1.2', '1.2'), 0)
    // assert.strictEqual(compareVersion('1.2', '1.1.1'), 1)
    assert.deepStrictEqual(
      sortVersion(['1.0.0', '2.12.1', '1.2.3.4.5.6.7', '0.18.1']),
      ['0.18.1', '1.0.0', '1.2.3.4.5.6.7', '2.12.1']
    )
    assert.deepStrictEqual(
      sortVersion(['0.1.1', '2.12.1', '0.18.1', '0.1.2.0.2']),
      ['0.1.1', '0.1.2.0.2', '0.18.1', '2.12.1']
    )
    console.log('ok')
  } catch (err) {
    console.log('fail', err)
  }
}
doTest()
