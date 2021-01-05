
ComparisonResult = {
  orderedAscending: -1,
  orderedSame: 0,
  orderedDescending: 1
}

/**
 * 根据传入进来排序要求，来对 a、b 进行比较
 * @param {*} a 前一个参数
 * @param {*} b 后一个参数
 * @param {*} order 排序要求（升序、降序）
 */
const _orderBy = (a, b, order) => {
  if (a == b)   return ComparisonResult.orderedSame
  if (a > b)    return order * ComparisonResult.orderedAscending
  if (a < b)    return order * ComparisonResult.orderedDescending
}

class Sort {
  /// 升序排序
  static ascendingOrder = (a, b) => _orderBy(a, b, ComparisonResult.orderedAscending)
  /// 降序排序
  static descendingOrder = (a, b) => _orderBy(a, b, ComparisonResult.orderedDescending)

  static transformIdentity = item => item

  /**
   * 排序描述器的生成函数
   * @param {*} transform 接收一个正在排序的数组的元素，并返回这个排序符所要处理的属性值
   * @param {*} orderBy   比较 `transform` 函数返回的结果
   */
  static descriptor = (transform = Sort.transformIdentity, orderBy = Sort.ascendingOrder) => (lhs, rhs) => orderBy(transform(lhs), transform(rhs))
  
  /**
   * 聚合描述符，将多个排序描述符合并成一个
   * 它首先会使用第一个描述符，并检查比较的结果。如果相等，再使用第二个，第三个，直到全部用完
   * 
   * @param  {...any} descriptors 排序描述符序列
   */
  static combine = (...descriptors) => {
    return (lhs, rhs) => {
      let result = ComparisonResult.orderedSame
      for (const descriptor of descriptors) {
        result = descriptor(lhs, rhs)
        if (result == ComparisonResult.orderedSame)   continue
        return  result
      }
      return result
    }
  }
}

module.exports = Sort