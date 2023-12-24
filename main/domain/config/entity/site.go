/*
 * @Author: coller
 * @Date: 2023-12-20 21:46:14
 * @LastEditors: coller
 * @LastEditTime: 2023-12-24 17:07:58
 * @Desc:
 */
package entity

import (
	"strings"

	"github.com/duke-git/lancet/v2/random"
)

type Site struct {
	Name        string `json:"name"`
	URL         string `json:"url"`
	Title       string `json:"title"`
	Keywords    string `json:"keywords"`
	Description string `json:"description"`
	Salt        string `json:"salt"`
}

func NewSite() *Site {
	return &Site{Name: "selfx", Title: "Hello selfX", Salt: random.RandString(10)}
}

func (*Site) ConfigID() string {
	return "site"
}

func (s *Site) GetURL() (url string) {
	url = s.URL
	if url == "" {
		return
	}
	if !strings.HasPrefix(url, "http://") && !strings.HasPrefix(url, "https://") && !strings.HasPrefix(url, "//") {
		url = "//" + url
	}
	if strings.HasSuffix(url, "/") {
		url = strings.TrimSuffix(url, "/")
	}
	return
}
