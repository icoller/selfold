/*
 * @Author: coller
 * @Date: 2023-12-20 22:04:25
 * @LastEditors: coller
 * @LastEditTime: 2023-12-24 17:20:40
 * @Desc: 入口
 */
package main

import (
	"selfx/app/web/router"
	_ "selfx/startup"
)

func main() {

	err := router.New().Run()
	if err != nil {
		panic(err)
	}
}
