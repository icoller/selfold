/*
 * @Author: coller
 * @Date: 2023-12-20 21:46:14
 * @LastEditors: coller
 * @LastEditTime: 2023-12-24 17:02:04
 * @Desc:
 */
package drivers

import (
	"selfx/infra/persistent/storage"
)

type Temp struct {
}

func (t *Temp) Init() error {
	return nil
}

func (t *Temp) Close() error {
	return nil
}

func (t *Temp) Get(key string) (*storage.GetValue, error) {
	return nil, nil
}

func (t *Temp) Set(key string, val *storage.SetValue) error {
	return nil
}

func (t *Temp) Delete(key string) error {
	return nil
}
