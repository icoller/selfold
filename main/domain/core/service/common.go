/*
 * @Author: coller
 * @Date: 2023-12-20 21:46:14
 * @LastEditors: coller
 * @LastEditTime: 2023-12-24 17:03:37
 * @Desc:
 */
package service

import "selfx/infra/utils"

// 根据最大ID和限制计算伪随机id集合
func pseudorandomIds(maxID, limit int) (res []int) {
	if maxID == 0 {
		return
	}
	for i := 0; i < limit; i++ {
		res = append(res, utils.RandRangeInt(0, maxID+1))
	}
	return
}
